import express from "express";
import {
  createAnnouncement,
  getAnnouncements,
  updateAnnouncement,
  deleteAnnouncement
} from "../controllers/announcementController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createAnnouncement);
router.get("/", getAnnouncements);
router.put("/:id", protect, updateAnnouncement);
router.delete("/:id", protect, deleteAnnouncement);

export default router;
