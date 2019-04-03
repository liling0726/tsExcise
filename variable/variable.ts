/**
 * ts的变量和es6基本一致
 */
/**
 * 使用var存在重定义以及屏蔽问题，无论声明多少次，只会得到一个
 * 存在变量提升问题
 */
var a = 0
let b=0
const constValue = 0

/**
 * 解构
 */
 // 数组解构
 let [firstName,secondName] = [1,2]
 let [first,...rest] = [1,2,3,3]

 // 对象解构
 let o ={
   a:'foo',
   b:2
 }
 let {a:first1='bob',b:second} = o
 // ({ a, b } = { a: "baz", b: 101 })

 // 函数声明
 function f({a,b}=o){

 }

 /**
  * 展开（数组和对象）
  * 
  */
 let firstNum = [1, 2];
let secondNum = [3, 4];
let bothPlus = [0, ...firstNum, ...secondNum, 5];
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };

/**
 * 对象展开的时候，只包含对象自身可枚举属性
 */
class C {
  p = 12;
  m() {
  }
}
let c = new C();
let clone = { ...c };
clone.p; // ok
//Property 'm' does not exist on type '{ p: number; }'
clone.m(); // error!
