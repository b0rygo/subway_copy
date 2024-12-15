document.addEventListener("DOMContentLoaded", () => {
  const products = document.querySelector(".products");
  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");
  const productWidth = 360 + 20; // Szerokość produktu + odstęp między nimi (px)
  let currentOffset = 0;

  // Obsługa przycisku w lewo
  leftArrow.addEventListener("click", () => {
    if (currentOffset < 0) {
      currentOffset += productWidth;
      products.style.transform = `translateX(${currentOffset}px)`;
    }
  });

  // Obsługa przycisku w prawo
  rightArrow.addEventListener("click", () => {
    const maxOffset = -(productWidth * (products.children.length - 3)); // Liczba produktów - widoczne 3
    if (currentOffset > maxOffset) {
      currentOffset -= productWidth;
      products.style.transform = `translateX(${currentOffset}px)`;
    }
  });
});
