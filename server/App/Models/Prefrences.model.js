const mongoose = require("mongoose");

const PrefrencesSchema = new mongoose.Schema({
  prefrence: { type: String },
  numberOfSelects: { type: String }
});

exports.Prefrences = mongoose.model("Prefrences", PrefrencesSchema);
