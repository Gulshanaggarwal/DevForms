const express = require("express");
const router = express.Router();
const userModel = require("../Model/user");
const transporter = require("../module/sendmail");
const RandomOTP = require("../module/RandomOTP");
const bycrypt = require("bcrypt");
const ForgetPassTemplate = require("../templates/forgetPassOTP");

let OTP, copyEmail;

router.post("/", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await userModel.findOne({ email }).exec();

    if (user) {
      OTP = RandomOTP();
      const mailOptions = {
        from: process.env.Author_Email,
        to: email,
        subject: "OTP",
        html: ForgetPassTemplate(OTP),
      };

      transporter.sendMail(mailOptions, (err, result) => {
        if (err) {
          res.send({ status: "error" });
        } else {
          copyEmail = email;
          console.log("1");
          res.send({ status: "ok" });
        }
      });
    } else {
      res.send({ status: "error" });
    }
  } catch (err) {
    res.send({ status: "error" });
  }
});

// verify OTP and change Password

router.post("/verifyOTP", async(req, res) => {
  const { NewPassword, userOTP } = req.body;

  if (userOTP === OTP) {
    const saltRounds = 10;

    const hashPassword = await bycrypt.hash(NewPassword, saltRounds);
    try {
      const result = await userModel.findOneAndUpdate(
        { copyEmail },
        { $set: { password: hashPassword } },
        { new: true }
      );

      if (result) {
        res.send({ status: "ok" });
      } else {
        res.send({ status: "error" });
      }
    } catch (err) {
      res.send({ status: "error" });
    }
  } else {
    res.send({ status: "error" });
  }
});

module.exports = router;

/*


  */
