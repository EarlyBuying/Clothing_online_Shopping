const express = require("express");
const router = express.Router();

const ModelProducts = require("../models/ModelProducts");
// -------------ADD--------------------
router.route("/").post((req, res) => {
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
router.route("/").get((req, res) => {
  ModelProducts.find()
    .then((items) => {
      res.json(items);
    })
    .catch((err) => {
      console.log(err);
    });
});

//---------------------update---------------------------------------
router.route("/:id").put(async (req, res) => {
  let productId = req.params.id;
  const { name, code, price, weight, color, category, description } = req.body;

  const updateProduct = {
    name,
    code,
    price,
    weight,
    color,
    category,
    description,
  };
  const update = await ModelProducts.findByIdAndUpdate(productId, updateProduct)
    .then(() => {
      res.status(200).json(" Product Updated");
    })
    .catch((err) => {
      res.status(500).send({ status: "Error with update", error: err.message });
      console.log(err);
    });
});

//--------------------Delete---------------------------------------
router.route("/:id").delete((req, res) => {
  let productId = req.params.id;
  ModelProducts.findByIdAndDelete(productId)
    .then(() => {
      res.status(200).send(console.log("Deleted"));
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
