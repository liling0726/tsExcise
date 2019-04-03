var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * ts的变量和es6基本一致
 */
/**
 * 使用var存在重定义以及屏蔽问题，无论声明多少次，只会得到一个
 * 存在变量提升问题
 */
var a = 0;
var b = 0;
var constValue = 0;
/**
 * 解构
 */
// 数组解构
var _a = [1, 2], firstName = _a[0], secondName = _a[1];
var _b = [1, 2, 3, 3], first = _b[0], rest = _b.slice(1);
// 对象解构
var o = {
    a: 'foo',
    b: 2
};
var _c = o.a, first1 = _c === void 0 ? 'bob' : _c, second = o.b;
// ({ a, b } = { a: "baz", b: 101 })
// 函数声明
function f(_a) {
    var _b = _a === void 0 ? o : _a, a = _b.a, b = _b.b;
}
/**
 * 展开（数组和对象）
 *
 */
var firstNum = [1, 2];
var secondNum = [3, 4];
var bothPlus = [0].concat(firstNum, secondNum, [5]);
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
var search = __assign({}, defaults, { food: "rich" });
/**
 * 对象展开的时候，进包含对象自身可枚举属性
 */
var C = /** @class */ (function () {
    function C() {
        this.p = 12;
    }
    C.prototype.m = function () {
    };
    return C;
}());
var c = new C();
var clone = __assign({}, c);
clone.p; // ok
clone.m(); // error!
