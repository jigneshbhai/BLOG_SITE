import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";
import User from "../models/user.model.js";

export const verifyToken = async(req, res, next) => {
  try {
    const token = req.cookies.access_token;

    if (!token) {
      return next(errorHandler(401, "Unauthorized: No access token provided"));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) {
      return next(errorHandler(401, "Unauthorized: User not found"));
    }

    req.user = user;
    next();
  } catch (error) {
    return next(errorHandler(401, "Unauthorized: Invalid token"));
  }
};
