const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price_of_stock: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  no_of_units: {
    type: Number,
    required: true,
  },
  user_value: {
    type: Number,
  },
  transaction_date: {
    type: Date,
  },
  market_value: {
    type: Number,
  },
});

module.exports = mongoose.model("Post", PostSchema);
