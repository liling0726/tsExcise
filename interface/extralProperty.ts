/**
 * 额外属性检查
 * 对象字面量会经过特殊的额外属性检查，如果不包含时，会报错
 */
// interface LabelledValue{
//   label:string
// }
// function printLabel(labelledObj:LabelledValue){
//   console.log(labelledObj.label)
// }
// //  报错
// printLabel({ size:10,label:'Size 10 Object'})

/**
 * 解决办法一
 * var myObj = { size: 10, label: 'Size 10 Object' };
 * printLabel(myObj)
 */
// interface LabelledValue{
//   label:string
// }
// function printLabel(labelledObj:LabelledValue){
//   console.log(labelledObj.label)
// }
// var myObj = { size: 10, label: 'Size 10 Object' };
// printLabel(myObj)

 
/**
 * 解决方法二 
 * 使用断言
 * printLabel({ size:10,label:'Size 10 Object'} as LabelledValue)
 */
// interface LabelledValue{
//   label:string
// }
// function printLabel(labelledObj:LabelledValue){
//   console.log(labelledObj.label)
// }
// printLabel({ size:10,label:'Size 10 Object'} as LabelledValue)

/**
 * 解决办法三
 * 添加一个字符串索引
 * [propName:string]:any 
 */
interface LabelledValue{
  label:string
  [propName:string]:any
}
function printLabel(labelledObj:LabelledValue){
  console.log(labelledObj.label)
}
printLabel({ size:10,label:'Size 10 Object'})