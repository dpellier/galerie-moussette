App.ArtsView = Backbone.View.extend({
	el: $("#mainContent"),
	images: new App.Images(),
    render: function() {
    	$(this.el).html(templatizer.arts({images:this.images.models}));
    	
    	$('#fp_thumbContainer').imagesLoaded({
    		callback: function() {
    			openGallery($('#artListCollages'));
    			$('.slide_loading').hide();
    		}
	    });
    }
});

App.PicturesView = App.ArtsView.extend({
	initialize: function() {
		$('.slide_loading').show();
		
		this.images = App.pictures;
		App.pictures.bind('all', this.render, this);
    	App.pictures.models.length == 0 ? App.pictures.fetch() : this.render();
    }
});

App.CollagesView = App.ArtsView.extend({
	initialize: function() {
		$('.slide_loading').show();
		
		this.images = App.collages;
		App.collages.bind('all', this.render, this);
		App.collages.models.length == 0 ? App.collages.fetch() : this.render();
    }
});

App.DrawingsView = App.ArtsView.extend({
	initialize: function() {
		$('.slide_loading').show();
		
		this.images = App.drawings;
		App.drawings.bind('all', this.render, this);
		App.drawings.models.length == 0 ? App.drawings.fetch() : this.render();
    }
});
