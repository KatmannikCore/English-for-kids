import { cards, topics, cardsCategories } from "./configs/cardsConfig.js";
let _words = document.querySelectorAll(".cardFront p");
let _images = document.querySelectorAll("img");
let _translationWords= document.querySelectorAll(".cardBack p");
let _musics= document.querySelectorAll("audio");
function SetEventsForMenu(){
    let menu = document.querySelectorAll("li a");
    for(let i = 0; i < menu.length; i++){
        menu[i].addEventListener('click', function(){
            SetCart(cards[menu[i].innerHTML])
        })
    }
}
SetEventsForMenu();
export function PlayMusic(){
    this.querySelector("audio").play()
}
document.querySelectorAll(".card").forEach(item => item.addEventListener('click', PlayMusic))
//Переварот карт
export function FlipCart(){
    this.classList.add('applyflip');
    setTimeout(() => this.classList.remove('applyflip'), 1500);
}
document.querySelectorAll(".card").forEach(item => item.addEventListener('mouseenter', FlipCart, false))
document.querySelector(".main-page").onclick = function(){
    SetCarts()
}
function SetCarts(){
    for(let i = 0; i < cardsCategories.length; i++){
        let index = getRandomInt(8);
        _images[i].src = cards[cardsCategories[i]][index].image;
        _words[i].innerHTML = cards[cardsCategories[i]][index].word;
        _translationWords[i].innerHTML = cards[cardsCategories[i]][index].translation;
        _musics[i].src = cards[cardsCategories[i]][index].audioSrc;
    } 
}
function SetCart(cards){
    for(let i = 0; i < cardsCategories.length; i++){
        _images[i].src = cards[i].image;
        _words[i].innerHTML = cards[i].word;
        _translationWords[i].innerHTML = cards[i].translation;
        _musics[i].src = cards[i].audioSrc;
    } 
}
SetCarts()
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
} 