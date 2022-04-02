$(document).ready(function () {
    $(".accordion-item-heading").on("click", function () {
        if ($(this).next(".accordion-item-body").css("display") == "block") {
            $(this).next(".accordion-item-body").slideUp(500);
            $(".accordion-item-heading").removeClass("active");
        } else {
            $(".accordion-item-heading").removeClass("active");
            $(".accordion-item-heading").next(".accordion-item-body").slideUp(500);
            $(this).addClass("active");
            $(this).next(".accordion-item-body").slideDown(500);
        }
    });
});