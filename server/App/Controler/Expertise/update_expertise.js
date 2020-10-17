const { Expertise } = require("../../Models/Expertise.model");
const { errHandler } = require("../../Utils/Errors");

exports.updateExpertise = async (req, res) => {
  const { id } = req.params;
  const { expertise } = req.body;

  if (!id) return errHandler(10, res);

  const isFound = await Expertise.findOne({ _id: id });

  if (!isFound) return errHandler(10, res);

  const isExsist = await Expertise.findOne({ expertise });

  if (isExsist) return errHandler(6, res);

  const newExpertise = await Expertise.updateOne({ _id: id }, { ...req.body });
  return res.send({ sucess: true, newExpertise });
};
