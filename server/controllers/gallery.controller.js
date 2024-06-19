const router = require("express").Router();
const cors = require('cors')
const bodyParser = require('body-parser')
const bodyJSON = bodyParser.json()

const galleryService = require('../services/gallery.service')

router.post("/gallery",  cors(), bodyJSON, async function(request, response){
    let dadosJson = request.body

    let gallery = await galleryService.registerGallery(dadosJson)

    response.json(gallery)
})

router.get("/gallery", cors(), bodyJSON, async function(request, response){
    let gallery = await galleryService.findGalleries()

    response.json({gallery})
})

router.put("/gallery/:id", cors(), bodyJSON, async function(request,response){

    let idGallery = request.params.id
    let dadosJson = request.body
    let gallery = await galleryService.updateGallery(idGallery,dadosJson)

    response.json({gallery})
})

router.delete("/gallery/:id", cors(), bodyJSON, async function(request,response){
    let idGallery = request.params.id
    let gallery = await galleryService.deleteGallery(idGallery)

    response.json(gallery)
})


module.exports = router;