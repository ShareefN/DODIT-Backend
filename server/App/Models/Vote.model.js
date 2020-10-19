const mongoose = require("mongoose");

const VoteSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    this: { type: Boolean, default: false },
    that: { type: Boolean, default: false },
    skip: { type: Boolean, default: false }
  },
  {
    strict: true,
    timestamps: true
  }
);

exports.VoteSchema = mongoose.model("Vote", VoteSchema);
