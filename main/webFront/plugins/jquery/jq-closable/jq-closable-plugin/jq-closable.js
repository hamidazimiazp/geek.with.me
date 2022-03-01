(function ($) {
    $.fn.closable = function (userOptions) {
        let options = $.extend({
            animation: "hide", //fadeOut, hide, slideUp
            top: null,
            right: null,
            bottom: null,
            left: null,
            color: "white",
            bgColor: "red"
        }, userOptions);
        this.each(function () {

            let elm = $(this);
            // check position
            let pos = elm.css("position");
            if (!pos || pos == "static") {
                elm.css("position", "relative");
            }

            // create close button
            let closeBTN = $("<span>&times;</span>").attr("class", "closeBTN");

            // event
            closeBTN.on("click", function () {
                switch (options.animation) {
                    case "hide":
                        $(this).parent().hide();
                        break;
                    case "fadeOut":
                        $(this).parent().fadeOut();
                        break;
                    case "slideUp":
                        $(this).parent().slideUp();
                        break;
                }
            });

            // styles 
            let styles = {
                "top": options.top,
                "right": options.right,
                "bottom": options.bottom,
                "left": options.left,
                "color": options.color,
                "background": options.bgColor,
            }
            closeBTN.css(styles);

            elm.append(closeBTN);
        });
    }
})(jQuery);