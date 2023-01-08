const express = require("express");
const router = express.Router();

const ModelCustomer = require("../models/ModelCustomer");

router.route("/add").post((req, res) => {
  const { fullName, mobileNumber, City, Email, Password } = req.body;

  const newProduct = new ModelCustomer({
    fullName,
    mobileNumber,
    City,
    Email,
    Password,
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
  ModelCustomer.find()
    .then((cus) => {
      res.json(cus);
    })
    .catch((err) => {
      console.log(err);
    });
});

//--------------------Delete---------------------------------------
router.route("/:id").delete((req, res) => {
  let customertId = req.params.id;
  ModelCustomer.findByIdAndDelete(customertId)
    .then(() => {
      res.status(200).send(console.log("Deleted"));
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
