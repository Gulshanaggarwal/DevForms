const RandomOTP=function GenerateRandomOTP() {
  let min = 202345;
  let max = 999998;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


module.exports=RandomOTP;
