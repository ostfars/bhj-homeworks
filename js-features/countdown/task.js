const timer = document.getElementById("timer");

timeLeft = +timer.textContent

const countdownTimer = setInterval(function() {
  timeLeft -= 1;
  timer.textContent = timeLeft;
  if (timeLeft <= 0) {
    alert('Вы победили в конкурсе!');
    clearInterval(countdownTimer);
  };
}, 1000)