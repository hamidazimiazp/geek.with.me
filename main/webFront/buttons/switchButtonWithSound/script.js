
window.onload = () => {
    const swtBtn = document.querySelectorAll(".switch-btn");
    let audio = new Audio('click.wav');

    swtBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("active");
            audio.play();
        });
    });
}