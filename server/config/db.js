// db.js
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config(); // Load .env

const uri = process.env.MONGO_URI;

if (!uri) {
  console.error("MONGO_URI is not set in .env");
  process.exit(1);
}

// Create a new MongoClient
const client = new MongoClient(uri); // No options needed for v5+

let db;

export const connectDB = async () => {
  try {
    await client.connect(); // Connect to MongoDB Atlas
    db = client.db(); // Default DB from URI
    console.log("Connected successfully to MongoDB Atlas");
    return db;
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

export const getDB = () => {
  if (!db) {
    throw new Error("Database not connected yet. Call connectDB() first.");
  }
  return db;
};
