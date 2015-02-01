var express = require('express');
var router  = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index');
});

router.post('/login', function (req, res) {
	if (req.body.email === 'test@gmail.com' &&
		req.body.password === 'test') {
		res.json({
			user: {
				id: 1,
				email: req.body.email
			}
		});
	} else {
		res.json({error: 'Usuario invalido'});
	}
});

module.exports = router;
