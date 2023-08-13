const {
  getCommentsService,
  getCommentsByVideoIdService,
  createCommentService,
  deleteCommentService,
} = require("../services/comment.service");

const getCommentsController = async (req, res) => {
  try {
    const comments = await getCommentsService();

    res.status(200).json({
      message: "success get all comments",
      data: {
        comments,
      },
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const getCommentsByVideoIdController = async (req, res) => {
  try {
    if (req.params.id.length < 24) throw { message: "id is doesn't match" };

    const comments = await getCommentsByVideoIdService(req.params.id);

    res.status(200).json({
      message: "success get video comments",
      data: {
        comments,
      },
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const createCommentController = async (req, res) => {
  try {
    if (req.params.id.length < 24) throw { message: "id is doesn't match" };

    const newComment = await createCommentService(
      req.params.id,
      req.auth.username,
      req.body.comment
    );

    res.status(201).json({
      message: "success add new comment",
      data: {
        newComment,
      },
    });
  } catch (error) {
    res.status(403).json({
      message: error.message,
    });
  }
};

const deleteCommentController = async (req, res) => {
  try {
    if (req.params.id.length < 24) throw { message: "id is doesn't match" };

    const deleteComment = await deleteCommentService(req.params.id);

    res.status(200).json({
      message: "success deleted comment",
      data: deleteComment,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

module.exports = {
  getCommentsController,
  getCommentsByVideoIdController,
  createCommentController,
  deleteCommentController,
};
