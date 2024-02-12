import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";
import path from "path";

import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();
const app = express();

// Enable CORS for the signup route

// Allow requests only from http://localhost:3000
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

app.use(express.json());
app.use(cookieParser());
app.listen(5000, () => {
  console.log("Server Running on Port:5000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

// For any route that is not a static file, serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
