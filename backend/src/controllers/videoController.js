import Video from "../models/Video.js";

// Upload Video
export const uploadVideo = async (req, res) => {
  try {
    const { title, description, videoUrl, thumbnailUrl } = req.body;

    const video = await Video.create({
      title,
      description,
      videoUrl,
      thumbnailUrl,
      uploadedBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Video uploaded successfully",
      video,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all videos
export const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find()
      .populate("uploadedBy", "username profilePic")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      videos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get single video
export const getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id)
      .populate("uploadedBy", "username profilePic");

    if (!video) {
      return res.status(404).json({
        success: false,
        message: "Video not found",
      });
    }

    video.views += 1;
    await video.save();

    res.status(200).json({
      success: true,
      video,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ❤️ LIKE / UNLIKE VIDEO (MODULE 15 CORE)
export const toggleLikeVideo = async (req, res) => {
  try {
    const videoId = req.params.id;
    const userId = req.user.id;

    const video = await Video.findById(videoId);

    if (!video) {
      return res.status(404).json({
        success: false,
        message: "Video not found",
      });
    }

    const isLiked = video.likes.includes(userId);

    if (isLiked) {
      // UNLIKE
      video.likes = video.likes.filter(
        (id) => id.toString() !== userId
      );

      await video.save();

      return res.status(200).json({
        success: true,
        message: "Video unliked",
      });
    } else {
      // LIKE
      video.likes.push(userId);

      await video.save();

      return res.status(200).json({
        success: true,
        message: "Video liked",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};