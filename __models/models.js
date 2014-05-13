var mongoose = require('mongoose'),
	config = require('../config').config();
var Schema = mongoose.Schema;

db = mongoose.connect(config.databaseUri);

var Image = db.model('Image', new Schema({
	'type': {type: String, index: true},
	'href': String,
	'hrefMin': String
}));

var Work = db.model('Work', new Schema({
	'icon': String,
	'order': Number,
	'content': String
}));

exports.Image = Image;
exports.Work = Work;