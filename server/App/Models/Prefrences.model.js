const mongoose = require("mongoose");

const PrefrencesSchema = new mongoose.Schema({
  prefrence: { type: String, unique: true },
  count: { type: Number, default: 0 }
});

exports.Prefrences = mongoose.model("Prefrences", PrefrencesSchema);
