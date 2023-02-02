
document.getElementById("hideeldash").style.display='none';
var editbtm=1;
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }


  var userdatastoarage= {
    name: '',
    surname: '',
    username: '',
    mentor:'',
    age: '',
    phonenr: '',
    team: '',
    id: '',
    }
    userdatastoarage=JSON.parse(localStorage.storeuser);
    ;
  function chandedash(){
    document.getElementById("preloadpage").style.display='none',
document.getElementById("hideeldash").style.display='block'
  }
delay(000).then(() => 
chandedash()
);

  

if(JSON.parse(localStorage.loginvalid)==true){
    console.log(JSON.parse(localStorage.storeuser));
    $("#usernamedash").html(JSON.parse(localStorage.storeuser).surname+' '+JSON.parse(localStorage.storeuser).name);
   
    document.getElementById("teamdash").innerHTML='Team :  '+JSON.parse(localStorage.storeuser).team;
    document.getElementById("menthordash").innerHTML='Mentor :  '+JSON.parse(localStorage.storeuser).mentor;
   
    document.getElementById("namedash").innerHTML=JSON.parse(localStorage.storeuser).name;
    document.getElementById("surnamedash").innerHTML=JSON.parse(localStorage.storeuser).surname;
    document.getElementById("phonedash").innerHTML=JSON.parse(localStorage.storeuser).phonenr;
    document.getElementById("agedash").innerHTML=JSON.parse(localStorage.storeuser).age;
    
}
else{
    
    window.location.href = './login.html'; }


    function logoutf(){
        localStorage.loginvalid="false";
        window.location.href = './login.html';
    }

   

    function edtidash(){
        if(editbtm=='1'){
            $("#editbtndash").html('Save');
            document.getElementById("namedashinp").style.display='block';
            document.getElementById("hrnamedash").style.display='block';
            document.getElementById("surnamedashinp").style.display='block';
            document.getElementById("hrsurnamedash").style.display='block';
           
            document.getElementById("namedash").innerHTML='<input type="text" id="fname" name="fname" >';
            var fname = document.getElementById('fname');
           fname.value = JSON.parse(localStorage.storeuser).name;
           document.getElementById("surnamedash").innerHTML='<input type="text" id="fsurname" name="fname" >';
            var fsurname = document.getElementById('fsurname');
           fsurname.value = JSON.parse(localStorage.storeuser).surname;


        document.getElementById("phonedash").innerHTML='<input type="text" id="fphone" name="fname" >';
         var fphone = document.getElementById('fphone');
        fphone.value = JSON.parse(localStorage.storeuser).phonenr;

        document.getElementById("agedash").innerHTML='<input type="text" id="fage" name="fname" >';
        var fage = document.getElementById('fage');
       fage.value = JSON.parse(localStorage.storeuser).age;
        editbtm=2;
    }
    else{
        editbtm=1;
        document.getElementById("namedashinp").style.display='none';
            document.getElementById("hrnamedash").style.display='none';
        document.getElementById("surnamedashinp").style.display='none';
            document.getElementById("hrsurnamedash").style.display='none';
            


            document.getElementById("namedash").innerHTML=document.getElementById("fname").value;
            userdatastoarage.name=document.getElementById('namedash').innerHTML;
            document.getElementById("surnamedash").innerHTML=document.getElementById("fsurname").value;
            userdatastoarage.surname=document.getElementById('surnamedash').innerHTML;
            $("#usernamedash").html(userdatastoarage.surname+' '+userdatastoarage.name);
   
            document.getElementById("phonedash").innerHTML=document.getElementById("fphone").value;
            userdatastoarage.phonenr=document.getElementById('phonedash').innerHTML;
             
            document.getElementById("agedash").innerHTML=document.getElementById("fage").value;
            userdatastoarage.age=document.getElementById('agedash').innerHTML;
            

            localStorage.setItem('storeuser',JSON.stringify(userdatastoarage)); // save token to local storage
          
        
        $("#editbtndash").html('Edit');

    }
    }



var qrcodevarextend=0;

    function qrextenddash(){
        if (qrcodevarextend==0){


            $(".qr-code").attr("src", "https://chart.googleapis.com/chart?cht=qr&chl=" + JSON.parse(localStorage.storeuser).id + "&chs=160x160&chld=L|0");
            
            document.getElementById("qrcodedivdash").style.height='250px';
        img = document.getElementById('qrcodearrowflipdash');
        img.className = "rotate" + 90;
        document.getElementById("qrdashhide").style.display='block';
        qrcodevarextend=1;
        }
        else{
            document.getElementById("qrcodedivdash").style.height='auto';
            document.getElementById("qrdashhide").style.display='none';
            qrcodevarextend=0;
        }
    }



   
   