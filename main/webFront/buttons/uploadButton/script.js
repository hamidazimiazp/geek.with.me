$(document).ready(function(){
    $("button").on("click", function(){ 
        const this_btn = $(this);
        if(!this_btn.parent().hasClass("active")){
            this_btn.parent().addClass("active");
            setTimeout(function(){
                this_btn.addClass("success");
            }, 1000);
            setTimeout(function(){
                this_btn.parent().removeClass("active");
                this_btn.removeClass("success");
            }, 2300);
        }
    });
});