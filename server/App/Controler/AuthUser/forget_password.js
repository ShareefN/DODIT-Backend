const { User } = require("../../Models/User.model");
const { errHandler } = require("../../Utils/Errors");
const async = require("async");
const crypto = require("crypto");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
exports.forgetPassword = async (req, res) => {
  let { identity } = req.body;
  async.waterfall(
    [
      (done) => {
        crypto.randomBytes(20, (err, buf) => {
          let token = buf.toString("hex");
          done(err, token);
        });
      },
      (token, done) => {
        User.findOne(
          {
            $or: [{ email: identity }, { username: identity }],
          },
          function (err, user) {
            if (err) return errHandler(err, res);
            if (!user) return errHandler(1, res);

            User.updateOne(
              { _id: user._id },
              {
                resetPasswordToken: token,
                resetPasswordExpires: Date.now() + 3600000,
              },
              function (err) {
                if (err) return errHandler(err, res);
                done(err, token, user);
              }
            );
          }
        );
      },
      (token, user, done) => {
        const msg = {
          to: user.email, // Change to your recipient
          from: process.env.SENDER_EMAIL, // Change to your verified sender
          subject: "Sending with SendGrid is Fun",
          html: `<strong>user token is ${token}</strong>
            <br>
            <a href="http://localhost:5000/auth/resetPassword/${token}">please follow this link</a>
          `,
        };
        sgMail
          .send(msg)
          .then(() => {
            done(null, "done");
          })
          .catch((error) => {
            console.error("err ", error);
            return errHandler(error, res);
          });
      },
    ],
    (err) => {
      console.log(err);
      if (err) return errHandler(err, res);
      res.send({ success: true, status: 200, message: "check  email" });
    }
  );
};
