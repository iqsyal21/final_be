const express = require("express");
const router = express.Router();

const {
  getVideosController,
  getVideoByIdController,
  createVideoController,
  updateVideoController,
  deleteVideoController,
  addCommentController,
} = require("../controllers/video.controller");

const cekToken = require("../midleware/cekToken");

router.get("/", getVideosController);
router.get("/:id", getVideoByIdController);
router.post("/", cekToken, createVideoController);
router.patch("/:id", cekToken, updateVideoController);
router.delete("/:id", cekToken, deleteVideoController);

module.exports = router;
