const showHiddenInput = (iputOverlay, inputPass, inputIcon) => {
    const overlay = document.getElementById(iputOverlay),
        input = document.getElementById(inputPass),
        eyeIcon = document.getElementById(inputIcon);
    eyeIcon.addEventListener("click", () => {
        if (input.type === "password") {
            input.type = "text";
            eyeIcon.classList.remove("fa-regular", "fa-eye-slash");
            eyeIcon.classList.add("fa", "fa-eye");
        } else {
            input.type = "password";
            eyeIcon.classList.remove("fa", "fa-eye");
            eyeIcon.classList.add("fa-regular", "fa-eye-slash");
        }
        overlay.classList.toggle("show");
    });
}

showHiddenInput("input-overlay", "input-pass", "input-icon")