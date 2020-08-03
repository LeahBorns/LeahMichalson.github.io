//animates the scroll to go smoothly to each section
"use strict";

// $(".jumper").on("click", function( e ) {
//
//     e.preventDefault();
//
//     $("body, html").animate({
//         scrollTop: $( $(this).attr('href') ).offset().top
//     }, 600);
//
// });


var mobileBtn = document.querySelector('.mobile-btn');
var menu = document.querySelector('ul#nav-links');

var closeBtn = document.querySelector('.close');
var overlay = document.querySelector('.overlay');


//opens the menu when click on hamburger icon

mobileBtn.addEventListener('click', function() {
    menu.className += ' open';
    overlay.className += ' open';
});

//closes menu when click on 'x'

closeBtn.addEventListener('click', function() {
    menu.className += 'menu';
    overlay.className = 'overlay';
});


//closes menu when clicking anywhere in the window

window.addEventListener('click', function(event) {
    if(event.target === overlay) {
        menu.className += 'menu';
        overlay.className = 'overlay';
    }
});


//sideways scrolling effect

$(window).on('load resize scroll', function() {
    $('.bg-static').each(function() {
        var windowTop = $(window).scrollTop();
        var elementTop = $(this).offset().top;
        var leftPosition = windowTop - elementTop;
        $(this)
            .find('.bg-move')
            .css({ left: leftPosition });
    });
});
