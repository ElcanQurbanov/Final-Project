"use strict";


// let userIcon = document.querySelector("#navbar .icons :nth-child(3)");

// userIcon.addEventListener("click", function () {

//   let regDiv = document.querySelector(".login");

//   if(regDiv.classList.contains("d-none")){

//     regDiv.classList.remove("d-none");
//   }
//   else{
//     regDiv.classList.add("d-none");
//   }


// });



let userIcon = document.querySelector("#navbar .icons :nth-child(3)");

userIcon.addEventListener("mouseover", function () {

  document.querySelector(".login").classList.remove("d-none");

  let regDiv = document.querySelector(".login");

  regDiv.addEventListener("mouseover", function () {

    this.classList.remove("d-none");

  });



});

userIcon.addEventListener("mouseout", function () {

  document.querySelector(".login").classList.add("d-none");

  let regDiv = document.querySelector(".login");

  regDiv.addEventListener("mouseout", function () {

    this.classList.add("d-none");

  });

})




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
