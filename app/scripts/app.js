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

    var currentActive = null
    
    // Navigation
    $('.box').mouseenter( function() {
        if( currentActive ) {
            $('.listing').stop()
                         .animate( {opacity: 0, top: 0} )
                         .css('visibility','hidden')
            $('.box > h1', currentActive).stop().animate({ opacity: 1 })
            currentActive = null
        }
        $('.listing', this).stop()
                           .css({visibility: 'visible', opacity: 0})
                           .animate({opacity: 1, top: 40})
        $('h1').stop().animate({ opacity: 0.4 })
        $('h1', this).stop().animate({ opacity: 0.25 })
        currentActive = $(this)
    })

    $(document).mouseover(function (e) {
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
    

    
    /*
     * Replace all SVG images with inline SVG
     */
    $('img.svg').each(function(){
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });

    return 'Fourthbit v0.6.1'
})
