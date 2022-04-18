const obj = {
    items: document.querySelectorAll(".nav-item"),
    indicator: document.querySelector(".nav-indicator")
}

const moveIndicator = (elment) => {
    obj.items.forEach(item => {
        item.classList.remove("is-active");
        item.style.color = "#000";
    });
    const activeColor = elment.getAttribute("data-color");

    obj.indicator.style.width = `${elment.offsetWidth}px`;
    obj.indicator.style.left = `${elment.offsetLeft}px`;
    obj.indicator.style.backgroundColor = `${activeColor}`;
    elment.classList.add("is-active")
    elment.style.color = activeColor;
}


obj.items.forEach((item, index) => {
    item.addEventListener("click", e => {
        moveIndicator(e.target)
    });
    item.classList.contains("is-active") && moveIndicator(item);
});