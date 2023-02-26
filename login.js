localStorage.setItem('loginvalid', "false"); // save state to local storage



//console.log(process.env.LOGIN_API_LINK);



const form = document.getElementById('login-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // prevent page refresh
  
  const username = document.getElementById('username').value;
 
  const password = document.getElementById('password').value;
  


  var LoginLink= apilink();

  var userdatastoarage= {
    name: '',
    surname: '',
    username: '',
    mentor:'',
    age: '',
    phonenr: '',
    team: '',
    id: '',
    password: '',
    email: '',
    mentorcontact: '',
    contactlink:''


  
    }

  $.getJSON(LoginLink, 
    function (data) {
        
        $.each(data, function (key, value) {
            

            if(value.username==username){
                if(value.password==password){
                    localStorage.setItem('loginvalid',"true"); // save state to local storage

                    userdatastoarage.username=value.username;
                    userdatastoarage.name=value.name;
                    userdatastoarage.surname=value.surname;
                    userdatastoarage.mentor=value.mentor;
                    userdatastoarage.team=value.team;
                    userdatastoarage.age=value.age;
                    userdatastoarage.phonenr=value.phonenr;
                    userdatastoarage.id=value.id;
                    userdatastoarage.password=value.password;
                    userdatastoarage.email=value.email;
                    userdatastoarage.mentorcontact=value.mentorcontact;
                    userdatastoarage.contactlink=value.contactlink;
                     

                  //  console.log(JSON.stringify(userdatastoarage));
                     //localStorage.setItem('storeuser', storeuser); // save user to local storage
                     //localStorage.storeuser = JSON.stringify(userdatastoarage);
           localStorage.setItem('storeuser',JSON.stringify(userdatastoarage)); // save token to local storage
          
           

           
   // window.location.href = '/dashboard.html?userData=' + encodedData;
         window.location.href = './dashboard.html'; // redirect to dashboard
         
                  }else{document.getElementById("errorlogshow").innerHTML="incorrect username or password !";}
        
                  

        }
        
        });
    });
});



/*
 
               
          */