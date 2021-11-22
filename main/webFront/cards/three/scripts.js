$(document).ready(function(){
    $("body").mousemove(function(e){
        let rotateX = -($(window).innerWidth()/2 - e.pageX) / 15;
        let rotateY = -($(window).innerHeight()/2 - e.pageY) / 15;
        
        $(".card").css("transform", `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    });
    $(document).mouseout(function(e){
        $(".card").css("transform", "");
    });
});