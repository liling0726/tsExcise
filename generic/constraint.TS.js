/**
 * 反泛型中包含length属性
 * @param arg
 */
function loggingIndentity(arg) {
    return arg;
}
// Argument of type '3' is not assignable to parameter of type 'Lengthwise'.
loggingIndentity(3); //报错，不包含length
loggingIndentity({ length: 3 }); // 正确
/**
 * 在泛型中约束使用类型参数
 */
function getProperty(obj, key) {
    return obj[key];
}
var x = {
    a: 1,
    b: 2,
    c: 3
};
getProperty(x, 'a');
//Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c"'
getProperty(x, 'm');
