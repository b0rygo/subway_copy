document.getElementById('allergensButton').addEventListener('click', function() {
    window.location.href = 'https://mysubway.sk/pdf/pl/allergens.pdf';
});

document.getElementById('nutritionButton').addEventListener('click', function() {
    window.location.href = 'https://mysubway.sk/pdf/pl/nutrition.pdf';
});

// Pobierz przycisk "Wszystkie" oraz wszystkie inne linki
const wszystkieLink = document.getElementById('wszystkie');
const categoryLinks = document.querySelectorAll('.category');
const menuProducts = document.querySelector('.menu-products');

wszystkieLink.addEventListener('click', function() {
    categoryLinks.forEach(link => link.classList.remove('active'));
});


const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

if (category === 'Wszystkie') {
    menuProducts.style.setProperty('margin-top', '-225px', 'important');
    menuProducts.style.setProperty('margin-bottom', '-225px', 'important');
} else if (category === 'Suby') {
    menuProducts.style.setProperty('margin-top', '-75px', 'important');
    menuProducts.style.setProperty('margin-bottom', '-50px', 'important');
} else if (category === null || category === undefined)
{
    menuProducts.style.setProperty('margin-top', '-180px', 'important');
}
else {
    menuProducts.style.setProperty('margin-top', '0px', 'important');
}

