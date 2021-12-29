const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const port = process.env.PORT || 9000;

require("dotenv").config(); 

// connect to database;
const dbUrl = process.env.MONGODB_URL;
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const FormUrlRequest = require("./Api/FormUrlRequest")
const login = require("./Api/login.js");
const register = require("./Api/register.js");
const verifytoken = require("./Api/verifytoken.js");
const createform = require("./Api/createform.js");
const sendInitialData = require("./Api/sendInitialData");
const updateFormName = require("./Api/updateFormName");
const updateTargetEmail = require("./Api/updateTargetEmail");
const updateFormEnableSetting = require("./Api/updateFormEnableSetting");
const DeleteForm = require("./Api/DeleteForm");
const changePassword = require("./Api/changePassword");
const ForgetPassword = require("./Api/forgetPassword");

app.use(cors());
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));
app.set("views","./views");
app.use(express.static("static"));
app.set("view engine", "pug");

app.use("/login", login);
app.use("/register", register);
app.use("/forgetPassword", ForgetPassword);
app.use("/verify-token", verifytoken);
app.use("/create-form", createform);
app.use("/send-initialData", sendInitialData);
app.use("/update-formName", updateFormName);
app.use("/update-targetEmail", updateTargetEmail);
app.use("/update-EnableSetting", updateFormEnableSetting);
app.use("/DeleteForm", DeleteForm);
app.use("/changePassword", changePassword);
app.use("/", FormUrlRequest);


app.listen(port, () => {
  console.log("Express Server Ready");
});
