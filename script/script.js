$(document).ready(function(){
    $("nav li").mouseover(function(){
                $(".sub").stop().slideDown();
    });
    $("nav li").mouseleave(function(){
                $(".sub").stop().slideUp();
    });
});