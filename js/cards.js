import { cards, topics, cardsCategories } from "./configs/cardsConfig.js";
let blocks = document.querySelectorAll(".cardFront");
function Temp(){
    let menu = document.querySelectorAll(" li a ");
    for(let i = 0; i < menu.length; i++){
        menu[i].addEventListener('click', function(){
            SetCart(cards[menu[i].innerHTML])
        })
    }
}
Temp();
function SetCart(cards){
    let images = document.querySelectorAll("img");
    for(let j = 0; j < images.length; j++){
        images[j].src = cards[j].image;
    }
    let words = document.querySelectorAll(".cardFront");
    for(let j = 0; j < words.length; j++){
        words[j].innerHTML = cards[j].word;
    }
    let translationWords= document.querySelectorAll(".cardBack");
    for(let j = 0; j < words.length; j++){
        translationWords[j].innerHTML = cards[j].translation;
    }
    let musics= document.querySelectorAll("audio");
    for(let i = 0; i < musics.length; i ++){
        musics[i].src = cards[i].audioSrc;
    }
}

document.querySelectorAll(".card").forEach(item => item.addEventListener('click', function(){
    this.classList.toggle('applyflip');
    //this.onmouseover = this.querySelector("audio").play();
}))

document.querySelectorAll(".card").forEach(item => item.addEventListener('mouseenter', function(event){
    item.querySelector("audio").play()
}))