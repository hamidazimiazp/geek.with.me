$(document).ready(function(){
    // set random color
    $(".refresh").on("click", function(){
        $(".color").each(function(){
            let randomColor = "#" + Math.random().toString(16).substr(2,6);
            $(this).css("background-color", randomColor);
            $(this).children(".color-hex").text(randomColor);
        });
    }).trigger("click");

    // copy to clipboard
    $(".color").on("click", function(){
        const this_color = $(this).children(".color-hex").text();

        navigator.clipboard.writeText(this_color).then(
            function(){
                $(".copied-alert").fadeIn(400);
                $(".copied-alert").fadeOut(1300);
            }
        ).catch(
            function(){
                $(".copied-alert").text("An error occurred");
                $(".copied-alert").fadeIn(100);
                $(".copied-alert").fadeOut(800);
            }
        )
    });
});