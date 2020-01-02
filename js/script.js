var rellax = new Rellax(' .rellax ');
new Freezeframe('.gif');
window.onload = function() {

    scroll_effect();
  
    $(window).scroll(function(){
     scroll_effect();
    });
  
    function scroll_effect(){
     $('.effect-fade').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight+200){
       $(this).addClass('effect-scroll');
      }
     });
    }

    nav_responsive();

    $(window).resize(function(){
        nav_responsive();
    });
    function nav_responsive(){
        var windowWidth = $(window).width();
        var windowSm = 700;
        if (windowWidth <= windowSm) {
            $("nav").css("display","none");
        }else{
            $("nav").css("display","block");
        }
    }

  };
  $('.color_filter').hover(
    function() {
        $(this).find(".work_description").fadeIn(200);
        //マウスカーソルが重なった時の処理
 
    },
    function() {
        $(this).find(".work_description").hide();
        //マウスカーソルが離れた時の処理
 
    }
);


$(function(){

    $(".fuwatto").hide().fadeIn(2000);
    $("#menu-btn").on("click", function() {
        $("nav").slideToggle(300);
        $(this).toggleClass("active");
    });
    $(".nav-link").on("click", function() {
        var windowWidth = $(window).width();
        var windowSm = 700;
        if (windowWidth <= windowSm) {
            $("nav").hide();
            
        }

    });  
      
    $('a[href^="#"]').click(function() {
        // スクロールの速度
        var speed = 400; // ミリ秒で記述
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
      });   
});
