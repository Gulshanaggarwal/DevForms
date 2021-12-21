const express=require("express");
const router=express.Router();
const projectModel=require("../Model/userProjects")


router.post("/",async(req,res)=>{

    const {userName,FormId}=req.body;

    try{
        await projectModel.updateOne({userName},{$pull:{"projects":{"_id":FormId}}});
        res.send({status:"ok"})


    }catch(err){
        res.send({status:"error"})
    }

    

})

module.exports=router;