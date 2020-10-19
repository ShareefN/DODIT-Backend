const mongoose = require("mongoose");

const ThisSchema = new mongoose.Schema(
  {
    thisUrl: { type: String },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Prefrences" }
  },
  {
    strict: true,
    timestamps: true
  }
);

exports.ThisSchema = mongoose.model("This", ThisSchema);
