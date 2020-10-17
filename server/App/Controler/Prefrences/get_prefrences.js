const { Prefrences } = require("../../Models/Prefrences.model");

exports.getPrefrences = async (req, res) => {
  const prefs = await Prefrences.find({ show: true });

  return res.send(prefs);
};
