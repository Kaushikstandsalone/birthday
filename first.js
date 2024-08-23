var sound=document.querySelector("img");

sound.addEventListener('click',function(){
var audio = new Audio('crowd.mp3');
audio.play();
});