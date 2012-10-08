var mongoose = require('mongoose');
var Schema = mongoose.Schema;

switch(process.env.NODE_ENV) {
    case 'production':
        db = mongoose.connect('mongodb://admin:Mdp19735@ds039027.mongolab.com:39027/heroku_app8244270');
        break;
    default:
    	db = mongoose.connect('mongodb://localhost/theGallery');
    	break;
}

var Image = db.model('Image', new Schema({
	'type': {type: String, index: true},
	'data': String,
	'url' : String
}));

exports.Image = Image;