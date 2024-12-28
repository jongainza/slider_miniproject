const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

slides.forEach(function (slide, index) {
  return (slide.style.left = `${index * 100}%`);
});
let counter = 0;
prevBtn.addEventListener("click", function () {
  counter--;

  carrousel();
});
nextBtn.addEventListener("click", function () {
  counter++;

  carrousel();
});

function carrousel() {
  if (counter >= slides.length - 1) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "block";
  }
  if (counter <= 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
prevBtn.style.display = "none";
