var Image = require('../models').Image;

exports.list = function(req, res) {
	var type = req.originalUrl.substring(1);
	
//-----------------------------------------------------------------------------
	// TO REMOVE
	var collection = '';
	if (type == 'pictures')
		collection = initPictures();
	if (type == 'collages')
		collection = initCollages();
	
	Image.remove({}, function() {
		var finish = [];
		if (collection != '') {
		collection.forEach(function (item) {
		    item.save(function (err) {
		    	finish.push(err);
		        if (finish.length === collection.length)
		        {
//-----------------------------------------------------------------------------
	
	Image.find({type: type}, 'url', function(err, documents) {
		res.render('arts', {images: documents});
	});

//-----------------------------------------------------------------------------
	// TO REMOVE
		        }
		    });
		});
		}
	});
//-----------------------------------------------------------------------------
};

//-----------------------------------------------------------------------------
// TO REMOVE
function initPictures() {
	return [
	        new Image({type: 'pictures', data: '', url: 'images/pictures/picture1.jpg'}),
	        new Image({type: 'pictures', data: '', url: 'images/pictures/picture2.jpg'}),
	        new Image({type: 'pictures', data: '', url: 'images/pictures/picture3.jpg'}),
	        new Image({type: 'pictures', data: '', url: 'images/pictures/picture4.jpg'}),
	        new Image({type: 'pictures', data: '', url: 'images/pictures/picture5.jpg'}),
	        new Image({type: 'pictures', data: '', url: 'images/pictures/picture6.jpg'}),
	        new Image({type: 'pictures', data: '', url: 'images/pictures/picture7.jpg'}),
	        new Image({type: 'pictures', data: '', url: 'images/pictures/picture8.jpg'}),
	        new Image({type: 'pictures', data: '', url: 'images/pictures/picture9.jpg'}),
	        new Image({type: 'pictures', data: '', url: 'images/pictures/picture10.jpg'}),
	        new Image({type: 'pictures', data: '', url: 'images/pictures/picture11.jpg'}),
	        new Image({type: 'pictures', data: '', url: 'images/pictures/picture12.jpg'}),
	        new Image({type: 'pictures', data: '', url: 'images/pictures/picture13.jpg'}),
	        new Image({type: 'pictures', data: '', url: 'images/pictures/picture14.jpg'}),
	        new Image({type: 'pictures', data: '', url: 'images/pictures/picture15.jpg'}),
	        new Image({type: 'pictures', data: '', url: 'images/pictures/picture16.jpg'}),
	        new Image({type: 'pictures', data: '', url: 'images/pictures/picture17.jpg'}),
	        new Image({type: 'pictures', data: '', url: 'images/pictures/picture18.jpg'}),
	        new Image({type: 'pictures', data: '', url: 'images/pictures/picture19.jpg'}),
	        new Image({type: 'pictures', data: '', url: 'images/pictures/picture20.jpg'}),
	        new Image({type: 'pictures', data: '', url: 'images/pictures/picture21.jpg'}),
	        new Image({type: 'pictures', data: '', url: 'images/pictures/picture22.jpg'}),
	        new Image({type: 'pictures', data: '', url: 'images/pictures/picture23.jpg'}),
	        new Image({type: 'pictures', data: '', url: 'images/pictures/picture24.jpg'}),
	        new Image({type: 'pictures', data: '', url: 'images/pictures/picture25.jpg'}),
	        new Image({type: 'pictures', data: '', url: 'images/pictures/picture26.jpg'}),
	        new Image({type: 'pictures', data: '', url: 'images/pictures/picture27.jpg'}),
	        new Image({type: 'pictures', data: '', url: 'images/pictures/picture28.jpg'})
    ];
}

function initCollages() {
	return [
        	new Image({type: 'collages', data: '', url: 'images/collages/Collage3.jpg'}),
	        new Image({type: 'collages', data: '', url: 'images/collages/Collage4.jpg'}),
	        new Image({type: 'collages', data: '', url: 'images/collages/Collage5.jpg'}),
	        new Image({type: 'collages', data: '', url: 'images/collages/Collage6.jpg'}),
	        new Image({type: 'collages', data: '', url: 'images/collages/Collage8.jpg'}),
	        new Image({type: 'collages', data: '', url: 'images/collages/Collage10.jpg'}),
	        new Image({type: 'collages', data: '', url: 'images/collages/Collage11.jpg'}),
	        new Image({type: 'collages', data: '', url: 'images/collages/Collage12.jpg'}),
	        new Image({type: 'collages', data: '', url: 'images/collages/Collage13.jpg'}),
	        new Image({type: 'collages', data: '', url: 'images/collages/Collage14.jpg'}),
	        new Image({type: 'collages', data: '', url: 'images/collages/Collage15.jpg'}),
	        new Image({type: 'collages', data: '', url: 'images/collages/Collage16.jpg'}),
	        new Image({type: 'collages', data: '', url: 'images/collages/Collage17.jpg'}),
	        new Image({type: 'collages', data: '', url: 'images/collages/Collage18.jpg'}),
	        new Image({type: 'collages', data: '', url: 'images/collages/Collage19.jpg'}),
	        new Image({type: 'collages', data: '', url: 'images/collages/Collage20.jpg'}),
	        new Image({type: 'collages', data: '', url: 'images/collages/Collage21.jpg'}),
	        new Image({type: 'collages', data: '', url: 'images/collages/Collage22.jpg'}),
	        new Image({type: 'collages', data: '', url: 'images/collages/Collage23.jpg'}),
	        new Image({type: 'collages', data: '', url: 'images/collages/Collage24.jpg'}),
	        new Image({type: 'collages', data: '', url: 'images/collages/Collage25.jpg'}),
	        new Image({type: 'collages', data: '', url: 'images/collages/Collage26.jpg'}),
	        new Image({type: 'collages', data: '', url: 'images/collages/Collage27.jpg'}),
	        new Image({type: 'collages', data: '', url: 'images/collages/Collage28.jpg'}),
	        new Image({type: 'collages', data: '', url: 'images/collages/Collage29.jpg'}),
	        new Image({type: 'collages', data: '', url: 'images/collages/Collage30.jpg'}),
	        new Image({type: 'collages', data: '', url: 'images/collages/Collage31.jpg'}),
	        new Image({type: 'collages', data: '', url: 'images/collages/Collage32.jpg'}),
	        new Image({type: 'collages', data: '', url: 'images/collages/Collage33.jpg'}),
	        new Image({type: 'collages', data: '', url: 'images/collages/Collage34.jpg'}),
	        new Image({type: 'collages', data: '', url: 'images/collages/Collage35.jpg'}),
	        new Image({type: 'collages', data: '', url: 'images/collages/Collage36.jpg'}),
	        new Image({type: 'collages', data: '', url: 'images/collages/Collage37.jpg'}),
	        new Image({type: 'collages', data: '', url: 'images/collages/Collage38.jpg'})
    ];
}
//-----------------------------------------------------------------------------