
document.getElementById("sel2").style.display='none';
document.getElementById("buthid").style.display='none';



$('#bootstrapForm').submit(function (event) {
  event.preventDefault()
  var extraData = {}
  $('#bootstrapForm').ajaxSubmit({
      data: extraData,
      dataType: 'jsonp',  // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
      error: function () {
          // Submit of form should be successful but JSONP callback will fail because Google Forms
          // does not support it, so this is handled as a failure.
          
          //alert('Form Submitted. Thanks.')

          // You can also redirect the user to a custom thank-you page:
           window.location = './success.html'
      }
  })
})

function colap(){
  document.getElementById("sel2").style.display='block';
  document.getElementById("butshow").style.display='none';
  document.getElementById("butshow2").style.display='none';
  document.getElementById("buthid").style.display='block';
}
function coldw(){
  document.getElementById("sel2").style.display='none';
  document.getElementById("butshow").style.display='block';
  document.getElementById("butshow2").style.display='block';
  document.getElementById("buthid").style.display='none';
}