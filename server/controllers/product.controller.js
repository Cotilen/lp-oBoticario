const router = require("express").Router();
const cors = require('cors')
const bodyParser = require('body-parser')
const bodyJSON = bodyParser.json()

const productService = require('../services/product.service')

router.post("/product",  cors(), bodyJSON, async function(request, response){
    let dadosJson = request.body

    let products = await productService.registerProduct(dadosJson)

    response.status(products.status).json({products})
})

router.get("/product", cors(), bodyJSON, async function(request, response){
    let product = await productService.findProducts()

    response.json(product)

})

router.put("/product/:id", cors(), bodyJSON, async function(request,response){

    let idProduct = request.params.id
    let dadosJson = request.body
    let product = await productService.updateProduct(idProduct,dadosJson)

    response.json({product})
})

router.delete("/product/:id", cors(), bodyJSON, async function(request,response){
    let idProduct = request.params.id
    let product = await productService.deleteProduct(idProduct)

    response.status(products.status).json({products})

})


module.exports = router;