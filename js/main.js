const closeBtn = document.getElementById("btn-close");
const openBtn = document.getElementById("btn-open");
closeBtn.addEventListener("click", closeResMenu);
openBtn.addEventListener("click", openResMenu);

function openResMenu() {
  document.querySelector(".res-nav").style.display = "block";
  document.querySelector(".res-nav").style.display = "flex";
}

function closeResMenu() {
  document.querySelector(".res-nav").style.display = "none";
}

// image slider
const slides = document.querySelectorAll(".slide");
console.log("slides: ", slides);
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // get current class
  const current = document.querySelector(".current");
  // remove current class
  current.classList.remove("current");
  // check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    // Add current to start
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
  // get current class
  const current = document.querySelector(".current");
  // remove current class
  current.classList.remove("current");
  // check for previous slide
  if (current.previousElementSibling) {
    // Add current to previous sibling
    current.previousElementSibling.classList.add("current");
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

// Button events
next.addEventListener("click", (e) => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener("click", (e) => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto Slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}

// loader
$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
});
