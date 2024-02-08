import express from "express";
import {
  SignOut,
  deleteUser,
  test,
  updateUser,
} from "../controllers/user.contoller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, deleteUser);
router.post("/signout", SignOut);

export default router;
