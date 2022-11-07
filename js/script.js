let slides = document.querySelectorAll(".slide");
let slideArray = Array.from(slides);

let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

console.log(slideArray);

console.log(prev);
console.log(next);

function prevnext() {
  let activeslide = document.querySelector(".slide.active");
  let currentIndex = slideArray.indexOf(activeslide);

  let prev;
  let next;

  if (currentIndex == 0) {
    prev = slideArray[slideArray.length - 1];
  } else {
    prev = slideArray[currentIndex - 1];
  }

  if (currentIndex == slideArray.length - 1) {
    next = slideArray[0];
  } else {
    next = slideArray[currentIndex + 1];
  }

  return [next, prev];
}

function koijabo() {
  let activeslide = document.querySelector(".slide.active");
  let currentIndex = slideArray.indexOf(activeslide);

  let [next, prev] = prevnext();

  slideArray.map((slide, index) => {
    if (currentIndex == index) {
      slide.style.transform = "translateX(0)";
    } else if (slide == prev) {
      slide.style.transform = "translateX(-100%)";
    } else if (slide == next) {
      slide.style.transform = "translateX(100%)";
    }

    slide.addEventListener("transitionend", function () {
      slide.classList.remove("smooth");
    });
  });
}

//next button
next.addEventListener("click", function () {
  let activeslide = document.querySelector(".slide.active");
  let [next, prev] = prevnext();
  activeslide.classList.add("smooth");
  next.classList.add("smooth");

  activeslide.classList.remove("active");
  activeslide.style.transform = "translateX(-100%)";
  next.classList.add("active");
  next.style.transform = "translateX(0)";

  koijabo();
});

//prev button
prev.addEventListener("click", function () {
  let activeslide = document.querySelector(".slide.active");
  let [next, prev] = prevnext();
  activeslide.classList.add("smooth");
  prev.classList.add("smooth");

  activeslide.classList.remove("active");
  activeslide.style.transform = "translateX(-100%)";
  prev.classList.add("active");
  prev.style.transform = "translateX(0)";
  koijabo();
});
