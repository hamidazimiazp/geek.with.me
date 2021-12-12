
function changeImage(path){
    document.querySelector(".pepsi-img").src = path;
}


function changeBgColor(color){
    const section = document.querySelector(".sec");
    section.style.backgroundColor = color;
}

document.querySelector(".hamber").addEventListener("click", function(){
    let nav = document.querySelector(".SideNav");
    if(nav.classList.contains("active")){
        nav.classList.remove("active");
    }else{
        nav.classList.add("active");
    }
});

document.querySelector(".close").addEventListener("click", function(){
    let nav = document.querySelector(".SideNav");
    if(nav.classList.contains("active")){
        nav.classList.remove("active");
    }else{
        nav.classList.add("active");
    }
});