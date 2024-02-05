import express from "express";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import path from "path";
import connectDB from "./config/db.js";


connectDB();

const app = express();
app.use(express.json());
app.listen(5000, () => {
  console.log("Server Running on Port:5000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
