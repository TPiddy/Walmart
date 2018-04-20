var express = require("express");
var router = express.Router();
let cors = require("cors");

/* GET home page. */
router.get("/cars", cors(), function(req, res, next) {
  let cars = require("../public/json/cars");
  res.status(200).json(cars);
});

module.exports = router;
