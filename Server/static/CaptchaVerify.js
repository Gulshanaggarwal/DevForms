let button;
window.addEventListener("load",()=>{
    button=document.querySelector("button");
})

  function recaptcha_callback() {
    let response = grecaptcha.getResponse();

    if(response){
      button.disabled=false;
    }


    
  }