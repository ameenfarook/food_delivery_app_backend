var express = require("express");
const { getAllRestaurant } = require("../services/restaurant.service");
var router = express.Router();

router.get("/", async (req, res) => {
  let response = await getAllRestaurant();
  res.json(response);
});

module.exports = router;
