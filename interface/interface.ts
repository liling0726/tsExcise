/**
 * 接口
 * 只要传入的对象满足提到的必要条件，那就是被允许的
 */
interface LabellledValue{
  label:string
}
function printLabel(labelledObj:LabellledValue){
  console.log(labelledObj.label)
   // 未定义size，报错
  //console.log(labelledObj.label,labelledObj.size)
}

let myObj = { size:10,label:'Size 10 Object'}
printLabel(myObj)