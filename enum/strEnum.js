/**
 * 字符串枚举
 * 每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。
 * 没有自动增长
 *
 */
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
/**
 * 异构枚举
 * 枚举可以是数字和字符串混合
 */
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
    BooleanLikeHeterogeneousEnum["Yes"] = "YES";
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["A"] = 1] = "A";
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["B"] = 2] = "B";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
// No=0,YES="YES" A=1,B=2
