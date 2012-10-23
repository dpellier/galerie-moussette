App.HomeView = Backbone.View.extend({
    el: $("#mainContent"),
    initialize: function() {
    	$('.slide_loading').show();

    	App.images.fetch({
    		success: _.bind(function(col, res) {
    			App.pictures.add(col.where({type: 'pictures'}));
    			App.collages.add(col.where({type: 'collages'}));
    			App.drawings.add(col.where({type: 'drawings'}));
    			
    			this.render();
    		}, this)
    	});
    },
	render: function() {
		$(this.el).html(templatizer.home({images:App.images.models}));
		
		$('#homeGallery').imagesLoaded({
			progress: function() {
				createPolaroid(this);
			},
			callback: function() {
				$('.home-img').removeClass('hidden');
				$('.slide_loading').hide();
			}
		});
	}
});