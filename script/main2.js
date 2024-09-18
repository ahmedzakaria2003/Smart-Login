var Login = document.getElementById('login');
var signinEmail = document.getElementById('signinEmail');
var signinPassword = document.getElementById('signinPassword');
var Alert = document.getElementById('AlertLogin')
var allUsers = [];
if(localStorage.getItem('allUsers')!=null){
    allUsers = JSON.parse(localStorage.getItem('allUsers'));
}
console.log(allUsers);
Login.addEventListener('submit',function(e){
    e.preventDefault();
    login();

})

function login(){
    var userData={
    email:signinEmail.value,
    password:signinPassword.value
    }
    console.log(userData);
    if(isLoginValid(userData)==true){
        console.log(' you loged in');
        Alert.classList.replace('d-block','d-none');
        window.location.href = "index (3).html"
    }else{
        console.log('user not found');
        Alert.classList.replace('d-none','d-block')

    }
}

function isLoginValid(userData){
    for(var i =0 ;i<allUsers.length;i++){
        if(allUsers[i].email.toLowerCase()==userData.email.toLowerCase()&& allUsers[i].password==userData.password
        ){

   console.log('user found');
   localStorage.setItem('userName',allUsers[i].name)
   return true;

    
     
    }
}}