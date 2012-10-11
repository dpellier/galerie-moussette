var mongoose = require('mongoose'),
	config = require('./config').config();
var Schema = mongoose.Schema;

db = mongoose.connect(config.databaseUri);

var Image = db.model('Image', new Schema({
	'type': {type: String, index: true},
	'data': String
}));

exports.Image = Image;