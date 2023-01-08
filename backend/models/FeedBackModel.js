const mongoose = require("mongoose");

const feedBackSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },
  Email: {
    type: String,
  },
  Idea: {
    type: String,
  },
});

module.exports = mongoose.model("FeedBackTable", feedBackSchema);
