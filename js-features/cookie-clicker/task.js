const image = document.getElementById("cookie");
const clickCounter = document.getElementById("clicker__counter")
counter = +clickCounter.textContent;

const smallImage = +image.width;
const largeImage = smallImage * 1.2;

function changeSize() {
  if (image.width === smallImage) {
    image.width = largeImage;
  } else if (image.width === largeImage) {
    image.width = smallImage;
  }
  clickCounter.textContent = counter++;
};

image.onclick = changeSize;
