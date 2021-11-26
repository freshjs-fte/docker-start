const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello from container");
});

mongoose.connect('mongodb://fe_mongo_db:27017/fe_mongo') // 

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    firstName: { type: String },
  })
);

test();


/**
 * 
 * @param {Object} options
 * @param {Number} options.numberRows count rows 
 * @param {Array} taskList list of tasks
 * @returns 
 */
async function test({numberRows}) {
  const created = await User.create({ firstName: "John" });
  console.log(created);
}

module.exports = app;
