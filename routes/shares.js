const express = require("express");
const Post = require("../models/Post");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/", async (req, res) => {
  const body = req.body;
  const post = new Post({
    name: body.name,
    price_of_stock: body.price_of_stock,
    status: body.status,
    no_of_units: body.no_of_units,
    transaction_date: body.transaction_date,
    user_value: body.price_of_stock * body.no_of_units,
    market_value: body.market_value,
  });

  try {
    const savedPosts = await post.save();
    res.json(savedPosts);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
