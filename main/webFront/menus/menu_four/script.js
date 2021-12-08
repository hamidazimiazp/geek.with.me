$(document).ready(function(){
    const listItems = $(".list");
    listItems.each(function(){
        $(this).on("click", function(){
            if(listItems.hasClass("active")){
                listItems.removeClass("active");
            }
            $(this).addClass("active");
        });
    });
});