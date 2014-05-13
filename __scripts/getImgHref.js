/**
 * Fetch all the image href from an album in Google+
 * @params email : the google email of the account
 * @params password : the google password of the account
 * @params album : the g+ album url to fetch
 */

var casper = require('casper').create({
    pageSettings: {
        userAgent: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1468.0 Safari/537.36'
    },
    viewportSize: {width: 12800, height: 8000}, // we set a big screen so that G+ will load all image on first load
    waitTimeout: 10000
});

var email = casper.cli.get(0);
var password = casper.cli.get(1);
var album = casper.cli.get(2);

casper.start('https://accounts.google.com‎');

// Login
casper.waitForSelector('#Email', function() {
    this.fill('form#gaia_loginform', {
        'Email': email,
        'Passwd': password
    }, true);
});

// Go the album
casper.waitForSelector('a#nav-plus', function() {
    this.open(album);
});

// Fetch the images href
casper.waitForSelector('div.zMxm7c > img', function() {
    this.evaluate(function() {
        for (var i=0; i < document.querySelectorAll('div.zMxm7c > img').length; i++) {
            __utils__.echo(document.querySelectorAll('div.zMxm7c > img')[i].src);
        }
    });
});

casper.run();