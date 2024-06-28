'use strict'

import { pegarProdutos } from "./service.js";

const listaProdutos = await pegarProdutos()

listaProdutos.product.forEach(criarDescricaoProduto)
listaProdutos.product.forEach(criarCards)
criarSlide()
carrosselGaleria()
mudarTema()
abrirMenu()
function abrirMenu() {
  console.log("oi");
  const menu = document.getElementById('menu')
  const bars = document.getElementById('bars')

  bars.addEventListener('click', () => {
    console.log("tchau");
    menu.classList.toggle("show");
    document.body.classList.toggle("menu-open");
  })
  menu.addEventListener('click', () => {
    menu.classList.toggle("show");
    document.body.classList.toggle("menu-open");
  })
}
function criarCards(item) {
  const nomeProduto = item.nome.toLowerCase().replace(/\s+/g, '-')
  const carrossel = document.getElementById('carrossel')

  const produto = document.createElement('a')
  produto.classList.add('produto')
  produto.href = '#' + nomeProduto


  const img = document.createElement('img')
  img.src = item.imagemPrincipal

  const titulo = document.createElement('h3')
  titulo.textContent = item.nome

  produto.onclick = () => {
    let display = document.getElementById(`${nomeProduto}`).style.display;
    if (display == "flex") {
      document.getElementById(nomeProduto).style.display = "none";
    } else {
      document.getElementById(nomeProduto).style.display = "flex";
    }
  }

  produto.append(img, titulo)

  carrossel.append(produto)
}

function criarSlide() {
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

}

function mudarEstado(elemento) {
  console.log(elemento);
  let display = document.getElementById(elemento).style.display;
  if (display == "flex") {
    document.getElementById(elemento).style.display = "none";
  } else {
    document.getElementById(elemento).style.display = "flex";
  }
}

function carrosselGaleria() {
  const imgs = document.getElementById('img')
  const img = document.querySelectorAll('#img img')

  let index = 0

  function carousel() {
    index++

    if (index > img.length - 1) {
      index = 0
    }

    if (window.innerWidth <= 900) {
      imgs.style.transform = `translateX(${-index * 300}px)`
      console.log("300");
    } else if (window.innerWidth <= 1050) {
      imgs.style.transform = `translateX(${-index * 500}px)`
      console.log(500);
    } else {
      imgs.style.transform = `translateX(${-index * 640}px)`
    }

  }

  setInterval(carousel, 3000)
}

function mudarTema() {
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

  chk.addEventListener('change', function () {
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
}

``

function criarDescricaoProduto(item) {
  const nomeProduto = item.nome.toLowerCase().replace(/\s+/g, '-')

  const containerDescricaoProdutos = document.getElementById('container-descricao-produtos')


  const produto = document.createElement('div')
  produto.classList.add('descricao__produto')
  produto.id = nomeProduto

  const elipse = document.createElement('div')
  elipse.classList.add('card-elipse')

  const a = document.createElement('a')
  a.href = '#' + nomeProduto
  a.onclick = () => {
    let display = document.getElementById(`${nomeProduto}`).style.display;
    if (display == "flex") {
      document.getElementById(nomeProduto).style.display = "none";
    } else {
      document.getElementById(nomeProduto).style.display = "flex";
    }
  }

  const h2 = document.createElement('h2')
  h2.textContent = item.nome

  const img = document.createElement('img')
  img.src = item.imagemSecundaria
  const p = document.createElement('p')
  p.textContent = item.descricao

  a.append(h2, img)
  elipse.append(a)
  produto.append(elipse, p)

  containerDescricaoProdutos.append(produto)
}






