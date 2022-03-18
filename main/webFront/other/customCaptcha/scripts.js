const captcha = {
    captcha: document.querySelector(".captcha"),
    reloadBtn: document.querySelector(".reload-btn"),
    inputField: document.querySelector(".input-area input"),
    checkBtn: document.querySelector(".check-btn"),
    statusMSG: document.querySelector(".status-msg")
}

let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
    'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function getCaptcha() {
    for (let i = 0; i < 6; i++) {
        let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
        captcha.captcha.innerText += ` ${randomCharacter}`;
    }
}
getCaptcha();


const removeContent = () => {
    captcha.inputField.value = "";
    captcha.captcha.innerText = "";
    captcha.statusMSG.style.opacity = "0";
}

captcha.reloadBtn.addEventListener("click", () => {
    removeContent();
    getCaptcha();
});

captcha.checkBtn.addEventListener("click", e => {
    e.preventDefault();

    captcha.statusMSG.style.opacity = "1";
    let inputVal = captcha.inputField.value.split('').join(' ');

    if (inputVal == captcha.captcha.innerText) {
        captcha.statusMSG.style.color = "green";
        captcha.statusMSG.innerText = "Nice! You don't appear to be a robot.";

        setTimeout(() => {
            removeContent();
            getCaptcha();
        }, 2000);

    } else {
        captcha.statusMSG.style.color = "brown";
        captcha.statusMSG.innerText = "Captcha not matched. Please try again!";
    }
});