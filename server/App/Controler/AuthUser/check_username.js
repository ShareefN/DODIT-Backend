const { User } = require("../../Models/User.model");
const { errHandler } = require("../../Utils/Errors");

exports.checkUsername = async (req, res) => {
  const { username } = req.body;

  if (!username) return errHandler(11, res);

  const isExsits = await User.findOne({ username });

  if (isExsits) return errHandler(6, res);

  return res.send({ status: 200, success: true });
};
