$(document).ready(function(){
    $('.btn1').click(function(){
      $('.img1').css('marginLeft','0')
    });

    $('.btn2').click(function(){
      $('.img1').css('marginLeft','-20%')
    });

    $('.btn3').click(function(){
      $('.img1').css('marginLeft','-40%')
    });
    
    $('.btn4').click(function(){
      $('.img1').css('marginLeft','-60%')
    });

    $('.btn1').addClass('active');

    $('a').click(function(){
      $(this).addClass('active').siblings().removeClass('active')
    });
});