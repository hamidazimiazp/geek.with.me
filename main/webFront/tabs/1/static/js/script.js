let tabHeader = document.querySelector(".tab-header");
let tabBody = document.querySelector(".tab-body");
let tabIndicator = document.querySelector(".tab-indicator");

let tabsHeaderItem = tabHeader.querySelectorAll(".tab-header-item");
let tabBodyItem = tabBody.querySelectorAll(".tab-body-item");

for (let item = 0; item < tabsHeaderItem.length; item++){
    tabsHeaderItem[item].addEventListener("click", function(){
        // activate tab
        tabHeader.getElementsByClassName("active")[0].classList.remove("active");
        tabsHeaderItem[item].classList.add("active");

        // activate body
        tabBody.getElementsByClassName("active")[0].classList.remove("active");
        tabBodyItem[item].classList.add("active");

        tabIndicator.style.left =  `calc(calc(100% / 4) * ${item})`

    });
}