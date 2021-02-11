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
    $('header nav.navbar').toggleClass('active');
    $('body').toggleClass('hidden');
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

  $(window).on('load resize', function() {
    var maxHeight = -1;

    $('.sec-service .service-image').each(function() {
      maxHeight = maxHeight > $(this).height() ? maxHeight :     $(this).height();
    });

    $('.sec-service .service-image').each(function() {
      $(this).height(maxHeight);
    });
  });

  var video = $('.information-detail__content .video').find('video');
  video.each(function() {
    $('.information-detail__content .btn-play').on('click', function() {
      $(this).parents('.information-detail__content .video').addClass('is-play-video');
      var showVideo = $(this).parents('.information-detail__content').find('video');
      if (showVideo.get(0).paused) {
        showVideo.get(0).play();
        showVideo.prop("controls",true); 
      } else {
        showVideo.get(0).pause();
      }
    })
  })

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
