import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import eventRoutes from "./routes/eventRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

connectDB(); // Mongoose connection

app.use("/api/events", eventRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
