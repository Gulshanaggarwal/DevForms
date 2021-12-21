const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const userModel = require("../Model/user");
const bycrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email }).exec();
  if (user) {
    const hashedPass = user.password;

    const match = await bycrypt.compare(password, hashedPass);

    if (match) {
      const token = jwt.sign(
        { name: user.name, email: user.email },
        process.env.JWT_SECRET
      );
      res.send({ status: "ok", token });
    } else {
      res.send({ status: "ok", token: null });
    }
  } else {
    res.send({ status: "ok", token: null });
  }

  /*
    if(user){
        const token=jwt.sign({name:user.name,email:user.email},process.env.JWT_SECRET)
        res.send({status:"ok",token})
    }
    
    
    */
});

module.exports = router;
