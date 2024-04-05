const carouselSlide = document.querySelector('.carrossel');
const cards = document.querySelectorAll('.produto');

let counter = 0;
const cardWidth = cards[0].clientWidth + 40;

function slide() {
  carouselSlide.style.transform = `translateX(${-cardWidth * counter}px)`;
}

document.querySelector('.proximo-btn').addEventListener('click', () => {
  if (counter >= cards.length - 1) return;
  counter++;
  slide();
});

document.querySelector('.anterior-btn').addEventListener('click', () => {
  if (counter <= 0) return;
  counter--;
  slide();
});

function mudarEstado(elemento) {
  let display = document.getElementById(elemento).style.display;
  if (display == "flex") {
      document.getElementById(elemento).style.display = "none";
  } else {
      document.getElementById(elemento).style.display = "flex";
  }
}

function abrirMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("show");
  document.body.classList.toggle("menu-open");
}
