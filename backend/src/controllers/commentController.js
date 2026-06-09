import Comment from "../models/Comment.js";
import Video from "../models/Video.js";

// ➤ Add Comment
export const addComment = async (req, res) => {
  try {
    const { text } = req.body;
    const videoId = req.params.videoId;

    const video = await Video.findById(videoId);

    if (!video) {
      return res.status(404).json({
        success: false,
        message: "Video not found",
      });
    }

    const comment = await Comment.create({
      text,
      video: videoId,
      user: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Comment added",
      comment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ➤ Get Comments
export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({
      video: req.params.videoId,
    })
      .populate("user", "username profilePic")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      comments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ➤ Delete Comment
export const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);

    if (!comment) {
      return res.status(404).json({
        success: false,
        message: "Comment not found",
      });
    }

    if (comment.user.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Not allowed",
      });
    }

    await comment.deleteOne();

    res.status(200).json({
      success: true,
      message: "Comment deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};