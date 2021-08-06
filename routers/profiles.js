const express = require("express");
const router = express.Router();

const Profile = require("../models/Profile");

router.get("/get", (req, res) => {
  Profile.find({}, (err, data) => {
    if (err) return console.log(err);
    res.json(data);
  }).sort({
    added: -1,
  });
});

router.get("/get/:filter", (req, res) => {
  var filter = req.params.filter;
  Profile.find(
    {
      category: filter,
    },
    (err, data) => {
      if (err) return console.log(err);
      res.json(data);
    }
  ).sort({
    added: -1,
  });
});

router.post("/add", (req, res) => {
  const newProfile = new Profile({
    ...req.body,
  });
  newProfile
    .save()
    .then((data) => {
      res.json(data);
      console.log(`Wpis dodany do bazy`);
    })
    .catch((err) => {
      res.status(404);
    });
});

router.put("/update/:id", (req, res) => {
  console.log("aktualizacja:", req.body);
  var id = req.params.id;
  Profile.findByIdAndUpdate(
    id,
    { ...req.body },
    {
      new: true,
      useFindAndModify: false,
    },
    (err, data) => {
      if (err) return console.log(err);
      res.json(data);
    }
  );
});

module.exports = router;
