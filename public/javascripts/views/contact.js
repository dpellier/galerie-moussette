App.ContactView = Backbone.View.extend({
	el: $("#mainContent"),
    events: {
        'click input[type=submit]': 'sendMail'
    },
    initialize: function() {
    	this.render();
    },
    render: function() {
		$(this.el).html(templatizer.contact());
	},
    sendMail: function() {
        var email = $('#email').val(),
            text = $('#mailText').val(),
            ok = true;

        $('.validation').addClass('hidden');
        $('.error').addClass('hidden');

        if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)) {
            $('#warnMail').removeClass('hidden');
            ok = false;
        } else {
            $('#warnMail').addClass('hidden');
        }

        if (text == '') {
            $('#warnText').removeClass('hidden');
            ok = false;
        } else {
            $('#warnText').addClass('hidden');
        }

        if (ok) {
            $('#fp_loading').show();
            $.post('/send', {email: email, text: text})
                .success(function() {
                    $('.validation').removeClass('hidden');
                    $('#fp_loading').hide();
                })
                .error(function() {
                    $('.error').removeClass('hidden');
                    $('#fp_loading').hide();
                });
        }
    }
});