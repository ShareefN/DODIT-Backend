const { Prefrences } = require("../../Models/Prefrences.model");
const { errHandler } = require("../../Utils/Errors");

exports.updatePrefernce = async (req, res) => {
  let { id } = req.params;
  let { prefrence } = req.body;

  if (!id) return errHandler(10, res);

  const checkPrefrence = await Prefrences.findOne({ prefrence });
  if (checkPrefrence) return errHandler(6, res);

  const newPrefrence = await Prefrences.updateOne({ _id: id }, { prefrence });
  return res.send({ sucess: true, newPrefrence });
};
