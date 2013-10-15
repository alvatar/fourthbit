/*global define */
define([], function () {
    'use strict';

    // $(function() {
    // });

    $('.scroll-link').click(function(event){
        event.preventDefault();
        //calculate destination place
        var dest=0;
        if($(this.hash).offset().top > $(document).height()-$(window).height()){
            dest=$(document).height()-$(window).height();
        }else{
            dest=$(this.hash).offset().top;
        }
        //go to destination
        $('html,body').animate({scrollTop:dest}, 1000,'swing');
    });

    var active = false;
    $('.circles').mouseover( function(event) {
        if(!active) {
            $(this).stop().animate({opacity: 0.1}, 500);
        }
    }).mouseout( function(event) {
        if(!active) {
            $(this).stop().animate({opacity: 1.0}, 500);
        }
    }).click( function(event) {
        $('.circles').animate({opacity: 1.0}, 500);
        $(this).stop().css({opacity: 0.1}, 500);
        active = true;
    });

    return '\'Allo \'Allo!';
});
