const mongoose = require("mongoose");

const ThatSchema = new mongoose.Schema(
  {
    thatUrl: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Prefrences" },
  },
  {
    strict: true,
    timestamps: true,
  }
);

exports.ThatSchema = mongoose.model("That", ThatSchema);
