const express = require("express");
const router = express.Router();

const ModelFeedBack = require("../models/FeedBackModel");

router.route("/add").post((req, res) => {
  const { fullName, Email, Idea } = req.body;

  const newFeedBack = new ModelFeedBack({
    fullName,
    Email,
    Idea,
  });

  newFeedBack
    .save()
    .then(() => {
      res.status(200).json("Feedback Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//-------view
router.route("/").get((req, res) => {
  ModelFeedBack.find()
    .then((cus) => {
      res.json(cus);
    })
    .catch((err) => {
      console.log(err);
    });
});

//--------------------Delete---------------------------------------
router.route("/:id").delete((req, res) => {
  let feedBackId = req.params.id;
  ModelFeedBack.findByIdAndDelete(feedBackId)
    .then(() => {
      res.status(200).send(console.log("Deleted"));
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
