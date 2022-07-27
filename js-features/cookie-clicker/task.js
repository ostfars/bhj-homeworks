const image = document.getElementById("cookie");
const clickCounter = document.getElementById("clicker__counter")
counter = +clickCounter.textContent;

const smallImage = +image.width;
const largeImage = smallImage * 1.2;

function changeSize() {
  image.width = image.width === smallImage ? largeImage : smallImage;
  clickCounter.textContent = counter++;
};

image.onclick = changeSize;
