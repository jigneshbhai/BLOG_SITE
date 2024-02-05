import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

// Enable CORS for the signup route
app.options("/api/auth/signup", (req, res) => {
  res.sendStatus(204);
});

// Allow requests only from http://localhost:3000
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}));

app.use(express.json());
app.listen(5000, () => {
  console.log("Server Running on Port:5000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
