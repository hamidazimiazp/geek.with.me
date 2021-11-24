$(document).ready(function(){
    // random color 
    function getColor(){
        const color = Math.random().toString(16).substr(2, 6);
        return color;
    }
    // bar anmimation
    $(".skill-per").each(function(){
        let $this = $(this);
        let per = $this.attr("data-per");
        $this.css("width", per + "%");
        $this.css("background-color", "#" + getColor());
        $({animatedValue: 0}).animate({animatedValue: per}, {
            duration: 1000,
            step:function(){
                $this.attr("data-per", Math.floor(this.animatedValue));
            },
            complete: function(){
                $this.attr("data-per", Math.floor(this.animatedValue));
            }
        });
    });
});