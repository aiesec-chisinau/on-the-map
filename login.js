localStorage.setItem('loginvalid', "false"); // save state to local storage



console.log(process.env.LOGIN_API_LINK);



const form = document.getElementById('login-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // prevent page refresh
  
  const username = document.getElementById('username').value;
 
  const password = document.getElementById('password').value;
  


  var LoginLink=process.env.LOGIN_API_LINK;



  $.getJSON(LoginLink, 
    function (data) {
        
        $.each(data, function (key, value) {
            

            if(value.username==username){
                if(value.password==password){
                    localStorage.setItem('loginvalid', "true"); // save state to local storage
                    localStorage.setItem('username', username); // save username to local storage
          localStorage.setItem('token', data.token); // save token to local storage
          const encodedData = encodeURIComponent(JSON.stringify(username));
   // window.location.href = '/dashboard.html?userData=' + encodedData;
          window.location.href = './dashboard.html'; // redirect to dashboard
         
                  }else{document.getElementById("errorlogshow").innerHTML="incorrect username or password !";}
        
                  

        }
        else{document.getElementById("errorlogshow").innerHTML="incorrect username or password !";}
        });
    });
});



/*
 
               
          */