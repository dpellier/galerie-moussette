App.MainRouter = Backbone.Router.extend({
	routes: {
		"": "home",
		"myself": "myself",
		"pictures": "pictures",
		"collages": "collages",
		"drawings": "drawings",
		"contact": "contact"
	},
	home: function() {
		var homeView = new App.HomeView();
	},
	myself: function() {
		var myselfView = new App.MyselfView();
	},
	pictures: function() {
		var picturesView = new App.PicturesView();
	},
	collages: function() {
		var collagesView = new App.CollagesView();
	},
	drawings: function() {
		var drawingsView = new App.DrawingsView();
	},
	contact: function() {
		var contactView = new App.ContactView();
	}
});