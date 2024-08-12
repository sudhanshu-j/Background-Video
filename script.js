const menuBtn = document.querySelector(".menu-btn");
const navigationEl = document.querySelector(".navigation");
const navBtns = document.querySelectorAll(".nav-btn");
const slider = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigationEl.classList.toggle("active");
});

let sliderNav = function (manual) {
  navBtns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slider.forEach((slide) => {
    slide.classList.remove("active");
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  navBtns[manual].classList.add("active");
  slider[manual].classList.add("active");
  contents[manual].classList.add("active");
};

navBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});
