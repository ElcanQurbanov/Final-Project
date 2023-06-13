$('.slider').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  arrows: false
});

$(".slider").on("click", function () {
  $(".slider").slick("slickPlay");
})

$(".slider").on("mouseover", function () {
  $(".slider").slick("slickPlay");
})
