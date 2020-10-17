const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: { type: Number },
    category: { type: String },
    percentages: {
      this: { type: Number, default: 0 },
      that: { type: Number, default: 0 }
    },
    urls: {
      this: { type: String },
      that: { type: String }
    },
    numberOfViews: { type: Number, default: 0 },
    skippedCount: { type: Number, default: 0 },
    postRate: { type: Number, default: 0 },
    coordinates: {
      longitude: { type: Number, default: 0 },
      latitude: { type: String, default: 0 }
    },
    show: { type: Boolean, default: true },
    inappropriateRates: { type: Number, default: 0 }
  },
  {
    strict: true,
    timestamps: true
  }
);

exports.Post = mongoose.model("Post", PostSchema);
