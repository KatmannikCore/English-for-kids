import { cards, topics, cardsCategories } from "./configs/cardsConfig.js";
document.querySelector(".statistics_label").onclick = function(){
    document.querySelector(".wrapper").style.display = "none";
    document.querySelector("label").style.display = "none";
    document.querySelector(".statistics_wrapper").classList.remove(".statistics_disabled");
    document.querySelector(".statistics_wrapper").classList.add("statistics_active");
    document.querySelector(".statustucs_table").hidden = false;
    CrateTable();
    
}

function CrateTable(){
    for(let categorie of cardsCategories){
        for(let i = 0; i < 8; i++){
            let tr = document.createElement("tr");
            tr.innerHTML += `<td>${categorie}</td>` + `<td>${cards[categorie][i].word}</td>`  + `<td>${cards[categorie][i].translation}</td>` 
            document.querySelector(".statustucs_table").append(tr);
        }
    }
}