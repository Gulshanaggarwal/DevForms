const express = require("express");
const router = express.Router();
const fetch = require("isomorphic-fetch");
const projectModel = require("../Model/userProjects");
const transporter = require("../module/sendmail");
const pug = require("pug");


router.post("/:userId/:formId",async(req,res)=>{
  let flag=0,incomingData;   // if flag remains 0 then form not found    // if flag=1 project found but not enabled // if flag=2 project found && enabled
                 
  const {userId,formId}=req.params;

  // Verify user Id and Form Id

  try {
    const user= await projectModel.findOne({_id:userId}).exec();

    if(user){
      const {projects}=user;

      projects.forEach((ele)=>{
        if(ele._id.toString()===formId){
          flag=1;
        }
        if(ele._id.toString()===formId && ele.isEnabled){
          flag=2;
        }
      })


      if(flag===0){
        res.send("Invalid request! Not any form registerd");
      }
      else if(flag==1){
        res.send("Form Disabled please enable first");
      }
      else if(flag==2){
        res.send("You are eligible to send data");
      }

    }
    else{
      res.send("Invalid Request!");
    }

    

   
  } catch (error) {
    res.send("Server error try again");
  }



})

module.exports = router;


