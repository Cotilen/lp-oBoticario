'use strict'
import { createTableProducts } from '../js/products.js';
import { openModal } from '../js/products.js';
import { registerProduct } from '../js/products.js';
import { pegarProdutos } from './services.js';

const routes = {
    "/": "../index.html",
    "/product": "../pages/products.html",
    "/gallery": "../pages/gallery.html",

}

export const route = async () => {
    window.event.preventDefault();
    window.history.pushState({}, "", window.event.target.href);
    const path = window.location.pathname;
    const route = routes[path];
    const response = await fetch(route);
    const html = await response.text();
    document.getElementById("root").innerHTML = html;
    pathName(path);

}

const pathName = async (path) => {
    if (path == '/product') {
        const lista = await pegarProdutos()
        createTableProducts(lista)
        openModal()
        registerProduct()
    } else if (path == '/gallery') {
        console.log("oi");
    }
}


window.route = route;