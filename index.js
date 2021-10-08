const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/shares.js");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const Port = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use("/shares", userRoutes);

mongoose.connect(
  "mongodb+srv://TestUserr:rhino123456@myproject.knpuz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  () => console.log("connected to the database!!!")
);

app.listen(Port, () => {
  console.log(`Server Started on http://localhost:${Port}`);
});
