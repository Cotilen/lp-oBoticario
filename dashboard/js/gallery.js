
import { registerImage } from './saveImage.js';
import { criarImagem, deletarImagem, editarImagem } from './services/gallery.js';

const createRowTable = (gallery) => {
    const table = document.getElementById('table-gallery')

    const row = document.createElement('tr')
    row.setAttribute('class', 'table-row')
    row.id = `${gallery._id}`

    const endereco = document.createElement('td')
    const divEndereco = document.createElement('div')
    divEndereco.classList.add('scroll')
    divEndereco.textContent = gallery.endereco


    const imagem = document.createElement('td')
    const img = document.createElement('img')
    img.classList.add('img-table')
    img.src = gallery.imagem
    img.alt = 'Imagem'

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


    endereco.append(divEndereco)
    imagem.append(img)
    acoes.append(acoesDiv)
    acoesDiv.append(editIcon, trashIcon)

    row.append(endereco, imagem, acoes)


    editIcon.addEventListener('click', () => {

        let modal = document.getElementById("modal-gallery-edit");
        let span = document.getElementsByClassName("close")[1];
        let button = document.getElementById("edit-gallery")

        let endereco = document.getElementById("endereco-gallery-edit");
        endereco.value = gallery.endereco

        let imagemP = document.getElementById("imagem-gallery-edit");
        imagemP.value = ""

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
            let form = document.getElementById('form-gallery-edit')
            let imagem = gallery.imagem

            if (form.reportValidity()) {
                Toastify({
                    text: `Salvando imagem,
                aguarde...`,
                    className: "info",
                    style: {
                        background: "linear-gradient(to right, #9FD7F9, #193073)",
                    }
                }).showToast()
            }
            if (imagemP.value !== "") {
                imagem = await registerImage(imagemP.files[0])

                await editarImagem(gallery._id, endereco.value,imagem)
                modal.style.display = "none";
            } else {
                await editarImagem(gallery._id, endereco.value,imagem)
                modal.style.display = "none";

            }
        })
    })

    trashIcon.addEventListener('click', () =>{

        let modal = document.getElementById("modal-gallery-delete");
        let span = document.getElementsByClassName("close")[2];
        let button = document.getElementById("delete-gallery")
        let buttonCancel = document.getElementById("btn-gallery-cancel")

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
           await deletarImagem(gallery._id) 
           modal.style.display = "none";
        }
    })
    table.append(row)
}


export const createTableGallery = (image) => {
    image.gallery.map(element => {
        createRowTable(element)
    })
}

export const openModalGallery = () => {
    var modal = document.getElementById("modal-create-gallery");
    var btn = document.getElementById("btn-gallery");
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

export const registerGallery = () => {
    let register = document.getElementById("register-gallery");
    let form = document.getElementById('form-gallery');

    register.onclick = async function () {
        if (form.reportValidity()) {
            Toastify({
                text: `Salvando imagem,
                aguarde...`,
                className: "info",
                style: {
                    background: "linear-gradient(to right, #9FD7F9, #193073)",
                }
            }).showToast();


            let nome = document.getElementById('endereco-gallery').value;
            let img = document.getElementById("imagem-gallery");
            let imagemPrincipal = await registerImage(img.files[0])

            let gallery = await criarImagem(nome, imagemPrincipal)
            var modal = document.getElementById("modal-create-gallery");
            modal.style.display = "none";

            document.getElementById('endereco-gallery').value = "";
            document.getElementById("imagem-gallery").value = "";

        }

    }

    return true
}