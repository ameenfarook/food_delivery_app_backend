var express = require("express");
const { getOneFoodById } = require("../services/food.service");
var router = express.Router();

router.get("/:foodId", async (req, res) => {
  let foodId = req?.params?.foodId;
  let response = await getOneFoodById(foodId);
  res.json(response);
});

module.exports = router;
