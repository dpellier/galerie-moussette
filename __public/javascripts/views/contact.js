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
            sendBtn = $('#send'),
            validation = $('.validation'),
            error = $('.error'),
            loading = $('#fp_loading'),
            ok = true;

        validation.addClass('hidden');
        error.addClass('hidden');

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
            text = text.replace(/\n/g, '<br />');
        }

        if (ok) {
            loading.show();
            sendBtn.attr('disabled', 'disabled');

            $.post('/send', {email: email, text: text})
                .success(function() {
                    validation.removeClass('hidden');
                    loading.hide();
                })
                .error(function() {
                    error.removeClass('hidden');
                    loading.hide();
                    sendBtn.removeAttr('disabled');
                });
        }
    }
});