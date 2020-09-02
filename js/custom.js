jQuery(document).ready(function () {
    // use sctict mode js
    "use strict";


    $('#grid').mixItUp();

    $('.filter-option li a').eq(0).addClass('active');

    $('.client-carousel').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: false,
        dots: false,
        responsiveClass: true,
        item: 5,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
                loop: true,
                nav: false,
            }
        }
    });
    /*** =====================================
     * Parallax
     * =====================================***/
    if ($('.banner-counter').length) {
        $('.banner-counter').parallax("50%", 0.3);
    }


    /**
     * =====================================
     * wow Js
     * =====================================
     */
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: false, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function (box) {},
        scrollContainer: true // optional scroll container selector, otherwise use window
    });
    wow.init();



    // Ads Popup JS
    window.onload = function () {
        $(".newsletter-popup").delay(1000).addClass('popup-visible');
    }

    $('.language').on('click', function (event) {
        event.preventDefault();
        $('.language-dropdown').toggleClass('list');
        $(this).removeClass('list')
    });
    $('.loginoption').on('click', function (event) {
        $('.loginarea').toggleClass('list');
        event.preventDefault();
        $('body').removeClass('list')
    });
    $('.search-i').on('click', function () {
        $('.search-cart').addClass('search-none');
    });
    $('.close-icon').on('click', function () {
        $('.search-cart').removeClass('search-none');
    });
    // Close popup
    $('.newsletter-popup').on('click', function (event) {
        if ($(event.target).is('.bts-popup-close i') || $(event.target).is('.newsletter-popup')) {
            event.preventDefault();
            $(this).removeClass('popup-visible');
        }
    });
    // Close popup when clicking the esc keyboard button
    $(document).keyup(function (event) {
        if (event.which == '27') {
            $('.newsletter-popup').removeClass('popup-visible');
        }
    });


});

jQuery(window).on('load', function () {
    /** =====================================
     * Preloder
     * =====================================*/
    $('.loading').fadeOut();
});


//
//
// /**********************
//  * Scroll To Top
//  ***********************/
function scrollToTop() {
    var scrollTop = $(".scroll-to-top");
    $(window).on('scroll', function () {
        var topPos = $(this).scrollTop();

        if (topPos > 200) {
            $(scrollTop).css("opacity", "1");

        } else {
            $(scrollTop).css("opacity", "0");
        }

    });

    $(scrollTop).on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;

    });

}
scrollToTop();










// Generate Front Filter Lines
function motor_createLine(x1, y1, x2, y2, after_el) {
    var length = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    var angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
    var transform = 'rotate(' + angle + 'deg)';

    var line = jQuery('<div>').insertAfter(after_el).addClass('line').css({
        'position': 'absolute',
        'transform': transform
    }).offset({
        left: x1,
        top: y1
    }).width(length);
    return line;
}



// Front Filter
if ($('#frontsearch-cont').length > 0) {
    for (var i = 1; i <= $('#frontsearch-cont').data('lines-count'); i++) {
        if ($('#frontsearch-cont .frontsearch-res' + i + ' span').length > 0) {
            motor_createLine(
                ($('#frontsearch-cont .frontsearch-res' + i + ' span').offset().left + 17),
                ($('#frontsearch-cont .frontsearch-res' + i + ' span').offset().top + 9),
                ($('#frontsearch-cont .frontsearch-point' + i).offset().left + 6),
                ($('#frontsearch-cont .frontsearch-point' + i).offset().top + 6),
                ('#frontsearch-cont .frontsearch-res' + i)
            );
        }
    }
    $(window).resize(function () {
        if ($('#frontsearch-cont .frontsearch-res' + i + ' span').length > 0) {
            $('#frontsearch-cont .line').remove();
            for (var i = 1; i <= $('#frontsearch-cont').data('lines-count'); i++) {
                motor_createLine(
                    ($('#frontsearch-cont .frontsearch-res' + i + ' span').offset().left + 17),
                    ($('#frontsearch-cont .frontsearch-res' + i + ' span').offset().top + 9),
                    ($('#frontsearch-cont .frontsearch-point' + i).offset().left + 6),
                    ($('#frontsearch-cont .frontsearch-point' + i).offset().top + 6),
                    ('#frontsearch-cont .frontsearch-res' + i)
                );
            }
        }
    });
}


// Front Slider
if ($('#front-slider').length > 0) {
    $('#front-slider').fractionSlider({
        'fullWidth': true,
        'controls': false,
        'pager': true,
        'responsive': true,
        'increase': false,
        'pauseOnHover': false,
        'dimensions': "1170,392",
    });
}