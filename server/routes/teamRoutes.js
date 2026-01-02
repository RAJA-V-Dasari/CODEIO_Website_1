import express from "express";
import {
  createMember,
  getMembers,
  updateMember,
  deleteMember
} from "../controllers/teamController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createMember);
router.get("/", getMembers);
router.put("/:id", protect, updateMember);
router.delete("/:id", protect, deleteMember);

export default router;
