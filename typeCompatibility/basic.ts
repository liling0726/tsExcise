/**
 * 类型兼容
 */
interface Named{
  name:string
  // age:number 
}

let x:Named
let y = {name:'leio',location:'beiijing'}
// 正确，类型兼容 left->right 相当于右边要包含左边的成员
x=y

function greet(n:Named){
  console.log(n.name)
}
greet(y)