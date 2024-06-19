const Gallery = require('../model/gallery')
const messages = require('./modulo/config')

const registerGallery = async function (dados) {

    if (dados.nome == null || dados.imagem == null || dados.nome == "" || dados.imagem == ""
        || dados.nome == undefined || dados.imagem == undefined) {
        return messages.ERROR_REQUIRED_DATA
    } else {
        const gallery = new Gallery({
            nome: dados.nome,
            imagem: dados.imagem
        })
        await gallery.save()

        return messages.CREATED_ITEM
    }

}

const findGalleries = async function () {
    const galleries = await Gallery.find()
    return galleries
}

const updateGallery = async function (id, dados) {
    if (dados.nome == null || dados.imagem == null || dados.nome == "" || dados.imagem == ""
        || dados.nome == undefined || dados.imagem == undefined) {
        return messages.ERROR_REQUIRED_DATA
    } else {
        const gallery = await Gallery.findByIdAndUpdate(
            id,
            dados,
            { new: true, runValidators: true }
        )
        if (gallery == null) {
            return messages.ERROR_NOT_FOUND_ID
        }

        return gallery

    }
}

const deleteGallery = async function (id) {
    if (id == null || id == "" || id == undefined) {
        return messages.ERROR_REQUIRED_DATA
    } else {
        try {
            const gallery = await Gallery.findByIdAndDelete(id)

            if (gallery == null) {
                return messages.ERROR_NOT_FOUND_ID
            }

            return messages.DELETED_ITEM
        } catch (error) {
            console.log(error);
        }

    }
}

module.exports = {
    registerGallery,
    findGalleries,
    updateGallery,
    deleteGallery
}