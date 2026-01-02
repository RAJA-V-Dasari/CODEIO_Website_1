import TeamMember from "../models/TeamMember.js";

// CREATE
export const createMember = async (req, res) => {
  const member = await TeamMember.create(req.body);
  res.status(201).json(member);
};

// READ
export const getMembers = async (req, res) => {
  const members = await TeamMember.find();
  res.json(members);
};

// UPDATE
export const updateMember = async (req, res) => {
  const updated = await TeamMember.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

// DELETE
export const deleteMember = async (req, res) => {
  await TeamMember.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
};
