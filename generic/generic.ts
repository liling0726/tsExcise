/**
 * 泛型定义
 */

 function identity<T>(arg:T):T{
   return arg
 }

 let MyIdentity :<T>(arg:T)=>T = identity
 // 可以使用不同的泛型参数名
 let MyIdentity1:<U>(arg:U)=>U =identity
 // 可以使用带有签名的对象字面量
 let MyIdentity2 :{<T>(arg:T):T} = identity

 /**
  * 定义泛型接口
  *
  */
 interface GenericIdentityFn{
   <T>(arg:T):T
 }
 let MyIdentity3 :GenericIdentityFn = idetify
/**
 * 泛型参数当作整个接口的一个参数，接口里的其它成员也能知道这个参数的类型了
 */
 interface GenericIdentityFn1<T>{
  (arg:T):T
}

let MyIdentity4 :GenericIdentityFn1<string> = idetify