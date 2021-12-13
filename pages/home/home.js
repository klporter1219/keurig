function generateCoffeeMakerHTMLWithBuy(data) {
    return `
    <div class="coffee-maker">
        <img src="${data.image}" class="coffee-image" />
        <h2 class="coffee-name">${data.displayName}</h2>
        <h2 class="coffee-price">${data.price}</h2>
        <button class="buy-now" onClick="addToCart(${data.id})">BUY NOW</button>
    </div>
    `;
}

function addToCart(id) {
    const currentCart = JSON.parse(window.localStorage.getItem('cart') || '[]');

    // Don't add the same coffee maker twice
    if (currentCart.find((c) => c.id === id)) return;

    currentCart.push(coffeeMakers.find((c) => c.id === id));

    window.localStorage.setItem('cart', JSON.stringify(currentCart));

    displayCart();

    alert('Added to cart.');
}

$(document).ready(() => {
    coffeeMakers.forEach((maker) => {
        $('#makers').append(generateCoffeeMakerHTMLWithBuy(maker));
    });

    firebase
    .auth()
    .onAuthStateChanged(function(user) {
        if (user && user.email) {
          $('#auth-button').html(logoutButton);
        } else {
            $('#auth-button').html(loginButton);
        }
      });

    displayCart();
});