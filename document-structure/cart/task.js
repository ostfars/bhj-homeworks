const productList = Array.from(document.querySelectorAll(".product"));
const productIds = [];
const cart = document.querySelector(".cart__products");

productList.forEach((item) => {
  productIds.push(item.getAttribute('data-id'))
});

selectProductQuantity = (item) => {
  const productId = item.getAttribute("data-id");
  const productImage = item.querySelector(".product__image").src;
  const productControls = item.querySelector(".product__controls");
  const quantity = item.querySelector(".product__quantity-value");
  const quantityIncrease = item.querySelector(".product__quantity-control_inc");
  const quantityDecrease = item.querySelector(".product__quantity-control_dec");
  const addButton = productControls.querySelector(".product__add")

  quantityIncrease.addEventListener('click', e => {
    quantity.innerHTML = +quantity.textContent + 1;
  })
  quantityDecrease.addEventListener('click', e => {
    if (quantity.textContent > 1) {
      quantity.innerHTML = +quantity.textContent - 1;
    }
  });

  addButton.addEventListener('click', () => {
    const div = document.createElement('div');
    
    div.setAttribute('id', productId);
    div.classList.add('cart__product');
    div.innerHTML = `
      <img class="cart__product-image" src=${productImage}>
      <div class="cart__product-count">${quantity.textContent}</div>
    `;
    
    const cartItemId = productIds.find(item => item === productId);
    if (document.getElementById(cartItemId)) {
      const element = document.getElementById(cartItemId);
      const initialQuantity = element.querySelector(".cart__product-count").textContent;
      element.querySelector(".cart__product-count").innerHTML = +quantity.textContent + +element.querySelector(".cart__product-count").textContent;
    } else {
      cart.appendChild(div);
    }
  });
};

productList.forEach((item) => {
  selectProductQuantity(item);
});

