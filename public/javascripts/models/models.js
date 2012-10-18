window.App = {};

App.Image = Backbone.Model.extend({
	
});

App.Images =  Backbone.Collection.extend({
	model: App.Image,
	url: '/api/images'
});

App.Pictures = App.Images.extend({
	url: '/api/pictures'
});

App.Collages = App.Images.extend({
	url: '/api/collages'
});

App.Drawings = App.Images.extend({
	url: '/api/drawings'
});