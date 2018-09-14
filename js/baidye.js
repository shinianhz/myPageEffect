$(function() {
    var img = ['images/1.png', 'images/2.png', 'images/3.png'];
    $('.btn>li>img').on('click', function() {
        $('.show').empty();
        var i = $('.btn>li>img').index($(this));
        console.log(i);
        $('.show').css('background', 'url(' + img[i] + ')');
        for (var j = 0; j < Math.ceil($('.show').height() / 5); j++) {
            var Inner = $('<div></div>');
            Inner.css({
                'height': '5px',
                'background': 'pink',
                'width': '100%',
                'position': 'absolute',
                'top': j * 5 + 'px'
            });
            $('.show').append(Inner);
        }
        $('.show>div').each(function(index, elem) {
            $(elem).delay(index * 30).fadeOut(300);
        });

    });
})