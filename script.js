function seterror(id,error){
    element = document.getElementById(id);
    element.getElementsByClassName("formerror")[0].innerHTML = error;
}
function clearerrors(){

  errors = document.getElementsByClassName("formerror")
  for (const items of errors) {
        items.innerHTML="";
  }

}
function validate(){
    var name = document.forms['myform']["fname"].value;
    // console.log(name);
    // return false;
    clearerrors();
    
    if (name.length=="") {
        seterror("name","cannot be empty ");
        return false;
    }
    if (name.length<=6) {
        seterror("name","Too short username");
        return false;
    }

    // var regx = [(a-z)(A-Z)]
    // if(regx.test(name)){
    //     seterror("name","valid username");
    //     return false;
    // }
    
    var email = document.forms['myform']["femail"].value;
    
    if (email.length>30) {
        seterror("email","email too long ");
        return false;
    }
    var phone = document.forms['myform']["fphone"].value;
    
    if (phone.length!=10) {
        seterror("phone","email too long ");
        return false;
    }
    var password = document.forms['myform']["fpassword"].value;
    
    if (password.length<6) {
        seterror("password","password too short ");
        return false;
    }
    var cpassword = document.forms['myform']["fcpassword"].value;
    
    if (cpassword!=password) {
        seterror("cpassword","password incorrect ");
        return false;
    }
   
}