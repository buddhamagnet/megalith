const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HobbySchema = new Schema({
  title: String,
  description: String,
  userId: String
});

module.exports = mongoose.model("Hobby", HobbySchema);
