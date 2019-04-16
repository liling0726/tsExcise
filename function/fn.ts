
function myAdd(x:number,y:number):number{
  return x+y
}

let myAdd1 = function(x:number,y:number):number{
  return x+y
}
/**
 * 完整函数定义
 * 主要参数类型是匹配的，参数名可以不一致（baseValue和x）
 * 函数和返回值之前使用 =>
 * 如果没有返回值，必须使用void而不能为空
 * @param x 
 * @param y 
 */
let myAdd2: (baseValue: number, increment: number) => number =
    function(x: number, y: number): number { return x + y; };

    console.log(myAdd(3,2))