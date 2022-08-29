const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    const poll = JSON.parse(xhr.responseText)["data"];

    const titleDiv = document.getElementById("poll__title");
    titleDiv.innerHTML = poll['title'];

    const pollAnswers = document.getElementById('poll__answers');

    for (let i = 0; i < poll['answers'].length; i++) {
      const answer = poll['answers'][i];

      const button = document.createElement('button');
      button.classList.add('poll__answer');
      button.innerHTML = `
        ${answer}
      `;

      button.addEventListener('click', () => {
        alert('«Спасибо, ваш голос засчитан!»')
      })

      pollAnswers.appendChild(button);

      console.log(answer)
    }
  }
});

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');

xhr.send();

