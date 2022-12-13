jQuery(document).ready(function($) {


	const outerHeight = $('.ds-header').outerHeight();
	$(".ds-banner,.ds-main-section").css("margin-top" , outerHeight);

	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 10) {
	        $('.ds-header').addClass('ds-fixed-header');
	    }
	    else {
	        $('.ds-header').removeClass('ds-fixed-header');
	    }
	}).scroll();


});