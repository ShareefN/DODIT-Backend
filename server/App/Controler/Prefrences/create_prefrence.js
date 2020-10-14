const { Prefrences } = require("../../Models/Prefrences.model");
const { errHandler } = require("../../Utils/Errors");

exports.createPrefrence = async (req, res) => {
  let { prefrence } = req.body;

  if (!prefrence) return errHandler(8, res);

  let pref = await Prefrences.findOne({ where: { prefrence } });

  // Check if prefrence already exists
  if (pref) return errHandler(6, res);

  let newPrefrence = await new Prefrences({ ...req.body });

  return res.send({
    success: true,
    newPrefrence
  });
};
