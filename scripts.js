document.addEventListener('DOMContentLoaded',function(){
  var toggle=document.querySelector('.nav-toggle');
  var nav=document.querySelector('.main-nav');
  if(toggle && nav){
    toggle.addEventListener('click',function(){
      if(nav.style.display==='flex'){nav.style.display='none'}else{nav.style.display='flex';nav.style.flexDirection='column'}
    });
  }
  var signup=document.getElementById('signupForm');
  if(signup){signup.addEventListener('submit',function(e){e.preventDefault();alert('Signup form submitted (demo)');})}
  var login=document.getElementById('loginForm');
  if(login){login.addEventListener('submit',function(e){e.preventDefault();alert('Login form submitted (demo)');})}
});
