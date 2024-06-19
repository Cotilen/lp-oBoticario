const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const bodyJSON = bodyParser.json()
require('dotenv').config()
require('./database/connection')

const productController = require('./controllers/product.controller')
const galleryController = require('./controllers/gallery.controller')
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')

    response.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS')

    app.use(cors())

    next()
})

app.use(productController)
app.use(galleryController
    
)

app.listen(8080, function() {
    console.log('Servidor aguardando requisições');

})