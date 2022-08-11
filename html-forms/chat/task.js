const sideWiget = document.querySelector(".chat-widget__side");
const chatWiget = document.querySelector(".chat-widget");
const userMessageInput = document.getElementById("chat-widget__input")
const messages = document.querySelector( '.chat-widget__messages' );

sideWiget.addEventListener('click', () => chatWiget.classList.add("chat-widget_active"));

function getCurrentFormattedTime() {
  const currentDate = new Date();

  const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
  const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
  
  return `${hours}:${minutes}`
}

function getBotReply() {

  botReplies = [
    ['Добрый день, мы ещё не проснулись. Позвоните через 10 лет'],
    ['К сожалению все операторы сейчас заняты. Не пишите нам больше'],
    ['Мы ничего не будем вам продавать'],
    ['Вы не купили ни одного товара для того, чтобы так с нами разговаривать!'],
    ['Где ваша совесть?'],
    ['Добрый день! До свидания!'],
    ['Кто тут?'],
    ['Да хватит уже писать!!!']
  ];

  const random = Math.floor(Math.random() * ((botReplies.length - 1) + 1));

  return botReplies[random]
}

userMessageInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter' && userMessageInput.value !== "") {
    
    messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">${getCurrentFormattedTime()}</div>
    <div class="message__text">
      ${userMessageInput.value}
    </div>
  </div>
  `;
  userMessageInput.value = "";

  messages.innerHTML += `
  <div class="message">
    <div class="message__time">${getCurrentFormattedTime()}</div>
    <div class="message__text">
      ${getBotReply()}
    </div>
  </div>
  `;
  }

  
})