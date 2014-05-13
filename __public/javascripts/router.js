App.MainRouter = Backbone.Router.extend({
	routes: {
		"": "home",
		"myself": "myself",
		"pictures": "pictures",
		"collages": "collages",
		"drawings": "drawings",
		"works": "works",
		"contact": "contact"
	},
	home: function() {
		new App.HomeView();
	},
	myself: function() {
		new App.MyselfView();
	},
	pictures: function() {
		new App.PicturesView();
	},
	collages: function() {
		new App.CollagesView();
	},
	drawings: function() {
		new App.DrawingsView();
	},
	works: function() {
		new App.WorksView();
	},
	contact: function() {
		new App.ContactView();
	}
});