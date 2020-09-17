//(function ($) {
//    'use strict';
//
//    var form = $('.contact__form'),
//        message = $('.contact__msg'),
//        form_data;
//
//    // Success function
//    function done_func(response) {
//        message.fadeIn()
//        message.html(response);
//        setTimeout(function () {
//            message.fadeOut();
//        }, 5000);
//
//        form.find('input:not([type="submit"]), textarea').val('');
//    }
//
//    // fail function
//    function fail_func(data) {
//        message.fadeIn()
//        message.html(data.responseText);
//        setTimeout(function () {
//            message.fadeOut(5000);
//        }, 5000);
//    }
//
//    form.submit(function (e) {
//        e.preventDefault();
//        form_data = $(this).serialize();
//        $(this).trigger("reset");
//        console.log("I'm reset!")
//        $.ajax({
//            type: 'POST',
//            url: form.attr('action'),
//            data: form_data
//        })
//            .done(done_func)
//            .fail(fail_func);
//    });
//})(jQuery);


window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above

    var form = document.getElementById("my-form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        button.style = "display: none ";
        status.innerHTML = "Thanks! Your message was sent";
    }

    function error() {
        status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}
