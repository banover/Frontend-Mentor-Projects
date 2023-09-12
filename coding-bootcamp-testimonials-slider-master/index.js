"use strict";

// const testimonial = document.querySelector(".testimonials");
const testimonial = document.querySelector(".testimonials__testimonial");
const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
const prevBtn = document.querySelectorAll(
  ".testimonials__btnBox img:first-child"
);
const nextBtn = document.querySelectorAll(
  ".testimonials__btnBox img:last-child"
);

const btnBox = document.querySelectorAll(".testimonials__btnBox");

let currentSlideNumber = 0;
const startSlideNumber = 0;
const endSlideNumber = 1;
btnBox.forEach((btnbox) => {
  btnbox.addEventListener("click", (e) => {
    if (isNextBtnClicked(e)) {
      if (isRightEndSlider()) {
        return;
      }
      testimonial.style.transform = `translate(${
        (currentSlideNumber + 1) * -100
      }%, 0%)`;
      currentSlideNumber++;
    }
    if (isPrevBtnClicked(e)) {
      if (isLeftEndSlider()) {
        return;
      }
      testimonial.style.transform = `translate(${
        (currentSlideNumber - 1) * -100
      }%, 0%)`;
      currentSlideNumber--;
    }
  });
});

function isNextBtnClicked(e) {
  return e.target.classList.contains("nextBtn");
}

function isPrevBtnClicked(e) {
  return e.target.classList.contains("prevBtn");
}

function isRightEndSlider() {
  return currentSlideNumber === endSlideNumber;
}

function isLeftEndSlider() {
  return currentSlideNumber === startSlideNumber;
}
