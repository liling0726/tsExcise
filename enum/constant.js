/**
 *
 * 常量成员
  * 一个枚举表达式字面量（主要是字符串字面量或数字字面量）
  * 一个对之前定义的常量枚举成员的引用（可以是在不同的枚举类型中定义的）
  * 带括号的常量枚举表达式
  * 一元运算符 +, -, ~其中之一应用在了常量枚举表达式
  * 常量枚举表达式做为二元运算符 +, -, *, /, %, <<, >>, >>>, &, |, ^的操作对象。 若常数枚举表达式求值后为 NaN或 Infinity，则会在编译阶段报错。
 * 除去常量表达式，就是计算成员
*/
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 0] = "Read";
    FileAccess[FileAccess["Write"] = 0] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 0] = "ReadWrite";
    // computed member
    FileAccess["Listen"] = "listen"; // 报错 Computed values are not permitted in an enum with string valued members.
})(FileAccess || (FileAccess = {}));
