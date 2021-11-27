const rangeInput = document.getElementById("range");
const container = document.getElementsByClassName("container")[0];

container.style.filter = `brightness(${rangeInput.value}%)`

rangeInput.addEventListener("input", function(){
    container.style.filter = `brightness(${rangeInput.value}%)`;
});