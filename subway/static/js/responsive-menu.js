document.addEventListener("DOMContentLoaded", function () {
    // Tworzymy przycisk do rozwijania menu
    const header = document.querySelector("header");
    const nav = document.querySelector("nav ul");
    const menuToggle = document.createElement("div");

    menuToggle.classList.add("menu-toggle");
    menuToggle.innerHTML = `<span></span><span></span><span></span>`;
    header.appendChild(menuToggle);

    // Obsługa kliknięcia w ikonę menu
    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});