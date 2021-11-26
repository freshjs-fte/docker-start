const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello from container");
});

mongoose.connect('mongodb://172.17.0.2:27017/fe_mongo')

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    firstName: { type: String },
  })
);

test();

async function test() {
  const created = await User.create({ firstName: "John" });
  console.log(created);
}

module.exports = app;
