$(function() {
	App.images = new App.Images();
	App.pictures = new App.Pictures();
	App.collages = new App.Collages();
	App.drawings = new App.Drawings();
	App.mainRouter = new App.MainRouter();

	Backbone.history.start();
});