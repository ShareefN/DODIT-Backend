const { Prefrences } = require("../../Models/Prefrences.model");
const { errHandler } = require("../../Utils/Errors");

exports.createPrefrence = async (req, res) => {
  let { prefrence } = req.body;

  if (!prefrence) return errHandler(8, res);

  let pref = await Prefrences.findOne({ prefrence });

  // Check if prefrence already exists
  if (pref) return errHandler(6, res);

  let newPrefrence = await new Prefrences({ ...req.body });
  await newPrefrence.save();

  return res.send({
    success: true,
    newPrefrence
  });
};
