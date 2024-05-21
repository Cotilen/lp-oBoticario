const carouselSlide = document.querySelector('.carrossel');
const cards = document.querySelectorAll('.produto');

let counter = 0;
const cardWidth = cards[0].clientWidth + 31;

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

  const imgs = document.getElementById('img')
  const img = document.querySelectorAll('#img img')

  let index = 0

  function carousel(){
    index++

    if(index > img.length -1){
      index = 0
    }

  if(window.innerWidth <= 900){
    imgs.style.transform =`translateX(${-index * 300}px)`
    console.log("300");
  }else if(window.innerWidth <= 1050){
    imgs.style.transform =`translateX(${-index * 500}px)`
    console.log(500);
  }else{
    imgs.style.transform =`translateX(${-index * 640}px)`
    console.log(640);
  }

  }

  setInterval(carousel, 3000)

  const lightTheme = {
    '--primary-color': '#70967F',
    '--secondary-color': '#F1DDB4',

}

const darkTheme = {
    '--primary-color': '#F1DDB4',
    '--secondary-color': '#70967F',
}

const chk = document.getElementById('chk')
const rootElement = document.documentElement

chk.addEventListener('change', function() {
    const isChecked = chk.checked

    isChecked ? changeTheme(lightTheme) : changeTheme(darkTheme)


})

function changeTheme(theme) {

    for (let prop in theme) {
        changeProperty(prop, theme[prop])
    }

}

function changeProperty(property, value) {
    rootElement.style.setProperty(property, value)

}

  
