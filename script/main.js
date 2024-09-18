var userName = localStorage.getItem("userName");
var logOut = document.getElementById('lgbtn')
console.log(userName);
userNameWrapper.innerHTML = userName;
logOut.addEventListener('click', function(){
    localStorage.removeItem('userName')
})