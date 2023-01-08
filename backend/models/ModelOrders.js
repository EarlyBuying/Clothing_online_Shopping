const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  code: {
    type: String,
  },
  price: {
    type: String,
  },
  color: {
    type: String,
  },
  fullName: {
    type: String,
  },
  mobileNumber: {
    type: String,
  },
  City: {
    type: String,
  },
  Email: {
    type: String,
  },
});

module.exports = mongoose.model("OrderTable", orderSchema);
