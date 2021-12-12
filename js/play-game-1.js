import { PlayMusic ,FlipCart } from "./cards.js";

document.querySelector(".slider").onclick = function(){
   let  sliderWork =  document.querySelector(".slider").innerHTML;
    if ( sliderWork === "train"){
        document.querySelector(".slider").innerHTML = "play";
        document.querySelector(".start-game").hidden = false ;
        document.querySelectorAll(".card").forEach(item => item.removeEventListener('mouseenter', FlipCart));
        document.querySelectorAll(".card").forEach(item => item.removeEventListener('click', PlayMusic));
        document.querySelectorAll(".cardStatic img").forEach(item => item.style.maxWidth =  'none'); 

    }
    else if( sliderWork === "play"){
        document.querySelector(".slider").innerHTML = "train";
        document.querySelector(".start-game").hidden = true ;
        document.querySelectorAll(".card").forEach(item => item.addEventListener('mouseenter', FlipCart));
        document.querySelectorAll(".card").forEach(item => item.addEventListener('click', PlayMusic));
        document.querySelectorAll(".cardStatic img").forEach(item => item.style.maxWidth =  '100%'); 
        document.querySelector(".game").hidden = true ;
    }
}
document.querySelector(".start-game").onclick = function(){
    document.querySelector(".game").hidden = false ;
    document.querySelector(".start-game").hidden = true ;
}
let arrayMusic = [];
document.querySelectorAll("audio").forEach(item => arrayMusic.push(item)) 
document.querySelector(".game").onclick= function(){
    let randomElement = arrayMusic[Math.floor(Math.random() * arrayMusic.length)];
    randomElement.play();
}
document.querySelectorAll(".card").forEach(item => item.addEventListener('click',function(event){
    console.log(event.currentTarget)
}))
