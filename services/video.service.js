const Video = require("../models/video.model");

const getVideosService = async () => {
  const videos = await Video.find();
  if (videos.length > 0) {
    return videos;
  } else {
    throw {
      message: "videos not found",
    };
  }
};

const getVideoByIdService = async (id) => {
  const video = await Video.findById(id);
  if (video != null) {
    const videoWithProducts = Video.aggregate([
      { $match: { _id: video._id } },
      {
        $lookup: {
          from: "products",
          localField: "category",
          foreignField: "category",
          as: "product_list",
        },
      },
    ]);
    return videoWithProducts;
  } else {
    throw { message: "video not found" };
  }
};

const createVideoService = async (video_url, img_url, category) => {
  const video = await Video.findOne({ video_url: video_url });
  if (video != null) throw { message: "video is already" };

  try {
    const newVideo = new Video({
      video_url: video_url,
      img_url: img_url,
      category: category,
    });

    await newVideo.save();
    return newVideo;
  } catch (error) {
    return error.message;
  }
};

const updateVideoService = async (id, video_url, img_url, category) => {
  const video = await Video.findById(id);
  if (video == null) throw { message: "video not found" };

  try {
    const updateVideo = {
      video_url: video_url,
      img_url: img_url,
      category: category,
    };

    await Video.findByIdAndUpdate(id, updateVideo, { new: true });
    return updateVideo;
  } catch (error) {
    return error.message;
  }
};

const deleteVideoService = async (id) => {
  const video = await Video.findById(id);
  if (video == null) throw { message: "video not found" };

  try {
    const video = await Video.findByIdAndDelete(id);
    return video;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getVideosService,
  getVideoByIdService,
  createVideoService,
  updateVideoService,
  deleteVideoService,
};
