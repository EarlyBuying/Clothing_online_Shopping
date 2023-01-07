const express = require("express");
const router = express.Router();

const ModelProducts = require("../models/ModelProducts");
// -------------ADD--------------------
router.route("/add").post((req, res) => {
  const { name, code, price, weight, color, category, description } = req.body;

  const newProduct = new ModelProducts({
    name,
    code,
    price,
    weight,
    color,
    category,
    description,
  });

  newProduct
    .save()
    .then(() => {
      res.status(200).json("New Product Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//-------view
router.route("/view").get((req, res) => {
  ModelProducts.find()
    .then((items) => {
      res.json(items);
    })
    .catch((err) => {
      console.log(err);
    });
});

//update---------------------------------------

module.exports = router;
