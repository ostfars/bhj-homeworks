const sliderArray = Array.from(document.getElementsByClassName("slider__item"));
const dotsArray = Array.from(document.getElementsByClassName("slider__dot"));

let currentImageIndex, nextImageIndex, prevImageIndex;

function getImageIndexes() {
  currentImageIndex = sliderArray.indexOf(sliderArray.find(item => item.className.includes("slider__item_active")))
  nextImageIndex = currentImageIndex === sliderArray.length - 1 ? 0 : currentImageIndex + 1;
  prevImageIndex = currentImageIndex === 0 ? prevImageIndex = sliderArray.length - 1 : prevImageIndex = currentImageIndex - 1;
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

for (i = 0; i < dotsArray.length; i++) {
  const index = i;
  dotsArray[i].onclick = () => {
    getImageIndexes();
    sliderArray[currentImageIndex].classList.remove("slider__item_active");
    sliderArray[index].classList.add("slider__item_active");
    console.log(currentImageIndex)
  };
}