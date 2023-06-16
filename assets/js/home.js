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


window.addEventListener("scroll", function () {
  let scrollPosition = window.pageYOffset;

  if (scrollPosition > 800) {

    document.getElementById("navbar").style.backgroundColor = "black";

  }
  else{
    document.getElementById("navbar").style.backgroundColor = "transparent";
  }
  
})
