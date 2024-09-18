var signUpForm = document.getElementById("registern");
var signUpName = document.getElementById("signUpName");
var nameAlert = document.getElementById("nameAlert");
 var signUpEmail = document.getElementById("signUpEmail");
 var signUpPassword =document.getElementById("signUpPassword");
 var passwordAlert = document.getElementById("passwordAlert");
 var successAlert = document.getElementById("successAlert");
 var existAlert = document.getElementById('existAlert');
  var allUsers =[];
 if(localStorage.getItem('allUsers')!=null){
    allUsers = JSON.parse(localStorage.getItem('allUsers'));
 }
signUpForm.addEventListener('submit',function(e){
    e.preventDefault();

if(checkAllInputsAreTrrue()){
    addUser();
}

});

function validateInput(Regex,element,AlertEl){
    var pattern=Regex;
if(pattern.test(element.value)){
    AlertEl.classList.add('d-none');
    element.classList.add('is-valid');
    element.classList.remove('is-invalid');
    return true;
}else{
    AlertEl.classList.remove('d-none');
    element.classList.remove('is-valid');
    element.classList.add('is-invalid');

    return false;
}

}

function checkAllInputsAreTrrue(){
    if(  validateInput(/^[a-zA-Z0-9$_]{2,}$/,signUpName,nameAlert)==true&&
    validateInput(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        ,signUpEmail,emailAlert)==true&&
validateInput(/^[a-zA-Z0-9$_]{5,}$/, signUpPassword,passwordAlert
)==true
){ console.log("valid");
    return true;
}else{
    
    console.log("invalid");
    return false;
}
}

function addUser(){
var newUser ={
    name:signUpName.value,
    email:signUpEmail.value,
    password:signUpPassword.value
}

if( userExist(newUser)){
    console.log('user existed');

}else{
allUsers.push(newUser);
localStorage.setItem('allUsers',JSON.stringify(allUsers));

}
}
function userExist(newUser){
for(var i =0; i<allUsers.length;i++){
     if (allUsers[i].email.toLowerCase() == newUser.email.toLowerCase()){
        console.log('email is exists');
        existAlert.classList.replace('d-none','d-block')
        successAlert.classList.add('d-none')


     
     }else{
      
        existAlert.classList.replace('d-block','d-none')
        successAlert.classList.remove('d-none')


     }

}
}