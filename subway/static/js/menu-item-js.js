document.getElementById('allergensButton').addEventListener('click', function() {
    window.location.href = 'https://mysubway.sk/pdf/pl/allergens.pdf';
});

document.getElementById('nutritionButton').addEventListener('click', function() {
    window.location.href = 'https://mysubway.sk/pdf/pl/nutrition.pdf';
});

const menuImage = document.getElementById('menu');
menuImage.addEventListener('click', function() {
    window.location.href = 'http://127.0.0.1:8000/menu/';
});

document.querySelectorAll('.menu-item').forEach(function(item) {
    item.addEventListener('click', function() {
        const url = item.getAttribute('data-url');

        window.location.href = url;
    });
});