// dark mode toggle
const toggler = document.getElementById("toggler-circle");
const togglerbg = document.getElementById("toggler");
const body = document.body;

// check and save screen mode with localstorage
if(localStorage.getItem("theme") === null){
    localStorage.setItem("theme", "light");
    body.classList.add("light");
    toggler.style.transform = "translateX(0)";
}else if(localStorage.getItem("theme") === "dark"){
    body.classList.add(localStorage.getItem("theme"));
    toggler.style.transform = "translateX(20px)";
}else{
    body.classList.add(localStorage.getItem("theme"));
    toggler.style.transform = "translateX(0)";
}

togglerbg.addEventListener("click", function(){
    if(body.classList.contains("light")){
        body.classList.replace("light", "dark");
        toggler.style.transform = "translateX(20px)";
        localStorage.setItem("theme", "dark");
    }else{
        body.classList.replace("dark", "light");
        toggler.style.transform = "translateX(0)";
        localStorage.setItem("theme", "light");
    }
});