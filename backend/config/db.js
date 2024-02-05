// Load environment variables from .env file
import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URL;
    await mongoose.connect(uri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit with a failure status
  }
};

export default connectDB;
