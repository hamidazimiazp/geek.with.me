window.onload = () => {
    const container = document.querySelector(".container");
    window.onmousemove = e => {
        let x = -e.clientX / 5,
            y = -e.clientY / 5

        container.style.backgroundPositionX = `${x}px`;
        container.style.backgroundPositionY = `${y}px`;
    }
};