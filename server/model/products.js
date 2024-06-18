const mongoose = require("mongoose");

const Product = mongoose.model("Product", {
  nome: String,
  descricao: String,
  imagemPrincipal: String,
  imagemSecundaria: String,
});

module.exports = Product;