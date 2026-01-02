import express from "express";
import Event from "../models/Event.js";

const router = express.Router();

// CREATE EVENT (TESTING)
router.post("/", async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET ALL EVENTS
router.get("/", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

export default router;
