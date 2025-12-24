// script.js
const foods = document.querySelectorAll('.food');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  foods.forEach((el, i) => {
    el.style.transform = `translateY(${y * (0.05 + i * 0.02)}px)`;
  });
});
