const mongoose = require("mongoose");

const ThatSchema = new mongoose.Schema(
  {
    thatUrl: { type: String },
    category: { type: String },
  },
  {
    strict: true,
    timestamps: true,
  }
);

exports.ThatSchema = mongoose.model("That", ThatSchema);
