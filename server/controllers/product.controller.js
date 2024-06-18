const router = require("express").Router();
const cors = require('cors')
const bodyParser = require('body-parser')
const bodyJSON = bodyParser.json()

const productService = require('../services/product.service')

router.post("/product",  cors(), bodyJSON, async function(request, response){
    let dadosJson = request.body

    let products = await productService.registerProduct(dadosJson)

    response.json(products.message)
    response.status(products.status)
})

router.get("/product", cors(), bodyJSON, async function(request, response){
    let product = await productService.findProducts()

    response.json(product)
})

module.exports = router;