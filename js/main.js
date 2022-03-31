$(function () {

  $(".banner-section__slider").slick({
    dots: true,
    prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="./images/icons/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="./images/icons/arrow-next.svg" alt=""></button>',
    responsive: [{
      breakpoint: 968,
      settings: {
        arrows: false
      }
    },]
  });

  $(".product-slider").slick({
    prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="./images/icons/arrow-prev-black.svg" alt=""></button>',
    nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="./images/icons/arrow-next-black.svg" alt=""></button>',
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 300,
    responsive: [{
      breakpoint: 1339,
      settings: {
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 1200,
      settings: {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 868,
      settings: {
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        dots: true,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: true,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1
      }
    }

    ]

  });


  $(".tab").on("click", function (e) {
    e.preventDefault();



    $($(this).siblings()).removeClass("tab--active");

    $($(this).closest('.tabs-wrapper')).siblings().find("div").removeClass("tabs-content--active");


    $(this).addClass("tab--active");
    $($(this).attr("href")).addClass("tabs-content--active");
    $('.product-slider').slick('setPosition');

  });



  $(".product-card__btn-svg").on('click', function () {
    $(this).toggleClass('product-card__btn-svg--active');
  });


  $('.fiter-sryles').styler();


  $('.aside-filter__title-arrow').on('click', function () {
    $(this).toggleClass('aside-filter__title-arrow--active');
    $(this).next().slideToggle(350);
  });



  $(".aside-filter__slider").ionRangeSlider({
    type: "double",
    postfix: "₽",
    grid: false,
    min: 100000,
    max: 500000,
    from: 150000,
    to: 400000
  });

  $(".catalog__btn--grid").on('click', function () {
    $(this).addClass('catalog__btn--active');
    $('.catalog__btn--line').removeClass('catalog__btn--active');
    $('.catalog__inner-item').removeClass('catalog__inner-item--list');
  });

  $(".catalog__btn--line").on('click', function () {
    $(this).addClass('catalog__btn--active');
    $('.catalog__btn--grid').removeClass('catalog__btn--active');
    $('.catalog__inner-item').addClass('catalog__inner-item--list');
  });



  $(".menu-btn").on('click', function () {
    $('.menu-mobile').toggleClass('menu-mobile--active');

  });

  $(".menu-mobile__link").on('click', function () {
    $('.menu-mobile').removeClass('menu-mobile--active');

  });




  $(".ratio").rateYo({
    ratedFill: "#1C62CD",
    normalFill: "#C4C4C4",
    starWidth: "20px",
    spacing: "7px"


  });

  $('.footer__top-title').on('click', function () {
    $(this).toggleClass('footer__top-title-arrow--active');
    $(this).next().slideToggle(300);
  });


  $('.aside-btn').on('click', function () {

    $(this).next().slideToggle(500);
  });


});