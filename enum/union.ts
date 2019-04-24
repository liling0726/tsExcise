/**
 * 联合枚举和枚举成员的类型
 * 字变量枚举成员
 * 任何字符串字面量（例如： "foo"， "bar"， "baz"）
 *任何数字字面量（例如： 1, 100）
 *应用了一元 -符号的数字字面量（例如： -1, -100）
 * 枚举成员是一种类型
 * 枚举类型是每个枚举城成员的联合
 */

enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

let c: Circle = {
  // The expected type comes from property 'kind' which is declared here on type 'Circle'
  kind: ShapeKind.Square, //  只能是 ShapeKind.Circle
  //    ~~~~~~~~~~~~~~~~ Error!
  radius: 100,
}
enum E {
  Foo,
  Bar,
}
//枚举成员是一种类型
function f(x: E) {
  // E.Foo 是一种类型，所以x !== E.Foo永远为Ttrue
  if (x !== E.Foo || x !== E.Bar) {
      //             ~~~~~~~~~~~
      // Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.
  }
}