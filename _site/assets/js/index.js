$(document).ready(function(){
    $(".button_a").click(function(){
        $(".overlay").fadeToggle(200);

        $('.button_a').removeClass('btn-open').addClass('btn-close-h');
        $('.button_b').removeClass('btn-close-h').addClass('btn-close');
    });
});
$('.overlay').on('click', function(){
    $(".overlay").fadeToggle(200);
    $('.button_a').removeClass('btn-close-h').addClass('btn-open');
    $('.button_b').removeClass('btn-close').addClass('btn-close-h');
    open = false;
});
