import Event from "../models/Event.js";

// CREATE EVENT (Admin)
export const createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET ALL EVENTS (Public)
export const getEvents = async (req, res) => {
  const events = await Event.find().sort({ eventDate: 1 });
  res.json(events);
};

// GET SINGLE EVENT (Public)
export const getEventById = async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }
  res.json(event);
};

// UPDATE EVENT (Admin)
export const updateEvent = async (req, res) => {
  const updatedEvent = await Event.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedEvent);
};

// DELETE EVENT (Admin)
export const deleteEvent = async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ message: "Event deleted successfully" });
};
