const timer = document.getElementById("timer");

timeLeft = +timer.textContent

const countdownTimer = setInterval(function() {
  if (timeLeft <= 0) {
    alert('Вы победили в конкурсе!');
    clearInterval(countdownTimer);
  };
  timeLeft -= 1;
  timer.textContent = timeLeft;
  
}, 1000)

// function countDown() {
//   let timeLeft = +initialTimer.textContent;
//   if (timeLeft = 0) {
//     alert('Вы победили в конкурсе!');
//   }

// }