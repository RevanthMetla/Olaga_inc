function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  showCartPopup();
}

function showCartPopup() {
  const popup = document.getElementById('cart-popup');
  popup.style.bottom = '20px';
  setTimeout(() => {
    popup.style.bottom = '-80px';
  }, 3000);
}
