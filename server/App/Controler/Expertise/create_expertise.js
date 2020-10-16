const { Expertise } = require("../../Models/Expertise.model");
const { errHandler } = require("../../Utils/Errors");

exports.createExpertise = async (req, res) => {
  let { expertise } = req.body;

  if (!expertise) return errHandler(11, res);

  let expert = await Expertise.findOne({ expertise });
  if (expert) return errHandler(6, res);

  let newExpertise = await new Expertise({ ...req.body });
  await newExpertise.save();

  return res.send({ success: true, newExpertise });
};
