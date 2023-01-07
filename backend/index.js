const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 4500;

app.use(cors());
app.use(bodyParser.json());

mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.DATABASE_MDB)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });
const productRout = require("./Routes/productRoute");
app.use("/product", productRout);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
