var express = require("express");
const {
  addBookmark,
  removeBookmark,
  getBookmarks,
} = require("../services/bookmark.service");
var router = express.Router();

router.get("/", async (req, res) => {
  let username = req?.username;
  let response = await getBookmarks({ username });
  res.json(response);
});

router.post("/:restaurantId", async (req, res) => {
  let { restaurantId } = req?.params;
  let username = req?.username;
  let response = await addBookmark({ restaurantId, username });
  res.json(response);
});

router.delete("/:restaurantId", async (req, res) => {
  let { restaurantId } = req?.params;
  let username = req?.username;
  let response = await removeBookmark({ restaurantId, username });
  res.json(response);
});

module.exports = router;
