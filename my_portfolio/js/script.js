$(function() {

	$('.my__works__menu, .img__logo, .pol__works').click(function() {

		$('.my__works').fadeIn("linear");
		$('.cv, .contact').fadeOut("linear");
	})

	$('.cv__menu').click(function() {
		$('.cv').fadeIn("linear");
		$('.menu__link').removeClass('active');
		$('.my__works, .contact').fadeOut("linear");
	})

	$('.contact__menu').click(function() {
		$('.contact').fadeIn("linear");
		$('.menu__link').removeClass('active');
		$('.my__works, .cv').fadeOut("linear");
	})



});