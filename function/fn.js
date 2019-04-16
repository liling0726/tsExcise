function myAdd(x, y) {
    return x + y;
}
var myAdd1 = function (x, y) {
    return x + y;
};
/**
 * 完整函数定义
 * 主要参数类型是匹配的，参数名可以不一致（baseValue和x）
 * @param x
 * @param y
 */
var myAdd2 = function (x, y) { return x + y; };
console.log(myAdd(3, 2));
