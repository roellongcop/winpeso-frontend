;( function($, w, d, h, b) {

	var app = {

        initLoginForm: function(){
            
			// LOGIN FORM
			$(".ip-login-group").focusin(function(){
				$(this).css("border", "1px solid #11FBBB");
			});
			$(".ip-login-group").focusout(function(){
				$(this).css("border", "1px solid #191919");    
			});

			$(".ip-login-link").click(function(){
				$("#login-tab").click();
			});
			$(".ip-signup-link").click(function(){
				$("#signup-tab").click();
			});

        },
		init: function() {
			this.initLoginForm();
		}

	}

    
	$(document).ready( function() {

        app.init();

	});


})(jQuery, window, document, 'html', 'body');