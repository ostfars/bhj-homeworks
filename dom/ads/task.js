const allRotators = Array.from(document.querySelectorAll(".rotator"));

const rotatorsCases = [];

for (let i = 0; i < allRotators.length; i++) {
  rotatorsCases.push(Array.from(allRotators[i].querySelectorAll('.rotator__case')));
}

setInterval(() => {
  for (let i = 0; i < rotatorsCases.length; i++) {
    const activeCaseIndex = rotatorsCases[i].indexOf(rotatorsCases[i].find(item => item.className.includes("rotator__case_active")))
    
    const nextCaseIndex = (activeCaseIndex + 1) % rotatorsCases[i].length;

    rotatorsCases[i][activeCaseIndex].classList.remove("rotator__case_active")
    rotatorsCases[i][nextCaseIndex].classList.add("rotator__case_active")
  }
}, 1000)