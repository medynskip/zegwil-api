const express = require("express");
const router = express.Router();

const Config = require("../models/Config");

// router.get("/get", (req, res) => {
//   Config.find({}, (err, data) => {
//     if (err) return console.log(err);
//     res.json(data);
//   }).sort({
//     added: -1,
//   });
// });

router.post("/filter", (req, res) => {
  Config.find(
    {
      ...req.body,
    },
    (err, data) => {
      if (err) return console.log(err);
      res.json(data);
    }
  ).sort({
    added: -1,
  });
});

router.post("/create", (req, res) => {
  const newConfig = new Config({
    ...req.body,
  });
  console.log("zapytanie:", newConfig);
  newConfig
    .save()
    .then((data) => {
      res.json(data);
      console.log(`Wpis dodany do bazy ZEGWIL`);
    })
    .catch((err) => {
      res.status(404);
    });
});

router.post("/update/:id", (req, res) => {
  var id = req.params.id;
  Config.findByIdAndUpdate(
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
