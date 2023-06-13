"use strict";

let userIcon = document.querySelector("#navbar .icons :nth-child(3)");

userIcon.addEventListener("mouseover", function () {

  document.querySelector(".login-register").classList.remove("d-none");

  let regDiv = document.querySelector(".login-register");

  regDiv.addEventListener("mouseover", function () {

    this.classList.remove("d-none");

  });

});


userIcon.addEventListener("mouseout", function () {

  document.querySelector(".login-register").classList.add("d-none");

  let regDiv = document.querySelector(".login-register");

  regDiv.addEventListener("mouseout", function () {

    this.classList.add("d-none");

  });

})



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
