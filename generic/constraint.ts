/**
 * 泛型约束
 * 对泛型中的属性进行约束，比如包含某一属性之类
 */
interface Lengthwise{
  length:number
}
/**
 * 反泛型中包含length属性
 * @param arg 
 */
function loggingIndentity<T extends Lengthwise>(arg:T):T{
  return arg
}
// Argument of type '3' is not assignable to parameter of type 'Lengthwise'.
loggingIndentity(3)//报错，不包含length
loggingIndentity({length:3}) // 正确

/**
 * 在泛型中约束使用类型参数
 */

 function getProperty<T,K extends keyof T>(obj:T,key:K){
   return obj[key]
 }

 const x={
   a:1,
   b:2,
   c:3
 }
 getProperty(x,'a')
 //Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c"'
 getProperty(x,'m')