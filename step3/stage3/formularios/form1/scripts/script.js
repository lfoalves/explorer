const eye = document.getElementById('eye');
const inputPass = document.querySelector("input[type='password']");

eye.addEventListener('click', function() {
  if (inputPass.getAttribute('type') == 'password') {
    inputPass.setAttribute('type', 'text')
    eye.setAttribute('src', 'https://img.icons8.com/emoji/2x/face-with-rolling-eyes.png')
  } else if (inputPass.getAttribute('type') == 'text') {
    inputPass.setAttribute("type","password")
    eye.setAttribute('src','https://img.icons8.com/emoji/2x/eyes-emoji.png')
  } 
});