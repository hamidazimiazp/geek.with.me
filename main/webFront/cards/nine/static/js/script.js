$('.circle .bar').circleProgress({
    value: 0.75
}).on('circle-animation-progress', function (event, progress, stepValue) {
    $(this).parent().find('span').text(stepValue.toFixed(2).substr(2) + "%");
});

let gradient = { gradient: ["#a445b2", "#fa4299"] }

$(".html .bar").circleProgress({
    value: 0.80,
    fill: gradient
});
$(".css .bar").circleProgress({
    value: 0.45,
    fill: gradient
});
$(".js .bar").circleProgress({
    value: 0.90,
    fill: gradient
});