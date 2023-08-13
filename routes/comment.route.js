const express = require("express");
const router = express.Router();

const {
  getCommentsController,
  getCommentsByVideoIdController,
  createCommentController,
  deleteCommentController,
} = require("../controllers/comment.controller");

const cekToken = require("../midleware/cekToken");

router.get("/", getCommentsController);
router.get("/:id", getCommentsByVideoIdController);
router.post("/:id", cekToken, createCommentController);
router.delete("/:id", cekToken, deleteCommentController);

module.exports = router;
