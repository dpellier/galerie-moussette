
/**
 * Module dependencies.
 */

var express = require('express')
  , mailer = require('express-mailer')
  , home = require('./routes/home')
  , myself = require('./routes/myself')
  , arts = require('./routes/arts')
  , contact = require('./routes/contact')
  , http = require('http')
  , path = require('path');

var app = express();

app.use(mailer({
	  from: 'no-reply@example.com',
	  host: 'smtp.gmail.com',
	  secureConnection: true,
	  port: 465,
	  auth: {
	    user: 'dpellier@gmail.com',
	    pass: 'reforgemoi'
	  }
}));

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.configure('production', function() {
  app.use(express.errorHandler({dumpExceptions: false, showStack: false}));
});

app.get('/', home.render);
app.get('/myself', myself.render);
app.get('/pictures', arts.list);
app.get('/collages', arts.list);
//app.get('/drawings', arts.list);
app.get('/contact', contact.render);
app.post('/send', contact.send);

app.get('*', function(req, res){
  res.render('404');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
