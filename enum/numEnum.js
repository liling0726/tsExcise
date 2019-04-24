/**
 * 数字枚举，
 * 未初始化，默认值从0开始，其余成员自动+1
 * 未初始化成员依据前一成员自动增长
 */
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 1] = "A";
    Enum[Enum["B"] = 2] = "B";
    Enum[Enum["C"] = 5] = "C";
    Enum[Enum["D"] = 6] = "D";
})(Enum || (Enum = {}));
// A=1,B=2,C=5,D=6
/**
 * 计算的数字枚举
 * 不带初始化的枚举要放在第一为位，或者是放在初始化了数字常量的枚举后面
 */
function getSomeValue() {
    return 3;
}
/* enum computedEnum{
  A=getSomeValue(),
  B // 报错，Enum member must have initializer
} */
var computedEnum1;
(function (computedEnum1) {
    computedEnum1[computedEnum1["A"] = getSomeValue()] = "A";
    computedEnum1[computedEnum1["B"] = 1] = "B";
    computedEnum1[computedEnum1["C"] = 2] = "C";
})(computedEnum1 || (computedEnum1 = {}));
