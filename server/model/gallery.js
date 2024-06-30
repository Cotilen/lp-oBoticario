const mongoose = require("mongoose");

const Gallery = mongoose.model("Gallery", {
  endereco: String,
  imagem: String,
});

module.exports = Gallery;