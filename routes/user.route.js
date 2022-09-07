var express = require("express");
const { getUserData } = require("../services/user.service");
var router = express.Router();

router.get("/get-user", async (req, res) => {
  let username = req?.username;
  let response = await getUserData(username);
  res.json(response);
});

module.exports = router;
