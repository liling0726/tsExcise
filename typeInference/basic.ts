/**
 * 基础
 * 通过初始化变量和成员，推断默认参数值和函数返回值
 */
// 类型为number
 let x =3
 // 函数返回类型
 function add(a: number, b: number) {
  return a + b;
}
// 结构化
const foo = {
  a:123
}
// 报错
foo.a = 'hello'

// 解构
let { a } = foo;

a = 'hello' // 报错

//函数参数类型/返回值也能通过赋值来推断
type Adder = (a: number, b: number) => number;
let foo1: Adder = (a, b) => a + b;

 /**
  * 最佳通用类型
  * 1. 从成员元素中推断出推断出通用类型，所有成员类型的集合
  * 2.找不到通用类型，就是用联合数组类型,或者明确指定类型
  * 
  */
 // 联合类型 (Rhino | Elephant | Snake)[]
 class Animal{

 }
 class Rhino {

 }
 class Elephant {

 }
 class Snake {
   
 }
  let zoo = [new Rhino(), new Elephant(), new Snake()];


 /**
  * 上下文类型
  * 在表达式的类型与所处的位置相关时
  * 上下文表达式如果包含明确信息，则上下文类型会被忽略
  */
 window.onmousedown = function(mouseEvent) {
  console.log(mouseEvent.button);  //<- Error
};