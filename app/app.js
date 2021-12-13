function route() {
    let hashTAG = window.location.hash.split('?')[0];
    let id = hashTAG.replace("#/", "");

    MODEL.getPages(id);
}

function initSite() {
    $(window).on('hashchange', route);
    route();
}

$(document).ready(function (){
    initSite();
 });

 const loginButton = `
<a href="/#/login">
        <img src="/images/profileIcon.svg" alt="Profile Icon" class="profile-icon" />
</a>`;

const logoutButton = `
    <button class="logout-button" onClick="logout()">Logout</button>
`;

function displayCart() {
    const cartItems = JSON.parse(window.localStorage.getItem('cart') || '[]');

    $('#cart-count').html('');
    $('#cart-count').append(cartItems.length || '');
}

function logout(){
    firebase
    .auth()
    .signOut();
}

const coffeeMakers = [
    {
        id: 1,
        image: '/images/red.webp',
        displayName: 'K-Supreme Plus® SMART Single<br> Serve Coffee Maker',
        price: '$199.99'
    },
    {
        id: 2,
        image: '/images/yellow.webp',
        displayName: 'K-Mini® Single Serve Coffee<br> Maker',
        price: '$79.99'
    },
    {
        id: 3,
        image: '/images/teal.webp',
        displayName: 'Keurig® K-Select® Coffee<br> Maker',
        price: '$99.99'
    },
    {
        id: 4,
        image: '/images/blue.webp',
        displayName: 'Keurig® K-Elite® Single Serve<br> Coffee Maker',
        price: '$179.99'
    },
    {
        id: 5,
        image: '/images/peach.webp',
        displayName: 'K-Slim® Single Serve Coffee<br> Maker',
        price: '$89.99'
    },
    {
        id: 6,
        image: '/images/sunshine-yellow.webp',
        displayName: 'K-Mini Plus® Single Serve Coffee<br> Maker',
        price: '$99.99'
    },
    {
        id: 7,
        image: '/images/cream.webp',
        displayName: 'K-Duo™ Single Serve & Carafe<br> Coffee Maker',
        price: '$169.99'
    },
    {
        id: 8,
        image: '/images/maroon.webp',
        displayName: 'Keurig® K-Supreme® Single Serve<br> Coffee Maker',
        price: '$119.99'
    },
    {
        id: 9,
        image: '/images/christmas-red.webp',
        displayName: 'Keurig® K-Classic® Coffee<br> Maker',
        price: '$119.99'
    },
    {
        id: 10,
        image: '/images/carafe.webp',
        displayName: 'K-Duo Plus™ Single Serve &<br> Carafe Coffee Maker',
        price: '$199.99'
    }
];

