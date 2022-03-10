const showHiddenInput = (iputOverlay, inputPass, inputIcon) => {
    const overlay = document.getElementById(iputOverlay),
        input = document.getElementById(inputPass),
        eyeIcon = document.getElementById(inputIcon);
    eyeIcon.addEventListener("click", () => {
        if (input.type === "password") {
            input.type = "text";
        } else {
            input.type = "password";
        }
        eyeIcon.classList.toggle("fa", "fa-eye", "fa-regular", "fa-eye-slash");
        overlay.classList.toggle("show");
    });
}

showHiddenInput("input-overlay", "input-pass", "input-icon")