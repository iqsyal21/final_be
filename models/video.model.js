const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  video_url: {
    required: true,
    type: String,
  },
  img_url: {
    required: true,
    type: String,
  },
  category: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Video", videoSchema);
