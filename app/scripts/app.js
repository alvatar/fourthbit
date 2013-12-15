/*global define */
define([], function () {
    'use strict';

    // Smooth scroll
    $('.scroll-link').click(function(e){
        e.preventDefault()
        //calculate destination place
        var dest = 0
        if($(this.hash).offset().top > $(document).height()-$(window).height()){
            dest=$(document).height()-$(window).height()
        } else {
            dest=$(this.hash).offset().top
        }
        //go to destination
        $('html,body').animate({scrollTop:dest}, 1000,'swing')
    })

    var currentActive
    // Navigation
    $('.box').click( function() {
        $('.listing', this).stop()
                           .css({visibility: 'visible', opacity: 0})
                           .animate({opacity: 1, top: 40})
        $('h1').stop().animate({ opacity: 0.3 })
        $('h1', this).stop().animate({ opacity: 0 })
        currentActive = $(this)
    })
    $(document).mouseup(function (e) {
        var container = currentActive //$('.box')
        // if the target of the click isn't the container...
        // ... nor a descendant of the container
        if (container && !container.is(e.target) && container.has(e.target).length === 0) {
            $('.listing').stop()
                         .animate( {opacity: 0, top: 0} )
                         .css('visibility','hidden')
            $('.box > h1', this).stop()
                                .animate({ opacity: 1 })
        }
    })

    return 'Fourthbit v0.4'
})
