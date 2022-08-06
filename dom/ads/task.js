const allRotators = Array.from(document.querySelectorAll(".rotator"));

const rotatorsCases = [];

for (i = 0; i < allRotators.length; i++) {
  rotatorsCases.push(Array.from(allRotators[i].querySelectorAll('.rotator__case')));
  console.log(allRotators[i].querySelector(".rotator__case_active"))
}

console.log(rotatorsCases)

setInterval(() => {
  for (i = 0; i < rotatorsCases.length; i++) {
    const activeCaseIndex = rotatorsCases[i].indexOf(rotatorsCases[i].find(item => item.className.includes("rotator__case_active")))
    const nextCaseIndex = activeCaseIndex === rotatorsCases[i].length - 1 ? 0 : activeCaseIndex + 1;
    console.log(activeCaseIndex, nextCaseIndex)
  
    rotatorsCases[i][activeCaseIndex].classList.remove("rotator__case_active")
    rotatorsCases[i][nextCaseIndex].classList.add("rotator__case_active")
  }
}, 1000)