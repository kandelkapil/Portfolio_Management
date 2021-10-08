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

/* 
user ko stock hunxa

share detail = buying selling transaction.
holding table share fk, buying , sp, user

user name email


manip nabil, laxmi
kapil bok, lumbini


[kapil manip]


dashboard api

logged in user patta laune(kapil)

stock table ma user query as per the logged in user
holding table query fetch record where user is kapil


queryset = [bok, lumbini]

for loop in query set:

share instance 
sbok of user kapil fetch

*/
