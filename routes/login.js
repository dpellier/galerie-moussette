var User = require('../models').User,
	crypto = require('crypto');

exports.login = function(req, res) {
	res.render('login', {error: ''});
}

exports.logout = function(req, res) {
	req.session.destroy(function() {
		res.redirect('/');
	});
}

exports.authenticate = function(req, res) {
	authentication(req.body.username, req.body.password, function(err, user) {
		if (user) {
			req.session.regenerate(function() {
		        req.session.user = user;
		        res.redirect('admin');
			});
	    } else {
	    	console.log(err);
	    	res.render('login', {error:err});
	    }
	});
}

function authentication(name, pass, fn) {
	User.findOne({name: name.toLowerCase()}, 'name password', function(err, user) {
		if (!user)
			return fn('Nom d\'utilisateur introuvable');

		if (hash(pass) == user.password)
			return fn(null, user);
		fn('Mot de passse invalide');
	});
}

function hash(pass) {
	var shasum = crypto.createHash('sha1');
	return shasum.update(pass).digest('hex');
}