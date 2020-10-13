const { User } = require("../../Models/User.model");
const { errHandler } = require("../../Utils/Errors");
exports.checkIdentity = async (req, res) => {
  const { identity } = req.body;
  try {
    if (!identity) return errHandler(4, res);

    let user = await User.findOne({
      $or: [{ email: identity }, { username: identity }],
    });
    if (!user) {
      return errHandler(1, res);
    }
    return res.send({
      success: true,
      status: 200,
    });
  } catch (err) {
    return errHandler(err, res);
  }
};
