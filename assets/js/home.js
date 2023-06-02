// let swiper = new Swiper(".mySwiper", {
//     loop: true,
//     slidesToScroll: 1,
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
  
  
//   });



$('.slider').slick({
  dots: false,
  infinite: true,
  speed: 700,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  arrows: false
});

$(".slider").on("click", function(){
    $(".slider").slick("slickPlay");
})

$(".slider").on("mouseover", function(){
  $(".slider").slick("slickPlay");
})
