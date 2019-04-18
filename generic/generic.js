/**
 * 泛型定义
 */
function identity(arg) {
    return arg;
}
var MyIdentity = identity;
// 可以使用不同的泛型参数名
var MyIdentity1 = identity;
// 可以使用带有签名的对象字面量
var MyIdentity2 = identity;
var myIdentity3 = function (arg) { };
var MyIdentity3 = identity;
var MyIdentity4 = identity;
