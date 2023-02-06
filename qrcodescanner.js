
if(JSON.parse(localStorage.qrlogin)!=true){
    
    window.location.href = './qr.html'; }


    var dataattendance = {
        fullname:'',
        id:'',
        team:''
    }

    var presencevariable = {
        fullname:'',
        id:''
        
    }

    var onetimevar=1;

    function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
// When scan is successful fucntion will produce data
function onScanSuccess(qrCodeMessage) {

   




    $.getJSON(apilink(), 
        function (data) {
            
            $.each(data, function (key, value) {

                if (value.id==qrCodeMessage){

                    dataattendance.fullname=value.surname+' '+value.name;
                    dataattendance.id=value.id;
                    dataattendance.team=value.team;

                    localStorage.setItem('qrreslutvariable',JSON.stringify(dataattendance));

                    
                    
                    
                    if(onetimevar==1){
                        presencevariable.fullname =value.surname+' '+value.name;
                    presencevariable.id=value.id;
                        axios.post(attendancelink(),presencevariable);
                        delay(1000).then(() => 
                    window.location.href = './qrresult.html'
);
                        onetimevar=2;
                    }
                    
                   
                    

                    

                    document.getElementById("resultdiv").style.display="block";
                    document.getElementById("qrcodesandiv").style.display="none";
                }
            });
        });









   
  qrCodeMessage
    
}


// When scan is unsuccessful fucntion will produce error message
function onScanError(errorMessage) {
  // Handle Scan Error
}

// Setting up Qr Scanner properties
var html5QrCodeScanner = new Html5QrcodeScanner("reader", {
  fps: 10,
  qrbox: 250
});

// in
html5QrCodeScanner.render(onScanSuccess, onScanError);


