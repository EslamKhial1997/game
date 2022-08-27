

function add(){
      mario.style.cssText = "bottom:250px; width:320px"
      setTimeout(function() {
        mario.style.bottom = "0px"
}, 800);
}

jump.addEventListener("click",add)

let body = document.querySelector("body");
let mario = document.getElementById("mario");
let span = document.querySelector("span")

body.onkeydown= (e)=>{
   if(e.key === "ArrowUp"){
    mario.style.cssText = "bottom:250px; width:320px"
    setTimeout(function() {
      mario.style.bottom = "0px"
}, 800);
   }
}




let counter = 0
setInterval(() => {
    const mariors_bottom = parseInt(window.getComputedStyle(mario).getPropertyValue("bottom"));
    const cars1 = parseInt(window.getComputedStyle(img1).getPropertyValue("left"));
    if(cars1 <= 200 && mariors_bottom == 0 && mariors_bottom < 100){    
        confirm(span.innerHTML)
       location.reload()     
}
}, 20)

// *********************************************************************************
let img2 = document.getElementById("img2");

setInterval(() => {
    const mariors_bottom = parseInt(window.getComputedStyle(mario).getPropertyValue("bottom"));
    const cars2 = parseInt(window.getComputedStyle(img2).getPropertyValue("left"));
    console.log(mariors_bottom)
    if(cars2 <= 200 && mariors_bottom == 0 && mariors_bottom < 100){    
        confirm(span.innerHTML)
       location.reload()     
}
}, 20)
setInterval(() => {
    span.innerHTML = "Your Score :"+counter++
}, 1100);

