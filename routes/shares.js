const express = require("express");
const Post = require("../models/Post");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const post = await Post.find();
    res.json(post);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/", async (req, res) => {
  const post = new Post({
    name: req.body.name,
    number_of_stocks: req.body.number_of_stocks,
    status: req.body.status,
    price_per_unit: req.body.price_per_unit,
    transaction_date: req.body.transaction_date,
  });

  try {
    const savedPosts = await post.save();
    res.json(savedPosts);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
