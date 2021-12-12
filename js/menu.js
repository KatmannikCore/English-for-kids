document.querySelectorAll("li:not(.statistics_label) a").forEach(item => item.addEventListener('click', function(){
    document.querySelector(".wrapper").style.display = "flex";
    document.querySelector("label").style.display = "block";
    document.querySelector(".statistics_wrapper").classList.add(".statistics_disabled");
    document.querySelector(".statistics_wrapper").classList.remove("statistics_active");
    document.querySelector(".statustucs_table").hidden = true;
}))