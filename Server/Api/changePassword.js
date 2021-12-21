const express=require("express");
const router=express.Router();
const bycrypt=require("bcrypt");
const userModel=require("../Model/user");


router.post("/",async(req,res)=>{

    const {email,NewPassword}=req.body;

    //generate hashedPassword

    const saltRounds = 10;

    const hashPassword=await bycrypt.hash(NewPassword,saltRounds);


    try{
        const result=await userModel.findOneAndUpdate({email},{$set:{"password":hashPassword}},{new:true});

        if(result){
            res.send({status:"ok"});
        }
    }catch(err){
        res.send({status:'error'})
    }
    
});

module.exports=router;