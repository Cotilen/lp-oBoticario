'use strict'

import { criarProduto, deletarProduto, editarProduto } from './services/product.js';
import { registerImage } from './saveImage.js';

const createRowTable = (product) => {
    const table = document.getElementById('table')

    const row = document.createElement('tr')
    row.setAttribute('class', 'table-row')
    row.id = `${product._id}`

    const nome = document.createElement('td')
    const divNome = document.createElement('div')
    divNome.classList.add('titulo')
    divNome.textContent = product.nome

    const descricao = document.createElement('td')
    const divDescricao = document.createElement('div')
    divDescricao.classList.add('scroll')
    divDescricao.textContent = product.descricao

    const imagemPrincipal = document.createElement('td')
    const imgPrincipal = document.createElement('img')
    imgPrincipal.classList.add('img-table')
    imgPrincipal.src = product.imagemPrincipal
    imgPrincipal.alt = 'Imagem Primária'

    const imagemSecundaria = document.createElement('td')
    const imgSecundaria = document.createElement('img')
    imgSecundaria.classList.add('img-table')
    imgSecundaria.src = product.imagemSecundaria
    imgSecundaria.alt = 'Imagem Secundária'

    const acoes = document.createElement('td')
    const acoesDiv = document.createElement('div')
    acoesDiv.classList.add('acao')

    const trashIcon = document.createElement('i')
    trashIcon.classList.add('fas')
    trashIcon.classList.add('fa-trash-alt')
    trashIcon.classList.add('trash-icon')
    
    const editIcon = document.createElement('i')
    editIcon.classList.add('fas')
    editIcon.classList.add('fa-edit')
    editIcon.classList.add('edit-icon')


    nome.append(divNome)
    descricao.append(divDescricao)
    imagemPrincipal.append(imgPrincipal)
    imagemSecundaria.append(imgSecundaria)
    acoes.append(acoesDiv)
    acoesDiv.append(editIcon, trashIcon)

    row.append(nome, descricao, imagemPrincipal, imagemSecundaria, acoes)


    editIcon.addEventListener('click', () => {

        let modal = document.getElementById("modalEdit");
        let span = document.getElementsByClassName("close")[1];
        let button = document.getElementById("edit-product")

        let nome = document.getElementById("nomeEdit");
        nome.value = product.nome

        let descricao = document.getElementById("descricaoEdit");
        descricao.value = product.descricao

        let imagemP = document.getElementById("imagemPEdit");
        imagemP.value = ""

        let imagemS = document.getElementById("imagemSEdit");
        imagemS.value = ""

        modal.style.display = "block";

        span.onclick = function () {
            modal.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        button.addEventListener('click', async () => {
            let form = document.getElementById('formEdit')
            let imagemPrincipal = product.imagemPrincipal
            let imagemSecundaria = product.imagemSecundaria

            if (form.reportValidity()) {
                Toastify({
                    text: "Salvando produto...",
                    className: "info",
                    style: {
                        background: "linear-gradient(to right, #9FD7F9, #193073)",
                    }
                }).showToast()
            }
            if (imagemP.value !== "") {
                imagemPrincipal = await registerImage(imagemP.files[0])

                if (imagemS.value !== "") {
                    imagemSecundaria = await registerImage(imagemS.files[0])
                    let editProduct = await editarProduto(product._id, nome.value, descricao.value, imagemPrincipal, imagemSecundaria)
                    modal.style.display = "none";
                } else {
                    let editProduct = await editarProduto(product._id, nome.value, descricao.value, imagemPrincipal, imagemSecundaria)
                    modal.style.display = "none";
                }
            } else {
                if (imagemS.value !== "") {
                    imagemSecundaria = await registerImage(imagemS.files[0])

                    let editProduct = await editarProduto(product._id, nome.value, descricao.value, imagemPrincipal, imagemSecundaria)
                    modal.style.display = "none";
                } else {
                    let editProduct = await editarProduto(product._id, nome.value, descricao.value, imagemPrincipal, imagemSecundaria)
                    modal.style.display = "none";
                }
            }
        })
    })

    trashIcon.addEventListener('click', () =>{

        let modal = document.getElementById("modalDelete");
        let span = document.getElementsByClassName("close")[2];
        let button = document.getElementById("delete-product")
        let buttonCancel = document.getElementById("btn-cancel")

        modal.style.display = "block";

        span.onclick = function () {
            modal.style.display = "none";
        }

        buttonCancel.onclick = function () {
            modal.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        button.onclick = async () =>{
           let deleteProduct = await deletarProduto(product._id) 
           modal.style.display = "none";
        }
    })
    table.append(row)
}

export const createTableProducts = (products) => {
    products.product.forEach(product => {
        createRowTable(product)
    })
}

export const openModal = () => {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

export const registerProduct = () => {
    let register = document.getElementById("register-product");
    let form = document.getElementById('form');

    register.onclick = async function () {
        if (form.reportValidity()) {
            Toastify({
                text: "Salvando produto...",
                className: "info",
                style: {
                    background: "linear-gradient(to right, #9FD7F9, #193073)",
                }
            }).showToast();


            let nome = document.getElementById('nome').value;
            let descricao = document.getElementById("descricao").value;
            let imagemP = document.getElementById("imagemP");
            let imagemS = document.getElementById("imagemS");
            let imagemPrincipal = await registerImage(imagemP.files[0])
            let imagemSecundaria = await registerImage(imagemS.files[0])

           

            let product = await criarProduto(nome, descricao, imagemPrincipal, imagemSecundaria)
            var modal = document.getElementById("myModal");
            modal.style.display = "none";

            document.getElementById('nome').value = "";
            document.getElementById("descricao").value = "";
            document.getElementById("imagemP").value = "";
            document.getElementById("imagemS").value = "";
        }

    }

    return true
}