const balloonContainer = document.getElementById("balloon-container");

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var mt = random(200);
  var ml = random(50);
  var dur = random(5) + 5;
  return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite
  
  `;
}

function createBalloons(num) {
  for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();
    balloonContainer.append(balloon);
  }
}
document.querySelector("img").addEventListener('click',function(){
  
  document.querySelector("h1").innerHTML="Enjoy your voucher🥳🥳🥳";
  document.querySelector("h1").style.marginLeft="600px";
  document.querySelector("h2").innerHTML="";
  document.querySelector("h1").setAttribute("class","wow");
  
  document.querySelector("img").style.height="301px";
  document.querySelector("img").style.width="600px";
  document.querySelector("img").style.animationDuration="0s";
  document.querySelector("img").setAttribute("src","voucher.avif");
  document.querySelector("img").style.marginLeft="500px";
  var audio = new Audio('crowd.mp3');
  audio.play();
  document.querySelector("bod")
  
});

window.addEventListener("load",function(){
  var audio = new Audio('crowd.mp3');
audio.play();
  createBalloons(40);
});





