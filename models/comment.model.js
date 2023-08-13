const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  video_id: {
    required: true,
    type: String,
  },
  username: {
    required: true,
    type: String,
  },
  comment: {
    required: true,
    type: String,
  },
  time: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Comment", commentSchema);
