$(".slideshow__slide").hide();

setInterval(function() { 
  $('.slideshow__slide:first')
    .fadeOut(0)
    .next()
    .fadeIn(2900)
    .end()
    .appendTo('.slideshow');
},  3000);

$(function () {
	$(".expander__panel_about").hide();
	$('.expander__toggle_about').live('click', function () {
		$('.expander__panel_about').slideToggle();
	});
});

$(function () {
	$(".expander__panel_service").hide();
	$('.expander__toggle_service').live('click', function () {
		$('.expander__panel_service').slideToggle();
	});
});

$(function () {
	$(".expander__panel_shop").hide();
	$('.expander__toggle_shop').live('click', function () {
		$('.expander__panel_shop').slideToggle();
	});
});

$(function () {
	$(".expander__panel_contact").hide();
	$('.expander__toggle_contact').live('click', function () {
		$('.expander__panel_contact').slideToggle();
	});
});

$(function () {
	$(".social-list").hide();
	$('.expander__toggle_follow').live('click', function () {
		$('.social-list').slideToggle();
	});
});

$(function () {
	$(".newsletter").hide();
	$('.expander__toggle_newsletter').live('click', function () {
		$('.newsletter').slideToggle();
	});
});
