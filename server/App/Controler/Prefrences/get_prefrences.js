const { Prefrences } = require("../../Models/Prefrences.model");

exports.getPrefrences = async (req, res) => {
  const prefs = await Prefrences.find();

  return res.send(prefs);
};
