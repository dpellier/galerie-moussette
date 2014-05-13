App.MyselfView = Backbone.View.extend({
    el: $("#mainContent"),
    initialize: function() {
    	this.render();
    },
    render: function() {
    	$(this.el).html(templatizer.myself());
	}
});