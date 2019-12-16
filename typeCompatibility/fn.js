/**
 * 函数兼容
 * 函数对比的有：
 * 1.参数，右边的参数必须左边一致，左边包含右边
 * 2.返回值 类型相等
 */
var x = function (a) { return 4; };
var y = function (b, s) { return 1; };
//x=y // 报错
y = x;
var a = function (arg1) { return void 0; };
var b = function (arg1) { return arg1; };
a = b;
b = a;
