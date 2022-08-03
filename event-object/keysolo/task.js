class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    
    this.timeElement = container.querySelector('.status__timer')
    this.countdownTimer;

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    document.addEventListener('keyup', event => {
      event.key.toLowerCase() === this.currentSymbol.textContent.toLowerCase() ? this.success() : this.fail()
    })
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      clearInterval(this.countdownTimer)
      this.reset();
    }
    clearInterval(this.countdownTimer)
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      clearInterval(this.countdownTimer)
      this.reset();
    }
    clearInterval(this.countdownTimer);
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);

    this.countdown(word.length)

    this.timeElement.textContent = word.length;
    
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }

  countdown(initialValue) {
    this.countdownTimer = setInterval(() => {
      this.timeElement.textContent = --initialValue;
      if (initialValue === 0) {
        this.fail();
      }
    }, 1000)
    
  }
}

new Game(document.getElementById('game'))

