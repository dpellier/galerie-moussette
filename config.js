exports.config = function() {
	switch(process.env.NODE_ENV) {
	    case 'production':
	    	return {
		    	databaseUri: 'mongodb://admin:06cd924ee34d3918ec6c28ccb24623faba3b8e08@ds039027.mongolab.com:39027/heroku_app8244270',
		    	smtp: 'smtp.mailgun.org',
		    	mailLogin: 'postmaster@app8244270.mailgun.org',
		    	mailPwd: '99rkun4xxjb9'
		    };
	    default:
	    	return {
		    	databaseUri: 'mongodb://localhost/theGallery',
		    	smtp: 'smtp.mailgun.com',
		    	mailLogin: 'postmaster@app8244270.mailgun.org',
		    	mailPwd: '99rkun4xxjb9'
		    };
	}
}