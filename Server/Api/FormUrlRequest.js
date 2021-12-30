const express = require("express");
const router = express.Router();
const fetch = require("isomorphic-fetch");
const projectModel = require("../Model/userProjects");
const transporter = require("../module/sendmail");
const pug = require("pug");
const path=require("path");



router.post("/:userId/:formId", async (req, res) => {
  let flag = 0, formData, project_found;   // if flag remains 0 then form not found    // if flag=1 project found but not enabled // if flag=2 project found && enabled
  const reqOrigin=req.headers["origin"];

  const { userId, formId } = req.params;

  // Verify user Id and Form Id

  try {
    const user = await projectModel.findOne({ _id: userId }).exec();
    console.log("user",user);

    if (user) {
      const { projects } = user;

      projects.forEach((ele) => {
        if (ele._id.toString() === formId) {
          flag = 1;
        }
        if (ele._id.toString() === formId && ele.isEnabled) {
          project_found = ele;
          flag = 2;
        }
      })


      if (flag === 0) {
        res.send("Invalid request! Not any form registerd");
      }
      else if (flag == 1) {
        res.send("Form Disabled please enable first");
      }
      else if (flag == 2) {

        const { targetEmail } = project_found;

        
        const sendDataTemplate= pug.compileFile(path.join(__dirname,"/templates/FormData.pug"));
        // set mail
        const mailOptions = {
          from: process.env.Author_Email,
          to: targetEmail,
          subject: "Form Submission",
          html:sendDataTemplate({
            data:req.body
          }),
        };


        //send mail

        transporter.sendMail(mailOptions,async(err)=>{
          if(err){
            res.send("Server Error!")
          }
          else{

            // increase the count in db if email successfull
            try {
              const {totalSubmissions}=project_found;

              await projectModel.findOneAndUpdate({_id:userId},{$set:{"projects.$[elem].totalSubmissions":totalSubmissions+1}},{arrayFilters: [{ "elem._id": formId }] });
              res.render("SuccessResponse",{source:reqOrigin});
              
            } catch (error) {
              res.send("Server Error!");
            }
          }
        })



      }

    }
    else {
      res.send("Invalid Request!");
    }




  } catch (error) {
    console.log("err",error);
    res.send("Server error try again");
  }



})

module.exports = router;


