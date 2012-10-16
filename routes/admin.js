var Image = require('../models').Image,
	fs = require('fs');

exports.main = function(req, res) {
	if (req.session.user) {
		if (req.params) {
			var media = req.params.media,
				type = req.params.type;
			switch(media) {
				case 'arts':
					editArts(req, res, type);
					break;
				default:
					res.render('admin_menu');
			}
		} else
			res.render('admin_menu');
	} else
		res.render('login', {error: ''});
}

function editArts(req, res, type) {
	Image.find({type: type}, 'data', function(err, documents) {
		res.render('admin_images', {images: documents, type: type});
	});
}

exports.upload = function(req, res) {
	var type = req.params.type;

	fs.readFile(req.files.browseImage.path, function (err, data) {
		var buf = new Buffer(data).toString('base64'),
			newImg = new Image({type: type, data: buf});

		newImg.save(function(err) {
			if (err) {
				console.log(err);
				res.send(500);
			} else
				res.redirect('back');
		});
	});
}