const Product = require('../model/products')
const messages = require('./modulo/config')

const registerProduct = async function (dados) {

    if (dados.nome == null || dados.imagemPrincipal == null || dados.imagemSecundaria == null || dados.descricao == null
        || dados.nome == "" || dados.imagemPrincipal == "" || dados.imagemSecundaria == "" || dados.descricao == ""
        || dados.nome == undefined || dados.imagemPrincipal == undefined || dados.imagemSecundaria == undefined || dados.descricao == undefined
    ) {
        return messages.ERROR_REQUIRED_DATA
    } else {
        const product = new Product({
            nome: dados.nome,
            descricao: dados.descricao,
            imagemPrincipal: dados.imagemPrincipal,
            imagemSecundaria: dados.imagemSecundaria,
        })
        await product.save()

        return messages.CREATED_ITEM
    }

}

const findProducts = async function () {
    const products = await Product.find()
    return products
}

const updateProduct = async function (id, dados) {
    if (dados.nome == null || dados.imagemPrincipal == null || dados.imagemSecundaria == null || dados.descricao == null
        || dados.nome == "" || dados.imagemPrincipal == "" || dados.imagemSecundaria == "" || dados.descricao == ""
        || dados.nome == undefined || dados.imagemPrincipal == undefined || dados.imagemSecundaria == undefined || dados.descricao == undefined
        || id == null || id == "" || id == undefined
    ) {
        return messages.ERROR_REQUIRED_DATA
    } else {
        const product = await Product.findByIdAndUpdate(
            id,
            dados,
            { new: true, runValidators: true }
        )
        if (product == null) {
            return messages.ERROR_NOT_FOUND_ID
        }

        return product

    }
}

const deleteProduct = async function (id) {
    if (id == null || id == "" || id == undefined) {
        return messages.ERROR_REQUIRED_DATA
    } else {
        try {
            const product = await Product.findByIdAndDelete(id)

            if (product == null) {
                return messages.ERROR_NOT_FOUND_ID
            }

            return messages.DELETED_ITEM
        } catch (error) {
            console.log(error);
        }

    }
}

module.exports = {
    registerProduct,
    findProducts,
    updateProduct,
    deleteProduct
}