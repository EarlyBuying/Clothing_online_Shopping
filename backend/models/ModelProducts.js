const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  code: {
    type: String,
  },
  price: {
    type: String,
  },
  weight: {
    type: String,
  },
  color: {
    type: String,
  },
  category: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("ProductTable", productSchema);
