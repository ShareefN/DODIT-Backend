const mongoose = require("mongoose");

const VoteSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    this: { type: Boolean },
    that: { type: Boolean },
    skip: { type: Boolean },
  },
  {
    strict: true,
    timestamps: true,
  }
);

exports.VoteSchema = mongoose.model("Vote", VoteSchema);
