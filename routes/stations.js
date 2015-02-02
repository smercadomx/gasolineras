var express          = require('express'),
	paginate         = require('express-paginate'),
	router           = express.Router(),
	fs               = require('fs'),
	mongoose         = require('mongoose'),
	Station          = mongoose.model('Station');

router.param('station', function(req, res, next, id) {
	Station.findByNumber(id).then(function (station) {
		req.station = station;
		return next();
	}, function (err) {
		if (err) {
			return next(err);
		}
	});
});

router.get('/stations/:station', function (req, res) {
	res.json(req.station);
});

router.get('/stations', function (req, res, next) {
	Station.paginate({}, req.query.page, req.query.limit,
		function(err, pageCount, users) {
		if (err) {
			return next(err);
		}

		res.format({
			json: function() {
				res.json({
					object: 'list',
					hasMore: paginate.hasNextPages(req)(pageCount),
					data: users
				});
			}
		});
	});
});

router.get('/nearstations', function (req, res) {
	if (req.query.latitude && req.query.longitude) {
		Station.getNearStations(
			parseFloat(req.query.latitude),
			parseFloat(req.query.longitude),
			parseFloat(req.query.distance)).then(function (stations) {
				res.json(stations);
			}, function (err) {
				res.json({error: err});
			});
	} else {
		res.json({error: 'latitude and longitude values are required.'});
	}
});

router.get('/importstations', function (req, res) {
	var stations = JSON.parse(fs.readFileSync('estaciones.json', 'utf8'));

	for (var i = stations.features.length - 1; i >= 0; i--) {
		Station.saveOrUpdate(stations.features[i]);
	}

	res.json({msg: 'import successfull'});
});

module.exports = router;
