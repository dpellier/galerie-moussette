var mongoose = require('mongoose');
var Schema = mongoose.Schema;

db = mongoose.connect('mongodb://localhost/theGallery');
	
var Image = db.model('Image', new Schema({
	'type': {type: String, index: true},
	'data': String,
	'url' : String
}));

exports.Image = Image;