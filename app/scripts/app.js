/*global define */
define([], function () {
    'use strict';

    // Smooth scroll
    $('.scroll-link').click(function(e){
        e.preventDefault();
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

    // Navigation
    var isActive = false;
    $('.circles').mouseover( function() {
        if(!isActive) {
            $('img, > .text-wrapper', this).stop().animate({'opacity': '0.3'}, 300);
        }
    }).mouseout( function() {
        if(!isActive) {
            $('img, > .text-wrapper', this).stop().animate({'opacity': '1.0'}, 300);
        }
    }).click( function() {
        $(this).addClass('circles-selected');
        $('.circles > img, .circles > .text-wrapper').not(this).animate({'opacity': '0.5'}, 400);
        $('img, > .text-wrapper', this).stop().animate({'opacity': '0.08'}, 400);
        $('.listing').removeClass('selected');
        $('.listing', this).addClass('selected');
        $('.listing').not('.selected').animate({'opacity': '0.0', 'top': '0px'}, 200).css('visibility', 'hidden');
        $('.listing', this).css({'visibility': 'visible', 'opacity': '0.0'}).animate({'opacity': '1.0', 'top': '40px'}, 400);
        isActive = true;
    });
    $(document).mouseup(function (e) {
        var container = $('.circles');
        // if the target of the click isn't the container...
        // ... nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.listing').animate({'opacity': '0.0', 'top': '0px'}, {
                duration: 200,
                complete: function() {
                    $(this).css({'top': '0px', 'visibility': 'hidden'});
                }
            });
            $('.circles > img, .circles > .text-wrapper').animate({'opacity': '1.0', 'margin-top': '0px'}, 1000);
            isActive = false;
        }
    });

    return 'Fourthbit v0.3';
});
