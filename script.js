


document.getElementById("hidel").style.display='none';

function dischange(){
   
    document.getElementById("pageiddiv").style.display='block';
    document.getElementById("preloadpage").style.display='none';
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  
document.getElementById("pageiddiv").style.display='none';
document.getElementById("preloadpage").style.display='block'
delay(2500).then(() => 
    dischange()
);