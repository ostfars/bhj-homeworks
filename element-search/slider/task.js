const sliderItems = document.getElementsByClassName("slider__item");
const sliderArray = Array.from(sliderItems);

let currentImageIndex, nextImageIndex, prevImageIndex;

function getImageIndexes() {
  currentImageIndex = sliderArray.indexOf(sliderArray.find(item => item.className.includes("slider__item_active")))

  if (currentImageIndex === sliderArray.length - 1) {
    nextImageIndex = 0;
  } else {
    nextImageIndex = currentImageIndex + 1;
  }
  
  if (currentImageIndex === 0) {
    prevImageIndex = sliderArray.length - 1;
  } else {
    prevImageIndex = currentImageIndex - 1;
  };
}

function switchToNext() {
  getImageIndexes();
  sliderArray[currentImageIndex].classList.remove("slider__item_active");
  sliderArray[nextImageIndex].classList.add("slider__item_active");
};

function switchToPrev() {
  getImageIndexes();
  sliderArray[currentImageIndex].classList.remove("slider__item_active");
  sliderArray[prevImageIndex].classList.add("slider__item_active");
}

const nextArrow = document.getElementsByClassName("slider__arrow_next")[0];
const prevArrow = document.getElementsByClassName("slider__arrow_prev")[0];
nextArrow.onclick = switchToNext;
prevArrow.onclick = switchToPrev;