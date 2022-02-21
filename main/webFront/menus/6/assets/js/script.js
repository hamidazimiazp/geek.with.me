let links = document.querySelectorAll(".nav-list-item a");
let span = document.createElement('span');
span.classList.add('highlight');
document.body.appendChild(span);

links.forEach((link) => {
    link.addEventListener('mouseenter', highlight);
});

(function () {
    const homeCordinate = links[0].getBoundingClientRect();
    span.style.height = `${homeCordinate.height}px`;
    span.style.width = `${homeCordinate.width}px`;
    span.style.transform = `translate(${homeCordinate.left}px,${homeCordinate.top + window.scrollY}px`;
})();
function highlight() {
    var elmCoordinate = this.getBoundingClientRect();
    span.style.transition = "all 0.4s linear";
    span.style.height = `${elmCoordinate.height}px`;
    span.style.width = `${elmCoordinate.width}px`;
    span.style.transform = `translate(${elmCoordinate.left}px,${elmCoordinate.top + window.scrollY}px`;
}