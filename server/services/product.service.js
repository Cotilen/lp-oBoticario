const Product = require('../model/products')
const messages = require('./modulo/config')

const registerProduct = async function(dados){

    if(dados.nome == null || dados.imagemPrincipal == null || dados.imagemSecundaria == null || dados.descricao == null
        || dados.nome == "" || dados.imagemPrincipal == "" || dados.imagemSecundaria == "" || dados.descricao == ""
        || dados.nome == undefined || dados.imagemPrincipal == undefined || dados.imagemSecundaria == undefined || dados.descricao == undefined
    ){
        return messages.ERROR_REQUIRED_DATA
    }else{
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

const findProducts = async function(){
    const products = await Product.find()
    return products
}

module.exports = {
    registerProduct,
    findProducts,
}