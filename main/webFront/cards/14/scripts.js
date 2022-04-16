const number = document.querySelectorAll(".number");
let counter = 0;

setInterval(() => {
    if (counter == 100) {
        clearInterval();
    } else {
        counter++
        number.forEach(item => item.textContent = counter + "%");
    }
}, 75);