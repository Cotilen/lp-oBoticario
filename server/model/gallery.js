const mongoose = require("mongoose");

const Gallery = mongoose.model("Gallery", {
  nome: String,
  imagem: String,
});

module.exports = Gallery;