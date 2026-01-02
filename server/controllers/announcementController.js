import Announcement from "../models/Announcement.js";

// CREATE ANNOUNCEMENT (Admin)
export const createAnnouncement = async (req, res) => {
  try {
    const announcement = await Announcement.create(req.body);
    res.status(201).json(announcement);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET ACTIVE ANNOUNCEMENTS (Public)
export const getAnnouncements = async (req, res) => {
  const announcements = await Announcement.find({
    isActive: true
  }).sort({ createdAt: -1 });

  res.json(announcements);
};

// UPDATE ANNOUNCEMENT (Admin)
export const updateAnnouncement = async (req, res) => {
  const updatedAnnouncement = await Announcement.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedAnnouncement);
};

// DELETE ANNOUNCEMENT (Admin)
export const deleteAnnouncement = async (req, res) => {
  await Announcement.findByIdAndDelete(req.params.id);
  res.json({ message: "Announcement deleted successfully" });
};
