$(document).ready(function(){
    $("nav li").mouseover(function(){
                $(".sub").stop().slideDown();
    });
    $("nav li").mouseleave(function(){
                $(".sub").stop().slideUp();
    });
});

$(document).ready(function(){
    start();
    var imgs = 2
    var now = 0;
    function start(){
        $(".mainimg").eq(0).siblings().fadeIn();
        setInterval(function(){slide();},3000);
    }
    function slide(){
        now = now==imgs?0:now+= 1;
        
        $(".mainimg").eq(now).fadeIn();
        $(".mainimg").eq(now-1).fadeOut();
    }
});