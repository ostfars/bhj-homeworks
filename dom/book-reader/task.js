const fontSizes = document.querySelectorAll('.font-size');
const currentBook = document.getElementById('book')

function setFontSize() {
  for (i = 0; i < fontSizes.length; i++) {
    fontSizes[i].classList.remove('font-size_active')
  };
  book.classList.remove("book_fs-small", "book_fs-big");
  
  this.classList.add('font-size_active');

  if (this.dataset.size === 'small') {
    currentBook.classList.add('book_fs-small')
  } else if (this.dataset.size === 'big') {
      currentBook.classList.add('book_fs-big')
  }

  return false
}

for (i = 0; i < fontSizes.length; i++) {
  fontSizes[i].onclick = setFontSize
}