import { cards, topics, cardsCategories } from "./configs/cardsConfig.js";
let blocks = document.querySelectorAll(".block");
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
    let words = document.querySelectorAll(".word p ");
    for(let j = 0; j < words.length; j++){
        words[j].innerHTML = cards[j].word;
    }
}