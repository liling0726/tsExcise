/**
 * 函数兼容
 * 函数对比的有：
 * 1.参数，右边的参数在左边找到对应类型参数，左边包含右边
 * 2.返回值 类型相等,或者其中一个无返回值，或者为any
 */
let x=(a:number) =>4
let y =(b:number,s:string)=>1
//x=y // 报错
y=x


let a=(arg1:number)=>void 0
let b=function(arg1:number):number{return arg1}
a=b
b=a