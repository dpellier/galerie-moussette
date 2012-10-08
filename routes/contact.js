exports.render = function(req, res) {
	res.render('contact', {sended: false});
}

exports.send = function(req, res) {
	res.sendEmail('email', {
		from: req.body.email,
		to: 'dpellier@gmail.com',
	    subject: 'La galerie - message de ' + req.body.email,
	    text: req.body.text
	}, function (err) {
		if (err) {
			console.log(err);
			res.send(500);
			return;
		}
		res.send(200);
	});
}