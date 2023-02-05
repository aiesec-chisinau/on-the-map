
document.getElementById("hideeldash").style.display='none';
var editbtm=1;

var apivariablelink= apilink();
console.log(JSON.stringify(apilink()));
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
    password: ''
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
   
    document.getElementById("teamdash").innerHTML='Team :  '+'secret';//JSON.parse(localStorage.storeuser).team;
    document.getElementById("menthordash").innerHTML='Mentor :  '+'secret';//JSON.parse(localStorage.storeuser).mentor;
   
    document.getElementById("namedash").innerHTML=JSON.parse(localStorage.storeuser).name;
    document.getElementById("surnamedash").innerHTML=JSON.parse(localStorage.storeuser).surname;
    document.getElementById("passdash").innerHTML=JSON.parse(localStorage.storeuser).password;
    document.getElementById("phonedash").innerHTML=JSON.parse(localStorage.storeuser).phonenr;
    document.getElementById("agedash").innerHTML=JSON.parse(localStorage.storeuser).age;
    document.getElementById("emaildash").innerHTML=JSON.parse(localStorage.storeuser).email;
    document.getElementById("socialdash").innerHTML='<a>'+JSON.parse(localStorage.storeuser).contactlink+'</a>';
    
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
            document.getElementById("passdashinp").style.display='block';
            document.getElementById("hrpassdash").style.display='block';
           
            document.getElementById("namedash").innerHTML='<input type="text" id="fname" name="fname" >';
            var fname = document.getElementById('fname');
           fname.value = JSON.parse(localStorage.storeuser).name;
           document.getElementById("surnamedash").innerHTML='<input type="text" id="fsurname" name="fname" >';
            var fsurname = document.getElementById('fsurname');
           fsurname.value = JSON.parse(localStorage.storeuser).surname;
           document.getElementById("passdash").innerHTML='<input type="text" id="fpass" name="fname" >';
            var fpass = document.getElementById('fpass');
           fpass.value = JSON.parse(localStorage.storeuser).password;


        document.getElementById("phonedash").innerHTML='<input type="text" id="fphone" name="fname" >';
         var fphone = document.getElementById('fphone');
        fphone.value = JSON.parse(localStorage.storeuser).phonenr;

        document.getElementById("agedash").innerHTML='<input type="text" id="fage" name="fname" >';
        var fage = document.getElementById('fage');
       fage.value = JSON.parse(localStorage.storeuser).age;

       document.getElementById("emaildash").innerHTML='<input type="text" id="femail" name="fname" >';
        var femail = document.getElementById('femail');
       femail.value = JSON.parse(localStorage.storeuser).email;

       document.getElementById("socialdash").innerHTML='<input type="text" id="fsocial" name="fname" >';
        var fsocial = document.getElementById('fsocial');
       fsocial.value = JSON.parse(localStorage.storeuser).contactlink;
        editbtm=2;
    }
    else{
        editbtm=1;
        document.getElementById("namedashinp").style.display='none';
            document.getElementById("hrnamedash").style.display='none';
        document.getElementById("surnamedashinp").style.display='none';
            document.getElementById("hrsurnamedash").style.display='none';
        document.getElementById("passdashinp").style.display='none';
            document.getElementById("hrpassdash").style.display='none';
            


            document.getElementById("namedash").innerHTML=document.getElementById("fname").value;
            userdatastoarage.name=document.getElementById('namedash').innerHTML;
            document.getElementById("surnamedash").innerHTML=document.getElementById("fsurname").value;
            userdatastoarage.surname=document.getElementById('surnamedash').innerHTML;
            $("#usernamedash").html(userdatastoarage.surname+' '+userdatastoarage.name);
   
            document.getElementById("passdash").innerHTML=document.getElementById("fpass").value;
            userdatastoarage.password=document.getElementById('passdash').innerHTML;
            

            document.getElementById("phonedash").innerHTML=document.getElementById("fphone").value;
            userdatastoarage.phonenr=document.getElementById('phonedash').innerHTML;
             
            document.getElementById("agedash").innerHTML=document.getElementById("fage").value;
            userdatastoarage.age=document.getElementById('agedash').innerHTML;

            document.getElementById("emaildash").innerHTML=document.getElementById("femail").value;
            userdatastoarage.email=document.getElementById('emaildash').innerHTML;

            document.getElementById("socialdash").innerHTML='<a>'+document.getElementById("fsocial").value+'</a>';
            userdatastoarage.contactlink=document.getElementById('socialdash').innerHTML;
            

            localStorage.setItem('storeuser',JSON.stringify(userdatastoarage)); // save token to local storage
          
            var axioschandel =apivariablelink+"/"+userdatastoarage.id;
            console.log(axioschandel);
            axios.put(axioschandel, userdatastoarage);
        $("#editbtndash").html('Edit');

    }
    }



var qrcodevarextend=0;

    function qrextenddash(){
        if (qrcodevarextend==0){


            $(".qr-code").attr("src", "https://chart.googleapis.com/chart?cht=qr&chl=" + JSON.parse(localStorage.storeuser).id + "&chs=160x160&chld=L|0");
            
            document.getElementById("qrcodedivdash").style.height='250px';
        document.getElementById('qrcodearrowflipdash').style.transform = 'rotate(180deg)'
        
        document.getElementById("qrdashhide").style.display='block';
        qrcodevarextend=1;
        }
        else{
            document.getElementById('qrcodearrowflipdash').style.transform = 'rotate(0deg)'
            document.getElementById("qrcodedivdash").style.height='auto';
            document.getElementById("qrdashhide").style.display='none';
            qrcodevarextend=0;
        }
    }


   
    var a1=0;
    function a(){
        if (a1==0){
            document.getElementById('1a').style.transform = 'rotate(180deg)';
            document.getElementById("1b").style.display='block';
            a1=1;
        }
        else{
            document.getElementById('1a').style.transform = 'rotate(0deg)';
            document.getElementById("1b").style.display='none';
            a1=0;
        }
    }

    var b2=0;
    function b(){
        if (b2==0){
            document.getElementById('2a').style.transform = 'rotate(180deg)';
            document.getElementById("2b").style.display='block';
            b2=1;
        }
        else{
            document.getElementById('2a').style.transform = 'rotate(0deg)';
            document.getElementById("2b").style.display='none';
            b2=0;
        }
    }

    var c3=0;
    function c(){
        if (c3==0){
            document.getElementById('3a').style.transform = 'rotate(180deg)';
            document.getElementById("3b").style.display='block';
            c3=1;
        }
        else{
            document.getElementById('3a').style.transform = 'rotate(0deg)';
            document.getElementById("3b").style.display='none';
            c3=0;
        }
    }

    var d4=0;
    function d(){
        if (d4==0){
            document.getElementById('4a').style.transform = 'rotate(180deg)';
            document.getElementById("4b").style.display='block';
            d4=1;
        }
        else{
            document.getElementById('4a').style.transform = 'rotate(0deg)';
            document.getElementById("4b").style.display='none';
            d4=0;
        }
    }