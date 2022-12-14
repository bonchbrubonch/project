$(function () {

  $(".header__list a").on("click", function () {
    $(".header__list a").removeClass("visited");
    $(this).addClass("visited");
  });

  $('.slider-experts').slick({
    nextArrow: '<button class="prev"><svg xmlns="http://www.w3.org/2000/svg" width="20.01" height="19.503" viewBox="0 0 20.01 19.503"><path id="arrow-right-solid" d="M8.508,38.956l.991-.991a1.067,1.067,0,0,1,1.514,0l8.682,8.677a1.067,1.067,0,0,1,0,1.514l-8.682,8.682a1.067,1.067,0,0,1-1.514,0l-.991-.991a1.073,1.073,0,0,1,.018-1.532l5.381-5.127H1.072A1.069,1.069,0,0,1,0,48.116V46.687a1.069,1.069,0,0,1,1.072-1.072H13.907L8.525,40.488A1.065,1.065,0,0,1,8.508,38.956Z" transform="translate(0 -37.65)" fill="#944ca2"/></svg></button>',
    prevArrow: '<button class="next"><svg xmlns="http://www.w3.org/2000/svg" width="20.01" height="19.503" viewBox="0 0 20.01 19.503"><path id="arrow-right-solid" d="M8.508,38.956l.991-.991a1.067,1.067,0,0,1,1.514,0l8.682,8.677a1.067,1.067,0,0,1,0,1.514l-8.682,8.682a1.067,1.067,0,0,1-1.514,0l-.991-.991a1.073,1.073,0,0,1,.018-1.532l5.381-5.127H1.072A1.069,1.069,0,0,1,0,48.116V46.687a1.069,1.069,0,0,1,1.072-1.072H13.907L8.525,40.488A1.065,1.065,0,0,1,8.508,38.956Z" transform="translate(0 -37.65)" fill="#944ca2"/></svg></button>',
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 701,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false
        }
      },
      {
        breakpoint: 469,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false
        }
      },
    ]

  });
  $('.slider-service').slick({
    prevArrow: '<button class="next"><svg xmlns="http://www.w3.org/2000/svg" width="20.01" height="19.503" viewBox="0 0 20.01 19.503"><path id="arrow-right-solid" d="M8.508,38.956l.991-.991a1.067,1.067,0,0,1,1.514,0l8.682,8.677a1.067,1.067,0,0,1,0,1.514l-8.682,8.682a1.067,1.067,0,0,1-1.514,0l-.991-.991a1.073,1.073,0,0,1,.018-1.532l5.381-5.127H1.072A1.069,1.069,0,0,1,0,48.116V46.687a1.069,1.069,0,0,1,1.072-1.072H13.907L8.525,40.488A1.065,1.065,0,0,1,8.508,38.956Z" transform="translate(0 -37.65)" fill="#944ca2"/></svg></button>',
    nextArrow: '<button class="prev"><svg xmlns="http://www.w3.org/2000/svg" width="20.01" height="19.503" viewBox="0 0 20.01 19.503"><path id="arrow-right-solid" d="M8.508,38.956l.991-.991a1.067,1.067,0,0,1,1.514,0l8.682,8.677a1.067,1.067,0,0,1,0,1.514l-8.682,8.682a1.067,1.067,0,0,1-1.514,0l-.991-.991a1.073,1.073,0,0,1,.018-1.532l5.381-5.127H1.072A1.069,1.069,0,0,1,0,48.116V46.687a1.069,1.069,0,0,1,1.072-1.072H13.907L8.525,40.488A1.065,1.065,0,0,1,8.508,38.956Z" transform="translate(0 -37.65)" fill="#944ca2"/></svg></button>',
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    responsive: [{
      breakpoint: 701,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false
      }
    }, ]
  });
  $('.slider-product').slick({
    prevArrow: '<button class="next"><svg xmlns="http://www.w3.org/2000/svg" width="20.01" height="19.503" viewBox="0 0 20.01 19.503"><path id="arrow-right-solid" d="M8.508,38.956l.991-.991a1.067,1.067,0,0,1,1.514,0l8.682,8.677a1.067,1.067,0,0,1,0,1.514l-8.682,8.682a1.067,1.067,0,0,1-1.514,0l-.991-.991a1.073,1.073,0,0,1,.018-1.532l5.381-5.127H1.072A1.069,1.069,0,0,1,0,48.116V46.687a1.069,1.069,0,0,1,1.072-1.072H13.907L8.525,40.488A1.065,1.065,0,0,1,8.508,38.956Z" transform="translate(0 -37.65)" fill="#944ca2"/></svg></button>',
    nextArrow: '<button class="prev"><svg xmlns="http://www.w3.org/2000/svg" width="20.01" height="19.503" viewBox="0 0 20.01 19.503"><path id="arrow-right-solid" d="M8.508,38.956l.991-.991a1.067,1.067,0,0,1,1.514,0l8.682,8.677a1.067,1.067,0,0,1,0,1.514l-8.682,8.682a1.067,1.067,0,0,1-1.514,0l-.991-.991a1.073,1.073,0,0,1,.018-1.532l5.381-5.127H1.072A1.069,1.069,0,0,1,0,48.116V46.687a1.069,1.069,0,0,1,1.072-1.072H13.907L8.525,40.488A1.065,1.065,0,0,1,8.508,38.956Z" transform="translate(0 -37.65)" fill="#944ca2"/></svg></button>',
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 701,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false
        }
      },
    ]
  });

  $('.product-all-slider').slick({
    prevArrow: '<button class="next"><svg xmlns="http://www.w3.org/2000/svg" width="20.01" height="19.503" viewBox="0 0 20.01 19.503"><path id="arrow-right-solid" d="M8.508,38.956l.991-.991a1.067,1.067,0,0,1,1.514,0l8.682,8.677a1.067,1.067,0,0,1,0,1.514l-8.682,8.682a1.067,1.067,0,0,1-1.514,0l-.991-.991a1.073,1.073,0,0,1,.018-1.532l5.381-5.127H1.072A1.069,1.069,0,0,1,0,48.116V46.687a1.069,1.069,0,0,1,1.072-1.072H13.907L8.525,40.488A1.065,1.065,0,0,1,8.508,38.956Z" transform="translate(0 -37.65)" fill="#944ca2"/></svg></button>',
    nextArrow: '<button class="prev"><svg xmlns="http://www.w3.org/2000/svg" width="20.01" height="19.503" viewBox="0 0 20.01 19.503"><path id="arrow-right-solid" d="M8.508,38.956l.991-.991a1.067,1.067,0,0,1,1.514,0l8.682,8.677a1.067,1.067,0,0,1,0,1.514l-8.682,8.682a1.067,1.067,0,0,1-1.514,0l-.991-.991a1.073,1.073,0,0,1,.018-1.532l5.381-5.127H1.072A1.069,1.069,0,0,1,0,48.116V46.687a1.069,1.069,0,0,1,1.072-1.072H13.907L8.525,40.488A1.065,1.065,0,0,1,8.508,38.956Z" transform="translate(0 -37.65)" fill="#944ca2"/></svg></button>',
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 701,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $(".product-card__like").on("click", function () {
    $(this).toggleClass("active");
  });

  $('.slider-news').slick({
    prevArrow: '<button class="next"><svg xmlns="http://www.w3.org/2000/svg" width="20.01" height="19.503" viewBox="0 0 20.01 19.503"><path id="arrow-right-solid" d="M8.508,38.956l.991-.991a1.067,1.067,0,0,1,1.514,0l8.682,8.677a1.067,1.067,0,0,1,0,1.514l-8.682,8.682a1.067,1.067,0,0,1-1.514,0l-.991-.991a1.073,1.073,0,0,1,.018-1.532l5.381-5.127H1.072A1.069,1.069,0,0,1,0,48.116V46.687a1.069,1.069,0,0,1,1.072-1.072H13.907L8.525,40.488A1.065,1.065,0,0,1,8.508,38.956Z" transform="translate(0 -37.65)" fill="#944ca2"/></svg></button>',
    nextArrow: '<button class="prev"><svg xmlns="http://www.w3.org/2000/svg" width="20.01" height="19.503" viewBox="0 0 20.01 19.503"><path id="arrow-right-solid" d="M8.508,38.956l.991-.991a1.067,1.067,0,0,1,1.514,0l8.682,8.677a1.067,1.067,0,0,1,0,1.514l-8.682,8.682a1.067,1.067,0,0,1-1.514,0l-.991-.991a1.073,1.073,0,0,1,.018-1.532l5.381-5.127H1.072A1.069,1.069,0,0,1,0,48.116V46.687a1.069,1.069,0,0,1,1.072-1.072H13.907L8.525,40.488A1.065,1.065,0,0,1,8.508,38.956Z" transform="translate(0 -37.65)" fill="#944ca2"/></svg></button>',
    centerMode: true,
    centerPadding: '200px',
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    responsive: [{
        breakpoint: 1200,
        settings: {
          centerMode: false,
        }
      },
      {
        breakpoint: 701,
        settings: {
          slidesToShow: 2,
          arrows: false,
          centerMode: false,
        }
      },
      {
        breakpoint: 469,
        settings: {
          slidesToShow: 1,
          arrows: false,
          centerMode: false,
        }
      },
    ]
  });

  $('.review-slider').slick({
    prevArrow: '<button class="next"><svg xmlns="http://www.w3.org/2000/svg" width="20.01" height="19.503" viewBox="0 0 20.01 19.503"><path id="arrow-right-solid" d="M8.508,38.956l.991-.991a1.067,1.067,0,0,1,1.514,0l8.682,8.677a1.067,1.067,0,0,1,0,1.514l-8.682,8.682a1.067,1.067,0,0,1-1.514,0l-.991-.991a1.073,1.073,0,0,1,.018-1.532l5.381-5.127H1.072A1.069,1.069,0,0,1,0,48.116V46.687a1.069,1.069,0,0,1,1.072-1.072H13.907L8.525,40.488A1.065,1.065,0,0,1,8.508,38.956Z" transform="translate(0 -37.65)" fill="#944ca2"/></svg></button>',
    nextArrow: '<button class="prev"><svg xmlns="http://www.w3.org/2000/svg" width="20.01" height="19.503" viewBox="0 0 20.01 19.503"><path id="arrow-right-solid" d="M8.508,38.956l.991-.991a1.067,1.067,0,0,1,1.514,0l8.682,8.677a1.067,1.067,0,0,1,0,1.514l-8.682,8.682a1.067,1.067,0,0,1-1.514,0l-.991-.991a1.073,1.073,0,0,1,.018-1.532l5.381-5.127H1.072A1.069,1.069,0,0,1,0,48.116V46.687a1.069,1.069,0,0,1,1.072-1.072H13.907L8.525,40.488A1.065,1.065,0,0,1,8.508,38.956Z" transform="translate(0 -37.65)" fill="#944ca2"/></svg></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    responsive: [{
        breakpoint: 700,
        settings: {
          arrows: false,
        }
      },

    ]
  });

  $(".subscribe__box").on("click", function () {
    $(".subscribe__form").toggleClass("active");
  });

  $(".leave-review__box").on("click", function () {
    $(".leave-review__form").toggleClass("active");
  });

  $(".contacts__box").on("click", function () {
    $(".contacts__form").toggleClass("active");
  });

  $(".modal__box").on("click", function () {
    $(".modal__form").toggleClass("active");
  });

  $(".modal__btn-show").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".cabinet__menu li").on("click", function () {
    $(".cabinet__menu li").removeClass("active");
    $(this).addClass("active");
  });


  $(".header__menu-btn").on("click", function () {
    $(".header__menu-btn").toggleClass("active");
    $("body").toggleClass("lock");
    $(".header__list").toggleClass("open");
  });

  $(".cabinet__mob-btn").on("click", function () {
    $("body").addClass("lock");
    $(".cabinet__left").addClass("open");
  });

  $(".cabinet__left-btn").on("click", function () {
    $("body").removeClass("lock");
    $(".cabinet__left").removeClass("open");
  });


  if ($('.slick-slider').length > 0) {
    $(".slick-slider").slick("refresh");
    $(".slick-slider").slick("setPosition");
  }

  if ($('.slider-card').length > 0) {
    $('.slider-card__top').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      centerMode: true,
      asNavFor: '.slider-card__bottom',
      responsive: [{
        breakpoint: 700,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: false,
        }
      },

    ]
    });
    $('.slider-card__bottom').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-card__top',
      dots: false,
      arrows: false,
      focusOnSelect: true,
    });
  }

  $(".expert-card__btn").on("click", function () {
    $(".expert-card__right").addClass("show");
  });

  $('.expert-service-slider').slick({
    prevArrow: '<button class="next"><svg xmlns="http://www.w3.org/2000/svg" width="20.01" height="19.503" viewBox="0 0 20.01 19.503"><path id="arrow-right-solid" d="M8.508,38.956l.991-.991a1.067,1.067,0,0,1,1.514,0l8.682,8.677a1.067,1.067,0,0,1,0,1.514l-8.682,8.682a1.067,1.067,0,0,1-1.514,0l-.991-.991a1.073,1.073,0,0,1,.018-1.532l5.381-5.127H1.072A1.069,1.069,0,0,1,0,48.116V46.687a1.069,1.069,0,0,1,1.072-1.072H13.907L8.525,40.488A1.065,1.065,0,0,1,8.508,38.956Z" transform="translate(0 -37.65)" fill="#944ca2"/></svg></button>',
    nextArrow: '<button class="prev"><svg xmlns="http://www.w3.org/2000/svg" width="20.01" height="19.503" viewBox="0 0 20.01 19.503"><path id="arrow-right-solid" d="M8.508,38.956l.991-.991a1.067,1.067,0,0,1,1.514,0l8.682,8.677a1.067,1.067,0,0,1,0,1.514l-8.682,8.682a1.067,1.067,0,0,1-1.514,0l-.991-.991a1.073,1.073,0,0,1,.018-1.532l5.381-5.127H1.072A1.069,1.069,0,0,1,0,48.116V46.687a1.069,1.069,0,0,1,1.072-1.072H13.907L8.525,40.488A1.065,1.065,0,0,1,8.508,38.956Z" transform="translate(0 -37.65)" fill="#944ca2"/></svg></button>',
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    responsive: [{
        breakpoint: 1200,
        settings: {
          centerMode: false,
        }
      },
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 469,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      },
    ]
  });


});

var clock;
clock = $('.clock').FlipClock({
  clockFace: 'DailyCounter',
  autoStart: false,
  language: 'ru',
  callbacks: {
    stop: function () {
      $(".message").html('?????????? ????????????');
    }
  }
});

clock.setTime(1000000);
clock.setCountdown(true);
clock.start();