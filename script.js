


document.getElementById("hidel").style.display='none';
if(JSON.parse(localStorage.loginvalid)==true){
document.getElementById("logindashiddiv").innerHTML='Dash →';
document.getElementById("logindashiddiv").setAttribute('href',"dashboard.html");
}
else document.getElementById("logindashiddiv").innerHTML='Sign In →';
