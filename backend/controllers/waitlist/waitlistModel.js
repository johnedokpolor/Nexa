import mongoose from "mongoose";

const waitlistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    organisation: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
export const Waitlist = mongoose.model("Waitlist", waitlistSchema);
