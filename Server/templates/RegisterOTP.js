const RegisterOTPTemplate=function Template(OTP){

    return(
        `
        <div>
        <p><span style="font-weight:bold;font-size:1rem">${OTP}</span> is your one time password(OTP) to register at DEVFORMS.</p>
        <p style="padding-top:5px;">Thank you.</p>
        </div>
        `
    )

}

module.exports=RegisterOTPTemplate