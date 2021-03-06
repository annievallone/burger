var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {

  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log("burgers" + hbsObject);
    res.render("index", hbsObject);
  });

});

router.post("/api/burgers", function(req, res) {
  console.log("REQ BODY ON BACK END: ", req.body)
  burger.insertOne(["burger_name"], [req.body.name], function(result) {
    res.json({ id: result.insertId });
    // res.render("index", hbsObject);
  });
});

router.put("/api/burgers", function(req, res) {
  var condition = req.data;

  console.log("condition===========", condition);

  burger.updateOne(
    "devoured",
    true,
    condition,
    function(result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
