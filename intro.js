window.location.href = "./home.html"
 document.getElementById("preloadpage").style.display='none';

function dischange(){
  window.location.href = "./home.html";
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

delay(0).then(() => 
window.location.href = "./home.html"
);