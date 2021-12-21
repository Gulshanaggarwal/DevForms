const express=require("express");
const router=express.Router();
const projectModel=require("../Model/userProjects");


router.post("/",async(req,res)=>{

    const {userName}=req.body;

    try{
        let result=await projectModel.findOne({userName});

        res.send({status:"ok",result})
    }catch(err){
        res.send({status:"error",result:[]})
    }
   
})

module.exports=router;