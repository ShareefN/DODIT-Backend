const { Prefrences } = require("../../Models/Prefrences.model");
const { errHandler } = require("../../Utils/Errors");

exports.deletePrefrence = async (req, res) => {
  let { id } = req.params;

  const deletedPrefrence = await Prefrences.deleteOne({ _id: id });

  if (!deletedPrefrence) return errHandler(10, res);

  return res.send({ success: true });
};
