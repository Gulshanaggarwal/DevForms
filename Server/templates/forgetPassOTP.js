const ForgetPassTemplate=function Template(OTP){

    return(
        `
        <div>
        <p>You have requested to set a New Password. <span style="font-weight:bold;font-size:1rem">${OTP}</span> is your one time password(OTP)  to set a New Password.</p>
        <p style="padding-top:5px;">Thank you.</p>
        </div>
        `
    )

}

module.exports=ForgetPassTemplate;