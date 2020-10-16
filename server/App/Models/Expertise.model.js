const mongoose = require("mongoose");

const ExpertiseSchema = new mongoose.Schema({
  expertise: { type: String, unique: true },
  count: { type: Number, default: 0 }
});

exports.Expertise = mongoose.model("Experties", ExpertiseSchema);
