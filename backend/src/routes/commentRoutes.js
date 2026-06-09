import express from "express";
import {
  addComment,
  getComments,
  deleteComment,
} from "../controllers/commentController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Add comment
router.post("/:videoId", protect, addComment);

// Get comments
router.get("/:videoId", getComments);

// Delete comment
router.delete("/:id", protect, deleteComment);

export default router;