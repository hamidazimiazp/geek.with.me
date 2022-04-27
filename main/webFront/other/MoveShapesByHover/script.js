/* get random number */
const rand = (start, end) => {
    return start + Math.floor(Math.random() * (end - start));
};


/* get random color */
const randomColor = () => {
    return "#" + Math.random().toString(16).slice(2, 5);
}


// config
let minCountOfShapes = 10;
let maxCountOfShapes = 100;
let maxHeight = 200;
let maxWidth = 200;

/* element generator */
for (var item = 0; item < rand(minCountOfShapes, maxCountOfShapes); item++) {
    // craete element
    let element = document.createElement("div");

    // with & heigth & Coordinates
    let thisDivHeight = rand(50, maxHeight);
    let thisDivWidth = rand(50, maxWidth);
    let left = rand(0, (window.innerWidth - 200));
    let top = rand(0, (window.innerHeight - 200));


    // styles
    element.style.cssText = `height : ${thisDivWidth}px;
                             width : ${thisDivHeight}px;
                             background-color : ${randomColor()};
                             position : absolute;
                             left : ${left}px;
                             top : ${top}px;
                             transition : .4s linear;
                             cursor : pointer;
                             border-radius : 7px
                            `;

    // hover event
    element.addEventListener("mouseenter", function () {
        let left = rand(0, (window.innerWidth - 200));
        let top = rand(0, (window.innerHeight - 200));

        this.style.left = left + "px";
        this.style.top = top + "px";
    });

    // append to document
    document.getElementsByClassName("wrapper")[0].appendChild(element);
}