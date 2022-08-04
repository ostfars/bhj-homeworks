const appearingBlocks = Array.from(document.querySelectorAll(".reveal"));

document.addEventListener('scroll', () => {
  for (i = 0; i < appearingBlocks.length; i++) {
    const {top, bottom} = appearingBlocks[i].getBoundingClientRect();
    if (bottom > 0 && top < window.innerHeight) {
      console.log('true')
      appearingBlocks[i].classList.add("reveal_active")
    } else {
      appearingBlocks[i].classList.remove("reveal_active")
      console.log('false')
    }
  }
})

// вариант 2

// const getPosition = setInterval(() => {
//   for (i = 0; i < appearingBlocks.length; i++) {
//     const {top, bottom} = appearingBlocks[i].getBoundingClientRect();
//     if (bottom > 0 && top < window.innerHeight) {
//       appearingBlocks[i].classList.add("reveal_active")
//     } else {
//       appearingBlocks[i].classList.remove("reveal_active")
//     }
//   }
// }, 1000)
