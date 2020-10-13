const { fields } = require("./requiredFields");
const { messages } = require("./messages");
exports.errHandler = (err, res) => {
  try {
    let message, status;
    // handle general errors
    if (typeof err == "number") {
      message = messages[err].txt;
      status = messages[err].status;
      return res.send({ success: false, status, message });
    }
    // hadnle database required fields errors
    if (err.errors) {
      for (e in fields) {
        if (err.errors[fields[e]])
          return res.send({
            success: false,
            status: 400,
            message: `${fields[e]} is required`,
          });
      }
    }
    // handle dublicated in database
    if (err.keyPattern && err.keyValue)
      return res.send({
        success: false,
        status: 409,
        message: `${JSON.stringify(err.keyValue)} is already exists`,
      });

    if (err.kind === "ObjectId") {
      return res.send({
        success: false,
        status: 400,
        message: `Check ${err.value} at ${err.path}`,
      });
    }

    message = messages[503].txt;
    status = messages[503].status;
    return res.send({ success: false, status, message });
  } catch (err) {
    console.log(err);
    message = messages[503].txt;
    status = messages[503].status;
    return res.send({ success: false, status, message });
  }
};
