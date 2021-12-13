function generateCoffeeMakerHTML(data) {
    return `
    <div class="coffee-maker">
        <img src="${data.image}" class="coffee-image" />
        <h2 class="coffee-name">${data.displayName}</h2>
        <h2 class="coffee-price">${data.price}</h2>
    </div>
    `;
}

function displayMakers() {
    const cart = JSON.parse(window.localStorage.getItem('cart') || '[]');

    if (!cart.length) {
        $('#makers').html('<h2>Your cart is empty...</h2>')
    }

    cart.forEach((data) => {
        $('#makers').append(generateCoffeeMakerHTML(data));
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
}

$(document).ready(() => {
    displayMakers();
    displayCart();
});

function clearCart() {
    window.localStorage.removeItem('cart');

    displayCart();
    displayMakers();
}