const express = require("express");
const router = express.Router();
const userModel = require("../Model/user");
const transporter = require("../module/sendmail");
const bycrypt=require("bcrypt");
const RandomOTP = require("../module/RandomOTP");
const RegisterOTPTemplate=require("../templates/RegisterOTP")

let OTP;




router.post("/", async (req, res) => {
  const { email } = req.body;

  const user = await userModel.findOne({ email }).exec();

  if (user) {
    res.send({ status: "ok", user: true });
  } else {
    OTP = RandomOTP();
    const mailOptions = {
      from: process.env.Author_Email,
      to: email,
      subject: "Verify OTP",
      html:RegisterOTPTemplate(OTP),
    };

    transporter.sendMail(mailOptions, (err, result) => {
      if (err) {
        res.send({ status: "error", user: false, sent: false });
      } else {
        res.send({ status: "ok", user: false, sent: true });
      }
    });
  }
});

// verify -otp



router.post("/verifyOTP", async(req, res) => {
  const { name, email, password, userOTP } = req.body;

  if (userOTP === OTP) {
    const saltRounds = 10;

    const hashPassword=await bycrypt.hash(password,saltRounds);

    try {
      const user = await userModel.create({
        name,
        email,
        password:hashPassword,
      });

      res.send({ status: "ok", verified:true });
    } catch (err) {
      res.send({ status: "error", verified:false });
    }
  } else {
    res.send({ status: "ok", verified:false });
  }
});

module.exports = router;
