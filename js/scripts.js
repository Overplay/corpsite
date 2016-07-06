$(document).ready(function () {/* smooth scrolling for scroll to top */
    $('.scroll-top').click(function () {
        $('body,html').animate({scrollTop: 0}, 1000);
    })
    /* smooth scrolling for scroll down */
    $('.scroll-down').click(function () {
        $('body,html').animate({scrollTop: $(window).scrollTop() + 1000}, 1000);
    })

    /* highlight the top nav as scrolling occurs */
    $('body').scrollspy({target: '#navbar'})

    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
    });
    

});

$('#mce-success-response').bind('DOMSubtreeModified', function(){
    $('#mc-embedded-subscribe-form').slideUp();
});