const { User } = require("../../Models/User.model");
const { errHandler } = require("../../Utils/Errors");
const {
  Create_Phone_Verification,
} = require("../../Utils/Helpers/createPhoneVerification");

exports.userPhoneSignUp = async (req, res) => {
  let { phone } = req.body;
  if (!phone) return errHandler(7, res);
  try {
    let userPhone = await User.findOne({ phone });
    if (userPhone) return errHandler(6, res); // if phone is already exist!
    return Create_Phone_Verification(phone, res);
  } catch (err) {
    console.log(err);
    return errHandler(err, res);
  }
};
