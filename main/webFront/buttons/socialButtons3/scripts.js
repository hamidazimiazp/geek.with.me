const btn = document.getElementsByClassName("share-btn")[0];

btn.addEventListener("click", function () {
    this.parentNode.classList.toggle("active");
});