$(function () {

  $(".banner-section__slider").slick({
    dots: true,
    prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="./images/icons/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="./images/icons/arrow-next.svg" alt=""></button>',
  });

  $(".product-slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 300,
    // autoplay: true,
    // autoplaySpeed: 2000,
    prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="./images/icons/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="./images/icons/arrow-next.svg" alt=""></button>',
  });


  $(".tab").on("click", function (e) {
    e.preventDefault();

    $(".tab").removeClass("tab--active");
    $(".tabs-content").removeClass("tabs-content--active");


    $(this).addClass("tab--active");
    $($(this).attr("href")).addClass("tabs-content--active");

  });

  $(".product-card__btn-svg").on('click', function () {
    $(this).toggleClass('product-card__btn-svg--active');
  });







});