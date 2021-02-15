var steen = steen || {};
$(function() {
  try {
    steen.scene = {
      init:function() {
        steen.scene.start();
      },
      start:function() {
        var num = $('.main-banner .slide').length;
        var now = Math.ceil(Math.random()*num);
        var scene = $('.main-banner').slick({
          initialSlide: now - 1,
          autoplay: true,
          pauseOnHover: false,
          autoplaySpeed: 5000,
          dots: true,
          arrows: false,
          infinite: true,
          speed: 1500,
          cssEase: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)'
        });

        $('.main-banner').on('setPosition', function(slick){
          $('.main-banner .slide').eq(now).addClass('active');
        });

        scene.slick('setPosition');

        $('.main-banner').on('afterChange', function(event, slick, currentSlide){
          for (var i=0;i<=num;i++) {
            if(i != currentSlide-1) {
              $('.main-banner .slide').eq(i).removeClass('active');
            }
          }
        });
      }
    }

    // steen.concept = {
    //   init:function() {
    //     steen.concept.random();
    //     steen.concept.start();
    //   },
    //   random:function() {
    //     $('.sec-facilities__slider > .slider-item').sort(function() {
    //       return Math.round(Math.random()) - 0.5;
    //     }).detach().appendTo($('.sec-facilities__slider'));
    //   },
    //   start:function() {
    //     var concept = $('.sec-facilities__slider').slick({
    //       autoplay: true,
    //       pauseOnHover: false,
    //       dots: false,
    //       arrows: false,
    //       infinite: true,
    //       autoplaySpeed: 0,
    //       cssEase: 'linear',
    //       speed: 10000,
    //       slidesToShow: 5,
    //       slidesToScroll: 1,
    //       swipe: false,
    //       responsive: [
    //         {
    //           breakpoint: 1200,
    //           settings: {
    //             slidesToShow: 4
    //           }
    //         },
    //         {
    //           breakpoint: 851,
    //           settings: {
    //             slidesToShow: 3
    //           }
    //         },
    //         {
    //           breakpoint: 751,
    //           settings: {
    //             slidesToShow: 1
    //           }
    //         }
    //       ]
    //     });
    //   }
    // }

  } catch(e) {};
});

$(window).on('load', function() {
  $('.navbar-nav').addClass('load-end');
  setTimeout(function(){ 
    $('.navbar-nav.load-end').addClass('show-menu')
  }, 3000);
})

$(document).ready(function(){

  /*----header----*/
  $('.navbar .navbar-toggler').click(function() {
    $('header nav.navbar').toggleClass('active');
    $('body').toggleClass('hidden');
  });

  $(".navbar-nav.load-end li:last-child a:after").on('transitionend', function() {
    $(".navbar-nav.load-end").addClass('ani-on');
  })

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

$(window).on("load", function(){
  $(document).ready(function() {
    steen.scene.init();
    // steen.concept.init();
  });
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
