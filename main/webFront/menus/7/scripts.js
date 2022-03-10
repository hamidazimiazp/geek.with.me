document.querySelector(".toggle-btn")
    .addEventListener("click", () => {
        document.querySelector(".sidebar-menu").classList.toggle("active");
    });

document.querySelectorAll(".sidebar-menu .sidebar .links .link > a")
    .forEach(link => {
        link.addEventListener("click", e => {
            if (e.target.parentNode.children.length > 1) {
                e.target.parentNode.classList.toggle("active");
            }
        });
    });