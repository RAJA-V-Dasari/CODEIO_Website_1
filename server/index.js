import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// Named imports for uploads
import { teamUpload, eventUpload, projectUpload } from "./middleware/upload.js";

dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// ====== TEST ROUTE FOR DATABASE ======
app.get("/test-db", (req, res) => {
  res.send("DB working ✅");
});

// ====== TEST ROUTE FOR TEAM IMAGE UPLOAD ======
app.post("/test-upload-team", teamUpload.single("image"), (req, res) => {
  res.json({ url: req.file.path });
});

// ====== TEST ROUTE FOR EVENT IMAGE UPLOAD ======
app.post("/test-upload-event", eventUpload.single("image"), (req, res) => {
  res.json({ url: req.file.path });
});

// ====== TEST ROUTE FOR PROJECT IMAGE UPLOAD ======
app.post("/test-upload-project", projectUpload.single("image"), (req, res) => {
  res.json({ url: req.file.path });
});

// ====== OTHER ROUTES CAN GO HERE ======
// Example: app.use("/api/events", eventRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
