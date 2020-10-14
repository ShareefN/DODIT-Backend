const { User } = require("../../Models/User.model");
const { errHandler } = require("../../Utils/Errors");
const { createPhoneVerification } = require("../../Utils/Helpers");

exports.loginFromPhone = async (req, res) => {
  let { phone } = req.body;
  if (!phone) return errHandler(7, res);
  try {
    let userPhone = await User.findOne({ phone });
    if (!userPhone) return errHandler(9, res); // if phone does not exist!
    return createPhoneVerification(phone, res);
  } catch (err) {
    console.log(err);
    return errHandler(err, res);
  }
};
