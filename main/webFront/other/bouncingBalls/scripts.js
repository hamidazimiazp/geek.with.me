// config
const ballSize = 40
const ballMoveRefreshRate = 30 // ms
const balls = []


// random color
const getColor = () => {
    return "#" + Math.random().toString(16).slice(2, 5);
}


// create new ball
const createBall = (ballSize, x, y) => {

    const positionX = x;
    const positionY = y;

    const ballHtml = document.createElement('div')
    ballHtml.className = 'ball';
    const color = getColor();
    ballHtml.style.background = color
    ballHtml.style.width = ballSize + 'px'
    ballHtml.style.height = ballSize + 'px'
    ballHtml.style.left = positionX + 'px'
    ballHtml.style.top = positionY + 'px'

    const signX = Math.floor(Math.random() * 2) === 1 ? 1 : -1
    const signY = Math.floor(Math.random() * 2) === 1 ? 1 : -1

    return {
        positionX,
        positionY,
        vectorX: Math.floor((Math.random() * 10) + 1) * signX,
        vectorY: Math.floor((Math.random() * 10) + 1) * signY,
        size: ballSize,
        html: ballHtml,
    }
}


// moving balls
const moveBalls = (balls) => {
    for (const ball of balls) {
        const wallWidth = wall.getBoundingClientRect().width;
        const wallHeight = wall.getBoundingClientRect().height;

        if (ball.positionX + ball.size > wallWidth || ball.positionX < 0) {
            ball.vectorX = -ball.vectorX
        }

        if (ball.positionY + ball.size > wallHeight || ball.positionY < 0) {
            ball.vectorY = -ball.vectorY
        }

        ball.positionX += ball.vectorX
        ball.positionY += ball.vectorY

        ball.html.style.left = ball.positionX + 'px'
        ball.html.style.top = ball.positionY + 'px'
    }
}


// Ball Creation
const makeBall = (x, y) => {
    const ball = createBall(ballSize, x, y);
    balls.push(ball);
    wall.appendChild(ball.html);
}


// Ball Movement
setInterval(function () {
    moveBalls(balls)
}, ballMoveRefreshRate)


// create ball when user clicked
window.addEventListener("click", event => {
    console.log(event);
    if (balls.length < 100) {
        makeBall(event.clientX, event.clientY);
    }
});