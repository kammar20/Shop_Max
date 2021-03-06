const navBar = document.querySelector(".navbar");
const navMenu = document.querySelector(".nav-menu");
const hamBurger = document.querySelector(".hamburger");
const navLinks = document.querySelectorAll(".nav-link");

// for responsive navbar open and close
hamBurger.addEventListener("click", mobileView);
function mobileView() {
 navBar.classList.toggle("active");
 navMenu.classList.toggle("active");
 hamBurger.classList.toggle("active");
}

// close navmenu when click on navlink and hamburger
navLinks.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
 navBar.classList.remove("active");
 navMenu.classList.remove("active");
 hamBurger.classList.remove("active");
}

// for sticky navbar
window.addEventListener("scroll", stickyNav);
function stickyNav() {
 navBar.classList.toggle("sticky", window.scrollY > 140);
}

// timer
function updateTimer() {
 future = Date.parse("jun 12, 2022 01:30:00");
 now = new Date();
 diff = future - now;

 days = Math.floor(diff / (1000 * 60 * 60 * 24));
 hours = Math.floor(diff / (1000 * 60 * 60));
 mins = Math.floor(diff / (1000 * 60));
 secs = Math.floor(diff / 1000);

 d = days;
 h = hours - days * 24;
 m = mins - hours * 60;
 s = secs - mins * 60;

 document.getElementById("timer").innerHTML =
  "<div>" +
  d +
  "<span>Days</span></div>" +
  "<div>" +
  h +
  "<span>Hours</span></div>" +
  "<div>" +
  m +
  "<span>Minutes</span></div>" +
  "<div>" +
  s +
  "<span>Seconds</span></div>";
}
setInterval("updateTimer()", 1000);

// img gallery

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
 showSlides((slideIndex += n));
}

function currentSlide(n) {
 showSlides((slideIndex = n));
}

function showSlides(n) {
 var i;
 var slides = document.getElementsByClassName("mySlides");
 var dots = document.getElementsByClassName("demo");
 var captionText = document.getElementById("caption");
 if (n > slides.length) {
  slideIndex = 1;
 }
 if (n < 1) {
  slideIndex = slides.length;
 }
 for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
 }
 for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
 }
 slides[slideIndex - 1].style.display = "block";
 dots[slideIndex - 1].className += " active";
 captionText.innerHTML = dots[slideIndex - 1].alt;
}
