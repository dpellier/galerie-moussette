var Image = require('../models').Image,
	fs = require('fs');

exports.main = function(req, res) {
	// TODO add login form
	res.render('admin_menu');
}

exports.editArts = function(req, res) {
	var type = req.params.type;
	
	Image.find({type: type}, 'data', function(err, documents) {
		res.render('admin_images', {images: documents, type: type});
	});
}

exports.upload = function(req, res) {
	var type = req.params.type;

	fs.readFile(req.files.displayImage.path, function (err, data) {
		var buf = new Buffer(data).toString('base64'),
			newImg = new Image({type: type, data: buf});

		newImg.save(function(err) {
			if (err) {
				console.log(err);
				res.send(500);
			} else {
				// TODO update this to dynamic rendering
				Image.find({type: type}, 'data', function(err, documents) {
					res.render('admin_images', {images: documents, type: type});
				});
			}
		});
	});
}

// ajouter image
	// crop image
// supprimer image
// éditer texte myself