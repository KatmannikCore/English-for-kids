import { PlayMusic ,FlipCart } from "./cards.js";
let stars =document.querySelector(".stars")
document.querySelector(".slider").onclick = function(){
    if (document.querySelector(".slider").innerHTML == "train"){
        document.querySelector(".slider").innerHTML = "play";
        document.querySelector(".start-game").hidden = false ;
        document.querySelectorAll(".card").forEach(item => item.removeEventListener('mouseenter', FlipCart));
        document.querySelectorAll(".card").forEach(item => item.removeEventListener('click', PlayMusic));
        document.querySelectorAll(".card img").forEach(item => item.style.height = "180px");
        CheckTrue()

    }
    else if(   document.querySelector(".slider").innerHTML == "play"){
        Clean()
    }
}
document.querySelector(".start-game").onclick = function(){
    document.querySelector(".game").hidden = false ;
    document.querySelector(".start-game").hidden = true ;
}
let arrayMusic = [];
let countErrors = 0;
let currentWord = 0;

document.querySelectorAll(".card audio").forEach(item => arrayMusic.push(item)) 
shuffle(arrayMusic)
document.querySelector(".game").onclick= function(){
    if(arrayMusic.length == 0){
        EndGame();
    }else{
        document.querySelector(".audio-game").src = arrayMusic[currentWord].src;
        arrayMusic[currentWord].play();
    }
}
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

function CheckTrue(){
    document.querySelectorAll(".card").forEach(item => item.addEventListener('click',AddImg))
}
function AddImg(event){
    if(event.currentTarget.style.opacity != "0.33"){
        if(event.currentTarget.querySelector("audio").src == document.querySelector(".audio-game").src){
            event.currentTarget.style.opacity = "0.33"
            stars.insertAdjacentHTML("beforeend",'<img src="../assets/icons/star-win.svg" alt="">');
            DeleteElementArrayMusic()
            arrayMusic[currentWord].play();
        }else{
            stars.insertAdjacentHTML("beforeend",'<img src="../assets/icons/star.svg" alt="">');
            countErrors++;
            
        }
        if(arrayMusic.length == 0){
            EndGame();
        }
    }
}
function DeleteElementArrayMusic(){
    for(let i = 0; i < arrayMusic.length; i++){
        if(arrayMusic[i] == arrayMusic[currentWord]){
            arrayMusic.splice(i, 1);
        }
    }    
}
function EndGame(){
    let modal = document.querySelector(".modal")
    modal.hidden = false;
    modal.innerHTML += `<h1>Колличество ошибок: ${countErrors}<h1/>`
}
function Clean(){
    stars.innerHTML = ""
    document.querySelector(".slider").innerHTML = "train";
    document.querySelector(".start-game").hidden = true ;
    document.querySelectorAll(".card").forEach(item => item.removeEventListener('click',AddImg))
    document.querySelectorAll(".card").forEach(item => item.addEventListener('mouseenter', FlipCart));
    document.querySelectorAll(".card").forEach(item => item.addEventListener('click', PlayMusic)); 
    document.querySelectorAll(".card").forEach(item => item.style.opacity = "1");
    document.querySelectorAll(".card img").forEach(item => item.style.height = "");
    document.querySelector(".game").hidden = true ;
}
document.querySelector('.modal').addEventListener('click',()=>location.reload())