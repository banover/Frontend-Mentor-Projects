"use strict";

// const testimonial = document.querySelector(".testimonials");
const testimonial = document.querySelector(".test");
const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
const prevBtn = document.querySelectorAll(
  ".testimonials__btnBox img:first-child"
);
const nextBtn = document.querySelectorAll(
  ".testimonials__btnBox img:last-child"
);

const btnBox = document.querySelectorAll(".testimonials__btnBox");
console.log(btnBox);

btnBox.forEach((btnbox) => {
  btnbox.addEventListener("click", (e) => {
    if (e.target.classList.contains("nextBtn")) {
      const currentSlide = document.querySelector(".--active");
      if (currentSlide.classList.contains("slide2")) {
        return;
      }
      testimonial.style.transform = "translate(-100%, 0%)";
      currentSlide.classList.remove("--active");
      // slide2.style.display = "flex";
      slide2.classList.add("--active");
      // currentSlide.style.display = "none";
    }
    if (e.target.classList.contains("prevBtn")) {
      const currentSlide = document.querySelector(".--active");
      if (currentSlide.classList.contains("slide1")) {
        return;
      }
      // slide1.style.display = "flex";
      testimonial.style.transform = "translate(0%, 0%)";
      currentSlide.classList.remove("--active");
      slide1.classList.add("--active");
      // currentSlide.style.display = "none";
    }
  });
});

// nextBtn.addEventListener("click", () => {
//   const currentSlide = document.querySelector(".--active");
//   if (currentSlide.classList.contains("slide2")) {
//     return;
//   }

//   testimonial.style.transform = "translate(-100%, 0%)";

//   slide2.style.display = "flex";
// });

// prevBtn.addEventListener("click", () => {
//   const currentSlide = document.querySelector(".--active");
//   if (currentSlide.classList.contains("slide1")) {
//     return;
//   }

//   testimonial.style.transform = "translate(100%, 0%)";

//   // slide2.style.display = "flex";
// });
