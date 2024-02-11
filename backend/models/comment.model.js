import mongoose from "mongoose";

const commertSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      require: true,
    },
    postId: {
      type: String,
      require: true,
    },
    userId: {
      type: String,
      required: true,
    },
    likes: {
      type: Array,
      default: [],
    },
    numberOfLikes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commertSchema);

export default Comment;
