const appearingBlocks = Array.from(document.querySelectorAll(".reveal"));

document.addEventListener('scroll', () => {
  for (let i = 0; i < appearingBlocks.length; i++) {
    const {top, bottom} = appearingBlocks[i].getBoundingClientRect();
    if (bottom > 0 && top < window.innerHeight) {
      appearingBlocks[i].classList.add("reveal_active")
    } else {
      appearingBlocks[i].classList.remove("reveal_active")
    }
  }
})