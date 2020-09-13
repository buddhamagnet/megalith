const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  content: String,
  comment: String,
  userId: String
});

module.exports = mongoose.model("Post", PostSchema);
