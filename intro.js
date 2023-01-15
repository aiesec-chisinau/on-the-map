


function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

delay(3000).then(() => 
window.location.href = "./home.html"
);