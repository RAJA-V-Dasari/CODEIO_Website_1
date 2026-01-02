import express from "express";
import dotenv from "dotenv";
import { connectDB, getDB } from "./config/db.js";

dotenv.config();

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Test route
app.get("/test-db", async (req, res) => {
  try {
    const db = getDB();
    const collections = await db.collections();
    res.json({ message: "DB connected ", collections: collections.map(c => c.collectionName) });
  } catch (err) {
    res.status(500).json({ message: "DB error ", error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} `));
