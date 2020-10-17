const mongoose = require("mongoose");

const ExpertiseSchema = new mongoose.Schema({
  expertise: { type: String, unique: true },
  count: { type: Number, default: 0 },
  show: { type: Boolean, default: true }
});

exports.Expertise = mongoose.model("Experties", ExpertiseSchema);
