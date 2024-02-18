;( function($, w, d, h, b) {

	var app = {
        initAccountProfile: function(){
           // ACCOUNT PROFILE FOCUS
			$(".profile-form-group").focusin(function(){
				$(this).css("border", "1px solid #11FBBB");
			});
			$(".profile-form-group").focusout(function(){
				$(this).css("border", "1px solid #064B50");    
			});
        },
		initDeposit: function() {
			// DEPOSIT FOCUS
			$(".deposit-amount-group").focusin(function(){
				$(this).css("border", "2px solid #11FBBB");
			});
			$(".deposit-amount-group").focusout(function(){
				$(this).css("border", "2px solid #064B50");    
			});

			// DEPOSIT ON CLICK
			$(".amount-item").on('click',function() {
				var a = $(this).attr("data-amount");
				$('.deposit-amount-field').val(a);
			});
		},
		initShowPass: function() {
			$(".showpass").on('click',function(){

				var closest_type = jQuery(this).prev('input').attr('type');

				if(closest_type == 'password') {
					jQuery(this).prev('input').attr('type', 'text');
				} else {
					jQuery(this).prev('input').attr('type', 'password');
				}

			});
		},
		init: function() {
			this.initAccountProfile();
			this.initDeposit();
			this.initShowPass();
		}

	}

    

	$(document).ready( function() {

        app.init();

	});


})(jQuery, window, document, 'html', 'body');