const express=require("express");
const router=express.Router();
const projectModel=require("../Model/userProjects")


router.post("/",async(req,res)=>{

    const {userName,formName,targetEmail}=req.body;
    const projects={
        formName,
        targetEmail,
    }


    try{
        const result=await projectModel.create({
            userName,
            projects
        })
        res.send({status:"ok",result})
    }catch(err){


        const result=await projectModel.findOneAndUpdate({userName},{$push:{"projects":projects}},{new:true});
        res.send({status:"ok",result});

    }

})

module.exports=router;