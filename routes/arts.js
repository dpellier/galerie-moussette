var Image = require('../models').Image;

exports.list = function(req, res) {
	var type = req.originalUrl.substring(1);
	
	Image.find({type: type}, 'data', function(err, documents) {
		res.render('arts', {images: documents});
	});
};