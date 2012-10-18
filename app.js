
/**
 * Module dependencies.
 */

var express = require('express')
  , mailer = require('express-mailer')
  , Image = require('./models/models').Image
  , login = require('./login')
  , admin = require('./admin')
  , config = require('./config').config()
  , http = require('http')
  , path = require('path')
  , templatizer = require('templatizer');

var app = express();

app.use(mailer({
	  from: 'no-reply@galerie-moussette.com',
	  host: config.smtp,
	  secureConnection: true,
	  port: 465,
	  auth: {
	    user: config.mailLogin,
	    pass: config.mailPwd
	  }
}));

app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views/admin');
  app.set('view engine', 'jade');	// engine is only use for admin
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('coucou, tu veux voir m...on secret'));
  app.use(express.session());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(app.router);
});

app.configure('development', function() {
  app.use(express.errorHandler());
});

app.configure('production', function() {
  app.use(express.errorHandler({dumpExceptions: false, showStack: false}));
});


/**
 * REST routing
 */
app.get('/api/images', function(req, res) {
	return Image.find({}, function(err, images) {
		return res.send(images);
	});
});
app.get('/api/pictures', function(req, res) {
	return Image.find({type: 'pictures'}, function(err, images) {
		return res.send(images);
	});
});
app.get('/api/collages', function(req, res) {
	return Image.find({type: 'collages'}, function(err, images) {
		return res.send(images);
	});
});
app.get('/api/drawings', function(req, res) {
	return Image.find({type: 'drawings'}, function(err, images) {
		return res.send(images);
	});
});

/*
 * Admin routing
 */
app.post('/login', login.authenticate);
app.get('/login', login.login);
app.get('/logout', login.logout);
app.get('/admin', admin.main);
app.get('/admin/:media/:type', admin.main);

// Default to 404
app.get('*', function(req, res) {
	res.send(404);
	// TODO redirect on 404 view
});

/*
 * Post handlers
 */
app.post('/upload/:type', admin.upload);
app.post('/send', function(req, res) {
	// TODO fix template problem
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
});

// Generate html templates as javascript functions
templatizer(__dirname + '/views/site', __dirname + '/public/javascripts/template.js');

http.createServer(app).listen(app.get('port'), function() {
  console.log("Express server listening on port " + app.get('port'));
});
