const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number_of_stocks: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  price_per_unit: {
    type: Number,
    required: true,
  },
  transaction_date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Post", PostSchema);


