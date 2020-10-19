const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  },
  {
    strict: true,
    timestamps: true,
  }
);

exports.ReportSchema = mongoose.model("Report", ReportSchema);
