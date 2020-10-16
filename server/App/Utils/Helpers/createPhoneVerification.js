const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

exports.Create_Phone_Verification = async (phone, res) => {
  try {
    let responseVerification = await client.verify
      .services(process.env.TWILIO_SERVICE_SID)
      .verifications.create({ to: `${phone}`, channel: "sms" });
    res.send({
      message: `has been sent 4 digit code to ${phone}`,
      status: 200,
      responseVerification,
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};
