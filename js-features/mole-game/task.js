const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

getHole = index => document.getElementById(`hole${index}`);

let hitCounter = +dead.textContent;
let missCounter = +lost.textContent;

for (i = 1; i < document.getElementsByClassName("hole").length + 1; i++) {
  const hole = getHole(i);
  hole.onclick = clickCount = () => {
    if (hole.className.includes( 'hole_has-mole' )) {
      hitCounter++;
      dead.textContent = hitCounter;
      } else {
      missCounter++;
      lost.textContent = missCounter;
      }

    if (hitCounter === 10) {
      alert('Победа!')
      hitCounter = 0;
      missCounter = 0;
      
      }
    if (missCounter === 5) {
      alert('Вы проиграли!')
      hitCounter = 0;
      missCounter = 0;
      }
    dead.textContent = hitCounter;
    lost.textContent = missCounter;
    }
};