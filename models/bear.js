const mongoose = require("mongoose");
const Schema = mongoose.Schema

const bearSchema = new Schema({
  name: String,
  type: String,
});

module.exports = mongoose.model("Bear", bearSchema);
