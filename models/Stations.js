var mongoose = require('mongoose'),
	Q        = require('q');

var StationSchema = new mongoose.Schema({
	number: String,
	location: {
		type: {type: String},
		coordinates: []
	},
	municipality: String,
	state: String,
	address: String,
	zipcode: {type: Number, default: 0}
});

var isValidLatitude = function (latitude) {
	return latitude >= -90 && latitude <= 90;
};

var isValidLongitude = function (longitude) {
	return longitude >= -180 && longitude <= 180;
};

StationSchema.statics.getNearStations = function (latitude, longitude, distance) {
	var deferred = Q.defer();

	if (!isValidLatitude(latitude)) {
		deferred.reject('Latitude values should go from -90 to 90');
	} else if (!isValidLongitude(longitude)) {
		deferred.reject('Longitude values should go from -180 to 180');
	} else {
		this.aggregate([{
			$geoNear: {
				near: {
					type: 'Point',
					coordinates: [longitude, latitude]
				},
				distanceField: 'dist.distance',
				maxDistance: distance || 1000,
				spherical: true
			}
		}], function (err, stations) {
			if (err) {
				deferred.reject(err);
			} else {
				deferred.resolve(stations);
			}
		});
	}


	return deferred.promise;
};

StationSchema.statics.saveOrUpdate = function (stationData) {
	var properties = stationData.properties,
		coords     = stationData.geometry.coordinates,
		Station    = mongoose.model('Station'),
		deferred   = Q.defer();

	this.count({ number: properties.ID }, function (err, count) {
		if (count === 0) {
			var station = new Station({
				number: properties.ID,
				location: {
					type: 'Point',
					coordinates: [coords[0], coords[1]]
				},
				municipality: properties.MUNICIPIO,
				state: properties.ESTADO,
				address: properties.CALLE,
				zipcode: properties.CP
			});

			station.save(function(err, station){
				if(err) {
					deferred.reject(err);
				} else {
					deferred.resolve(station);
				}
			});
		}
	});

	return deferred.promise;
};

StationSchema.statics.findByNumber = function (number) {
	var deferred = Q.defer();

	this.find({number: number}, function (err, station) {
		if (err) {
			deferred.reject(err);
		} else if (!station || station.length === 0) {
			deferred.reject(new Error('can\'t find station'));
		} else {
			deferred.resolve(station);
		}
	});

	return deferred.promise;
};

StationSchema.index({location: '2dsphere'});

mongoose.model('Station', StationSchema);
