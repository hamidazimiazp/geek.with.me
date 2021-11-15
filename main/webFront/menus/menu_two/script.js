$(document).ready(function(){
    $(".button").click(function(){
        $(this).toggleClass("expand");
        $(".menu-container ul").slideToggle();
    });
});