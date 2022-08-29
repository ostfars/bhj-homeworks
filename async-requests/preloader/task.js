const xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    document.querySelector('.loader').classList.remove('loader_active')
    const exchangeRates = JSON.parse(xhr.responseText)['response']['Valute'];
    const result = [];
    const items = document.getElementById("items")

    for (let item in exchangeRates) {
      const currency = exchangeRates[item]['CharCode'];
      const exchangeRate = exchangeRates[item]['Value'];
      
      const div = document.createElement('div');
      div.classList.add("item");
      div.innerHTML = `
        <div class="item__code">
          ${currency}
        </div>
        <div class="item__value">
          ${exchangeRate}
        </div>
        <div class="item__currency">
          руб.
        </div>
      `;
      items.appendChild(div)
    }
  }
});

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');

xhr.send();
