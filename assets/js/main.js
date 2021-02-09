$(document).ready(function(){

  $('.main-banner').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true
  });

  /*----header----*/
  $('.navbar .navbar-toggler').click(function() {
    $('header').toggleClass('active');
  });
	// lastScroll = 0;
	// $(window).on('scroll',function() {
	// 	var scroll = $(window).scrollTop();
	// 	if (scroll > 0) {
	// 		$("header").addClass("sticky-header");
	// 		if (lastScroll - scroll > 0) {
	// 			$("header").removeClass("sticky-header");
	// 		} else {
	// 			$("header").addClass("full-header");
	// 		}
	// 	} else {
	// 		$("header").removeClass("full-header");
	// 	}
	// 	lastScroll = scroll;
	// });

  /*----Back to Top----*/
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.pagetop').addClass('active');
		} else {
			$('.pagetop').removeClass('active');
		}
	});

	$(".pagetop a").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

  // Custom scroll
  $(".custom-scroll").mCustomScrollbar();

});

var wow = new WOW(
  {
    boxClass:     'wow',
    animateClass: 'animated',
    offset:       0,
    mobile:       true,
    live:         true
  }
);
wow.init();
