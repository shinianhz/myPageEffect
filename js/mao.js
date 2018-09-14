$(function() {
    $('.nav a').on('click', function(e) {
        e = e || event;
        e.preventDefault();
        var top = $("#" + $(this).attr('title')).offset().top;
        // console.log(top);
        $('body,html').animate({
            'scrollTop': top
        }, 2000)
    })
    $('.top').on('click', function(e) {
        e = e || event;
        e.preventDefault();
        $('body,html').animate({
            'scrollTop': 0
        }, 1000)
    })
})