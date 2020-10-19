const mongoose = require("mongoose");

const ThisSchema = new mongoose.Schema(
  {
    thisUrl: { type: String },
    category: { type: String },
  },
  {
    strict: true,
    timestamps: true,
  }
);

exports.ThisSchema = mongoose.model("This", ThisSchema);
