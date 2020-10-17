const { Expertise } = require("../../Models/Expertise.model");

exports.getExpertise = async (req, res) => {
  const exper = await Expertise.find({ show: true });
  return res.send(exper);
};
