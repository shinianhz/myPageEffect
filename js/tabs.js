$.fn.extend({
    tabs: function(options) {
        //记录this指向
        var _that = this,
            init = null,
            //defaults是options的默认值
            defaults = {
                event: 'click',
                active: 'active',
                show: 'show'
            };
        //$.extend在这里的作用是链接两个对象，如果两个对象中有相同的属性，以后面的属性为准；
        options = $.extend(defaults, options);

        init = function() {
            var tabsBtn = _that.children('ul').children('li'),
                tabsDiv = _that.children('div');
            tabsBtn.eq(0).addClass(options.active); //给第一个按钮添加点击类名
            tabsDiv.eq(0).addClass(options.show); //给第一个展示区域添加类名
            tabsBtn.on(options.event, function() {
                var _index = tabsBtn.index($(this)); //记录（点击）的位置；
                $(this).addClass(options.active).siblings().removeClass(options.active);
                tabsDiv.eq(_index).addClass(options.show).siblings().removeClass(options.show);
            });
        }
        init();
    }
});