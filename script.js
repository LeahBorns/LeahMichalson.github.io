//$(document).ready(function() {
//    // get current URL path and assign 'active' class
////    var pathname = window.location.pathname;
////    $('#nav-links > li > a[href="../'+pathname+'"]').parent().addClass('active');
////})
//
//});
//
$(document).ready(function () {

    // get current URL path and assign 'active' class
//    var pathname = window.location.pathname;
    $('.nav-links > li > a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active')

//    $(function() {
//        $('#nav.links > li > a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
    });

//     nav sticks once scrolling
    $(function () {
        $(window).on("scroll", function () {
            if ($(window).scrollTop() > 50) {
                $("#nav_links").addClass("active");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
                $("#nav_links").removeClass("active");
            }
        });
    });




// $(".jumper").on("click", function( e ) {
//
//     e.preventDefault();
//
//     $("body, html").animate({
//         scrollTop: $( $(this).attr('href') ).offset().top
//     }, 600);
//
// });


// get current URL path and assign 'active' class
//var pathname = window.location.pathname;
//$('.nav-links > li > a[href="'+pathname+'"]').parent().addClass('active');

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
