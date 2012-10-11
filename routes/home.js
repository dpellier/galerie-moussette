var Image = require('../models').Image;

exports.render = function(req, res) {
	// TODO
	// count how many images
	// pick random images
	Image.find({}, 'data', function(err, documents) {
		res.render('home', {images: documents});
	});
};