const tabHeaders = document.querySelectorAll(".tabs .tab-header > div");
const tabContents = document.querySelectorAll(".tabs .tab-content > div");

for (let item = 0; item < tabHeaders.length; item++) {
    tabHeaders[item].addEventListener("click", function () {
        document.querySelector(".tabs .tab-header > div.active")
            .classList.remove("active");
        tabHeaders[item].classList.add("active");
        document.querySelector(".tabs .tab-content > div.active")
            .classList.remove("active");
        tabContents[item].classList.add("active");
    });
}