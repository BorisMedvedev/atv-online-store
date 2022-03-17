$(function () {
  $(".banner-section__slider").slick({
    dots: true,
    prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="./images/icons/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="./images/icons/arrow-next.svg" alt=""></button>',
  });

  $(".search__tabs-btn").on("click", function (e) {
    e.preventDefault();

    $(".search__tabs-btn").removeClass("search__tabs-btn--active");
    $(".search__content-item").removeClass("search__content-item--active");

    $(this).addClass("search__tabs-btn--active");
    $($(this).attr("href")).addClass("search__content-item--active");
  });
});