const QRCode = {
    btn: document.getElementsByClassName("btn")[0],
    api: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=",
    img: document.querySelector("img"),
    span: document.querySelector(".input-error")
}

QRCode.btn.addEventListener("click", function () {
    const data = document.getElementById("text").value;
    QRCode.img.setAttribute("src", "");

    if (!data.length) {
        QRCode.span.textContent = "- Enter Data!";
        QRCode.span.style.display = "block";
    } else {
        QRCode.span.style.display = "none";
        const API = QRCode.api + data;
        QRCode.img.setAttribute("src", "loading.gif");
        fetch(API)
            .then(response => QRCode.img.setAttribute("src", response.url))
            .catch(() => {
                QRCode.span.textContent = "- An Error Occurred!";
                QRCode.span.style.display = "block";
                QRCode.img.setAttribute("src", "");
            });
    }
});