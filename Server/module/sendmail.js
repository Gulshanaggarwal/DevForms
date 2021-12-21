const nodeMailer = require("nodemailer");

const transporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.Author_Email,
    pass: process.env.E_Pass,
  },
});

module.exports=transporter;
