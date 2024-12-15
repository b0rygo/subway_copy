document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.menu-item a').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const url = link.getAttribute('href');

            fetch(url)
                .then(response => response.text())
                .then(html => {
                    const modal = document.querySelector('#modal');
                    modal.innerHTML = html;
                    modal.style.display = 'block';
                });
        });
    });

    document.querySelector('#modal').addEventListener('click', event => {
        if (event.target.name === 'modal') {
            event.target.style.display = 'none';
        }
    });
});

