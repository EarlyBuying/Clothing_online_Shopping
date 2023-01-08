const express = require("express");
const router = express.Router();

const ModelOrders = require("../models/ModelOrders");
// -------------ADD--------------------
router.route("/add").post((req, res) => {
  const { name, code, price, color, fullName, mobileNumber, City, Email } =
    req.body;

  const newOrder = new ModelOrders({
    name,
    code,
    price,
    color,
    fullName,
    mobileNumber,
    City,
    Email,
  });

  newOrder
    .save()
    .then(() => {
      res.status(200).json("New Order Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//-------view
router.route("/").get((req, res) => {
  ModelOrders.find()
    .then((items) => {
      res.json(items);
    })
    .catch((err) => {
      console.log(err);
    });
});

//---------------------update---------------------------------------
router.route("/:id").put(async (req, res) => {
  let orderId = req.params.id;
  const { name, code, price, color, fullName, mobileNumber, City, Email } =
    req.body;

  const updateOrder = {
    name,
    code,
    price,
    color,
    fullName,
    mobileNumber,
    City,
    Email,
  };
  const update = await ModelOrders.findByIdAndUpdate(orderId, updateOrder)
    .then(() => {
      res.status(200).json(" Order Updated");
    })
    .catch((err) => {
      res.status(500).send({ status: "Error with update", error: err.message });
      console.log(err);
    });
});

//--------------------Delete---------------------------------------
router.route("/:id").delete((req, res) => {
  let orderId = req.params.id;
  ModelOrders.findByIdAndDelete(orderId)
    .then(() => {
      res.status(200).send(console.log("Deleted"));
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
