const bearRouter = require("express").Router();
const Bear = require("../models/bear");

//  Get la route '/api/bears'
bearRouter.get("/", (req, res) => {
  Bear.find({}, (err, result) => {
    if (err) return console.error(err);
    res.json(result);
  });
});
// POST la route '/api/bears/new'
bearRouter.post("/new", (req, res) => {
  const newBear = new Bear(req.body);
  newBear.save((err, bear) => {
    if (err) return console.error(err);
    res.json({ message: "Bear created!", bear });
  });
});
//  GET la route '/api/bears/:id
bearRouter.get("/:id", (req, res) => {
  Bear.findById({ _id: req.params.id }, (err, bear) => {
    if (err) return console.error(err);
    res.json(bear);
  });
});
//  PUT
bearRouter.put("/:id", (req, res) => {
  Bear.findById({ _id: req.params.id }, (err, bear) => {
    if (err) return console.error(err);
    Object.assign(bear, req.body).save((err, nb) => {
      if (err) return console.error(err);
      res.json({ meessage: "Bear modified", nb });
    });
  });
});
// delete
bearRouter.delete("/:id", (req, res) => {
  Bear.remove({ _id: req.params.id }, (err, bear) => {
  });
  res.redirect('/api/bears')
});

module.exports = bearRouter;
