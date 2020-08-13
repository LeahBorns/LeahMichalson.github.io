'use strict';

//$(document).ready(function () {


//});



var mobileBtn = document.querySelector('.mobile-btn');
var menu = document.querySelector('ul#nav-links');

var closeBtn = document.querySelector('.close');
var overlay = document.querySelector('.overlay');


//opens the menu when click on hamburger icon

mobileBtn.addEventListener('click', function () {
    menu.className += ' open';
    overlay.className += ' open';
});

//closes menu when click on 'x'

closeBtn.addEventListener('click', function () {
    menu.className += 'menu';
    overlay.className = 'overlay';
});


//closes menu when clicking anywhere in the window

window.addEventListener('click', function (event) {
    if (event.target === overlay) {
        menu.className += 'menu';
        overlay.className = 'overlay';
    }
});

//sideways scrolling effect

$(window).on('load resize scroll', function () {
    $('.bg-static').each(function () {
        var windowTop = $(window).scrollTop();
        var elementTop = $(this).offset().top;
        var leftPosition = windowTop - elementTop;
        $(this)
            .find('.bg-move')
            .css({
            left: leftPosition
        });
    });
});

(function ($) {
    'use strict';

    var form = $('.contact__form'),
        message = $('.contact__msg'),
        form_data;

    // Success function
    function done_func(response) {
        message.fadeIn()
        message.html(response);
        setTimeout(function () {
            message.fadeOut();
        }, 5000);

        form.find('input:not([type="submit"]), textarea').val('');
    }

    // fail function
    function fail_func(data) {
        message.fadeIn()
        message.html(data.responseText);
        setTimeout(function () {
            message.fadeOut(5000);
        }, 5000);
    }

    form.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
            .done(done_func)
            .fail(fail_func);
    });
})(jQuery);
