/**
 * 运行时的枚举，是真正存在的对象
 * 
 */
enum E {
  X, Y, Z
}
function f(obj: { X: number }) {
  return obj.X;
}

// Works, since 'E' has a property named 'X' which is a number.
f(E);
/**
 * 数据的枚举成员可以反向映射
 */
enum Enum {
  A
}
let a = Enum.A;
let nameOfA = Enum[a]; // "A"

/**
 * const枚举
 * 避免在额外生成的代码上的开销和额外的非直接的对枚举成员的访问
 * 常量枚举成员在使用的地方会被内联进来
 * 不允许包含计算成员
 */

const enum Directions {
  Up,
  Down,
  Left,
  Right,
  Middel=3+3
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
/**
 * 外部枚举
 * 描述已经存在的枚举类型的形状
 * 它的值在编译时不存在，只有等到运行时才知道
 * 在正常的枚举里，没有初始化方法的成员被当成常数成员。 对于非常数的外部枚举而言，没有初始化方法时被当做需要经过计算的
 */
declare enum Enum1 {
  A = 1,
  B,
  C = 2
}
console.log(Enum1.A)c'd