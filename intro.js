
function dischange(){
  window.location.href = "./home.html";
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

delay(2000).then(() => 
window.location.href = "./home.html"
);