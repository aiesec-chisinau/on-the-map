const form = document.getElementById('login-form');
localStorage.setItem('qrlogin',"false"); 
form.addEventListener('submit', async (e) => {
  e.preventDefault(); // prevent page refresh
  
  
 
  const password = document.getElementById('password').value;
  
if (qrpass()==password){
  localStorage.setItem('qrlogin',"true"); 
  window.location.href = './qrscanner.html';
}
  else {
    document.getElementById("errorlogshow").innerHTML="incorrect username or password !";}
        
  

 
});