import express from "express";

import {
  uploadVideo,
  getAllVideos,
  getVideoById,
  toggleLikeVideo,
} from "../controllers/videoController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Upload video
router.post("/upload", protect, uploadVideo);

// Get all videos
router.get("/", getAllVideos);

// Get single video
router.get("/:id", getVideoById);

// ❤️ Like / Unlike video
router.put("/like/:id", protect, toggleLikeVideo);

export default router;