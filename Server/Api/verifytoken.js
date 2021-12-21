const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  console.log("request arrived");
  const token = req.headers["x-access-token"];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded) {
      res.send({ status: "ok", user: decoded });
    } else {
      res.send({ status: "error", user: false });
    }
  } catch (err) {
    res.send({ status: "error", user: false });
  }
});
module.exports = router;
