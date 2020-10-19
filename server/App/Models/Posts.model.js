const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    this: { type: mongoose.Schema.Types.ObjectId, ref: "This" },
    that: { type: mongoose.Schema.Types.ObjectId, ref: "That" },
    thatVotes: { type: Number, default: 0 },
    thisVotes: { type: Number, default: 0 },
    avgTime: { type: Number },
    rate: { type: String },
    isReported: { type: Boolean },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    experties: { type: mongoose.Schema.Types.ObjectId, ref: "Experties" },
    numberOfViews: { type: Number, default: 0 },
    skippedCount: { type: Number, default: 0 },
    locations: [
      {
        longitude: { type: Number },
        latitude: { type: Number },
        type: { type: Number },
      },
    ],
    hide_username: { type: Boolean, default: false },
    hide_user_image: { type: Boolean, default: false },
    show: { type: Boolean, default: true },
    inappropriateRates: { type: Number, default: 0 },
  },
  {
    strict: true,
    timestamps: true,
  }
);

exports.Post = mongoose.model("Post", PostSchema);
