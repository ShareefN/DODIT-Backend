const { User } = require("../../Models/User.model");
const { errHandler } = require("../../Utils/Errors");

exports.checkEmail = async (req, res) => {
  const { email } = req.body;

  if (!email) return errHandler(11, res);

  const isExsits = await User.findOne({ email });

  if (isExsits) return errHandler(6, res);

  return res.send({ status: 200, success: true });
};
