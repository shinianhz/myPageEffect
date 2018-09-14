(function(window) {
    var base = function(selector) {
        if (typeof selector === 'function') {
            ready(selector);
            return;
        } else {
            return new Base(selector);
        }

    };
    //选择元素
    function Base(selector) {
        var elements = document.querySelectorAll(selector),
            i;
        for (i = 0; i < elements.length; i++) {
            this[i] = elements[i];
        }
        this['length'] = elements.length;
    }
    //在原型中添加方法，让通过Base构造的实例都可以继承Base原型中的属性；
    Base.prototype = {
        //对Base的原型重写，则重写后的constructor属性不在指向Base，需要将constructor属性重新指向Base；
        constructor: Base,
        //each函数 遍历经过QueryselectorAll选择出来元素类数组，
        // 即遍历每一个选择出来的元素
        each: function(callback) {
            for (var i = 0; i < this.length; i++) {
                callback(i, this[i]);
            }
        },
        //样式属性函数
        css: function(style, value) {
            var str = '';
            //判断输入的是单个属性还是多个属性
            //单个属性为String类型
            //多个属性为Object类型
            if (typeof style === "string" && value) {
                //判断输入的类型为String且Value存在;
                this.each(function(index, elem) {
                    elem.style = style + ":" + value;
                });
            } else {
                //输入的为多个属性的时候；
                each(style, function(key, value) {
                    str += key + ':' + value + ';';
                });
                this.each(function(index, elem) {
                    elem.style = str;
                })
            }
        },
        //事件函数
        on: function(type, callback) {
            if (typeof type === "string" && this[0]) {
                if (this[0].addEventListener) {
                    this.each(function(index, elem) {
                        elem.addEventListener(type, callback);
                    })
                } else if (this[0].attachEvent) {
                    this.each(function(index, elem) {
                        elem.attachEvent('on' + type, callback);
                    });
                }
            } else if (typeof type === "object" && thhis[0]) {
                if (this[0].addEventListener) {
                    this.each(function(index, elem) {
                        each(type, function(key, val) {
                            elem.addEventListener(key, val);
                        })
                    })
                } else if (this[0].attachEvent) {
                    this.each(function(index, elem) {
                        each(type, function(key, val) {
                            elem.attachEvent('on' + key, val);
                        })
                    });
                }
            }
        }

    };
    //就绪函数
    function ready(callback) {
        if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', function() {
                document.removeEventListener('DOMContentLoaded', arguments.callee);
                callback();
            });
        } else if (document.attachEvent) { //兼容IE
            document.attachEvent('onreadystatechange', function() {
                if (document.readyState == 'complete') {
                    document.attachEvent('onreadystatechanng'.arguments.callee);
                    callback();
                }
            });
        }
    };
    //each函数,遍历对象中的每一项，并把每一项传出去作为其他函数的参数
    function each(obj, callback) {
        var item;
        for (item in obj) {
            callback(item, obj[item]);
        }
    }
    window.$ = window.base = base;
})(window);