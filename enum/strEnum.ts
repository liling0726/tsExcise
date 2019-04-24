/**
 * 字符串枚举
 * 每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。
 * 没有自动增长
 *
 */
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
/**
 * 异构枚举
 * 枚举可以是数字和字符串混合
 */
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
  A=1,
  B
}
// No=0,YES="YES" A=1,B=2