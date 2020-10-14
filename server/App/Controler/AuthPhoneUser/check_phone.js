const { User } = require("../../Models/User.model");
const { errHandler } = require("../../Utils/Errors");
const { createPhoneVerification } = require("../../Utils/Helpers");

exports.checkPhone = async (req, res) => {
  let { phone } = req.body;
  if (!phone) return errHandler(7, res);
  try {
    let userPhone = await User.findOne({ phone });
    if (userPhone) return errHandler(6, res); // if phone is already exist!
    return createPhoneVerification(phone, res);
  } catch (err) {
    console.log(err);
    return errHandler(err, res);
  }
};
