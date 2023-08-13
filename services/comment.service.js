const Comment = require("../models/comment.model");

const getCommentsService = async () => {
  const comments = await Comment.find();
  if (comments.length > 0) {
    return comments;
  } else {
    throw {
      message: "comments not found",
    };
  }
};

const getCommentsByVideoIdService = async (id) => {
  const comments = await Comment.find({ video_id: id });
  if (comments.length > 0) {
    return comments;
  } else {
    throw {
      message: "comments not found",
    };
  }
};

const createCommentService = async (video_id, username, comment) => {
  try {
    const newComment = new Comment({
      video_id: video_id,
      username: username,
      comment: comment,
      time: new Date(),
    });

    await newComment.save();
    return newComment;
  } catch (error) {
    return error.message;
  }
};

const deleteCommentService = async (id) => {
  const comment = await Comment.findById(id);
  if (comment == null) throw { message: "comment not found" };

  try {
    const comment = await Comment.findByIdAndDelete(id);
    return comment;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getCommentsService,
  getCommentsByVideoIdService,
  createCommentService,
  deleteCommentService,
};
