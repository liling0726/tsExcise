/**
 * 基础
 * 通过初始化变量和成员，推断默认参数值和函数返回值
 */
// 类型为number
var x = 3;
// 函数返回类型
function add(a, b) {
    return a + b;
}
// 结构化
var foo = {
    a: 123
};
// 报错
foo.a = 'hello';
// 解构
var a = foo.a;
a = 'hello'; // 报错
var foo1 = function (a, b) { return a + b; };
/**
 * 最佳通用类型
 * 1. 从成员元素中推断出推断出通用类型，所有成员类型的集合
 * 2.找不到通用类型，就是用联合数组类型,或者明确指定类型
 *
 */
// 联合类型 (Rhino | Elephant | Snake)[]
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Rhino = /** @class */ (function () {
    function Rhino() {
    }
    return Rhino;
}());
var Elephant = /** @class */ (function () {
    function Elephant() {
    }
    return Elephant;
}());
var Snake = /** @class */ (function () {
    function Snake() {
    }
    return Snake;
}());
var zoo = [new Rhino(), new Elephant(), new Snake()];
/**
 * 上下文类型
 * 在表达式的类型与所处的位置相关时
 * 上下文表达式如果包含明确信息，则上下文类型会被忽略
 */
window.onmousedown = function (mouseEvent) {
    console.log(mouseEvent.button); //<- Error
};
