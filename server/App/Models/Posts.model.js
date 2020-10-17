const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: { type: Number },
    category: { type: String },
    this: { type: Number, default: 0 },
    that: { type: Number, default: 0 },
    numberOfViews: { type: Number, default: 0 },
    thisUrl: { type: String },
    thatUrl: { type: String },
    skippedCount: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    coordinates: {},
    show: { type: Boolean, default: true },
    inappropriateRates: { type: Number, default: 0 }
  },
  {
    strict: true,
    timestamps: true
  }
);

exports.Post = mongoose.model("Post", PostSchema);
