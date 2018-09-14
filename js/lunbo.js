$(function() {
    //添加鼠标移入时的按钮显示
    var timer;
    $('.box').mouseover(function() {
        $('.left').show('1000');
        $('.right').show('1000');
        clearInterval(timer);
    }).mouseleave(function() {
        $('.left').hide('1000');
        $('.right').hide('1000');
        timer = setInterval(right, 4000);
    });
    //
    var arr = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7'];
    var index = 0;
    //下一张
    $('.left').on('click', function() {
        left();
    });
    $('.right').on('click', function() {
        right();
    });
    //自动轮播
    timer = setInterval(right, 5000);
    // 上一页函数；
    function left() {
        arr.unshift(arr[6]);
        arr.pop();
        $('.box li').each(function(index, elem) {
            $(elem).removeClass().addClass(arr[index]);
        })
        index--;
        if (index < 0) {
            index = 6;
        }
        show();
    }
    //下一张
    function right() {
        arr.push(arr[0]);
        arr.shift();
        $('.box li').each(function(index, elem) {
            $(elem).removeClass().addClass(arr[index]);
        })
        index++;
        if (index > 6) {
            index = 0
        };
        show();
    }
    //底部按钮点击切换
    $('.button a').each(function() {
        $(this).on('click', function() {
            var _thisindex = $(this).index();
            var mindex = _thisindex - index;
            if (mindex == 0) {
                return;
            } else if (mindex > 0) {
                var newarr = arr.splice(0, mindex);
                arr = $.merge(arr, newarr);
                $('.box li').each(function(i, e) {
                    $(e).removeClass().addClass(arr[i]);
                })
                index = _thisindex;
                show();
            } else if (mindex < 0) {
                arr.reverse();
                var oldarr = arr.splice(0, -mindex);
                arr = $.merge(arr, oldarr);
                arr.reverse();
                $('.box li').each(function(i, e) {
                    $(e).removeClass().addClass(arr[i]);
                })
                index = _thisindex;
                show();
            }
        })
    });
    //底部按钮高亮
    function show() {
        $('.button a').eq(index).addClass('color').siblings().removeClass('color');
    }
})