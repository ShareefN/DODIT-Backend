const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

exports.Check_Phone_Verification = async (phone, code, res) => {
  try {
    let responseCodeVerification = await client.verify
      .services(process.env.TWILIO_SERVICE_SID)
      .verificationChecks.create({ to: `${phone}`, code });
    let isValid = responseCodeVerification.valid;
    return res.send({
      message: isValid
        ? `phone(${responseCodeVerification.to}) is valid`
        : "Wrong phone number or code",
      status: isValid ? 200 : 400,
      channel: responseCodeVerification.channel,
      isValid,
    });
  } catch (err) {
    console.log(err);
    res.send({ err });
  }
};
