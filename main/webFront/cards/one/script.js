const openModal = document.getElementById("open");
const closeModal = document.getElementById("close");

openModal.addEventListener("click", function(){
    document.getElementById("wrapper").classList.add("open");
});
closeModal.addEventListener("click", function(){
    document.getElementById("wrapper").classList.remove("open");
});