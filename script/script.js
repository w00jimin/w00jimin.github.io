$(document).ready(function(){
    $("nav li").mouseover(function(){
                $(".sub").stop().slideDown();
    });
    $("nav li").mouseleave(function(){
                $(".sub").stop().slideUp();
    });
});

$('#mainimg>ul>li').hide();
$('#mainimg>ul>li:first-child').show();

setInterval(function(){
    $('#slide3>ul>li:first-child').fadeOut()
    .next().fadeIn().end(1000)
    .appendTo('#slide3>ul');
},3000);