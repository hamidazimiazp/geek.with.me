const signinBtn = document.querySelector(".signinBtn");
const signupBtn = document.querySelector(".signupBtn");
const formBox = document.querySelector(".formBox");
const wrapper = document.querySelector(".wrapper");


signinBtn.onclick = () => {
    formBox.classList.remove("active");
    wrapper.classList.remove("active")
}
signupBtn.onclick = () => {
    formBox.classList.add("active");
    wrapper.classList.add("active")
}