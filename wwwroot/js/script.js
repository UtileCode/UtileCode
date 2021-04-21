

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

function opensocial() {
  document.getElementById("socialpanel").style.width = "58px";
}

function closesocial() {
  document.getElementById("socialpanel").style.width = "0";
}

function opensitemap() {
  document.getElementById("sitemappanel").style.width = "-webkit-fill-available";
}

function closesitemap() {
  document.getElementById("sitemappanel").style.width = "0";
}


let loginForm = document.querySelector("#loginForm");
let sigupForm = document.querySelector("#signupForm");

let signupBTN = document.querySelector("#signup");
let loginBTN = document.querySelector("#login");

// document.removeChild(sigupForm);

signupBTN.addEventListener("click", () => {
    loginForm.setAttribute("display", "none");
    sigupForm.setAttribute("display", "block");
});

loginBTN.addEventListener("click", () => {
    sigupForm.setAttribute("display", "none");
    loginForm.setAttribute("display", "block");
});

