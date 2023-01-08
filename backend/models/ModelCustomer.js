const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
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
  Password: {
    type: String,
  },
});

module.exports = mongoose.model("CustomerTable", customerSchema);
