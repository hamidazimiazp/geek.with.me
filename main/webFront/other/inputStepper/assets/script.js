let stepperInput = {
    el: document.querySelector(".stepper-input input"),
    plustBTN: document.querySelector(".stepper-input .input .plus-btn"),
    minusBTN: document.querySelector(".stepper-input .input .minus-btn"),
    list: document.querySelector(".stepper-input .input .list")
}

stepperInput.min = parseInt(stepperInput.el.getAttribute("min"));
stepperInput.max = parseInt(stepperInput.el.getAttribute("max"));
stepperInput.value = parseInt(stepperInput.el.getAttribute("value"));

for (let item = stepperInput.min; item <= stepperInput.max; item++) {
    stepperInput.list.innerHTML += `<span>${item}</span>`;
}

stepperInput.list.style.marginTop = `-${stepperInput.value * 80}px`;
stepperInput.list.style.transition = `all 300ms ease-in-out`;

stepperInput.minusBTN.addEventListener("click", function () {
    let value = parseInt(stepperInput.el.getAttribute("value"));
    if (value !== stepperInput.min) {
        value--;
        stepperInput.el.setAttribute("value", value);
        stepperInput.list.style.marginTop = `-${value * 80}px`;

    }
});
stepperInput.plustBTN.addEventListener("click", function () {
    let value = parseInt(stepperInput.el.getAttribute("value"));
    if (value !== stepperInput.max) {
        value++;
        stepperInput.el.setAttribute("value", value);
        stepperInput.list.style.marginTop = `-${value * 80}px`;

    }
});