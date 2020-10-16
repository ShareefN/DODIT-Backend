const { Expertise } = require("../../Models/Expertise.model");
const { errHandler } = require("../../Utils/Errors");

exports.deleteExpertise = async (req, res) => {
  let { id } = req.params;

  const deleteExpertise = await Expertise.findOne({ _id: id });

  if (!deleteExpertise) return errHandler(10, res);

  return res.send({ success: true });
};
