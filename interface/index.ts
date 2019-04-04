/**
 * 可索引类型
 * 支持两种索引签名：字符串和数字
 * 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型
 * 可以将索引设置为只读 readonly
 */
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
/**
 * 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型
 */ 
class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal! 
// number 是Dog，string是Animal则正确
interface NotOkay {
  [x: number]: Animal;
  [x: string]: Dog;
} 

//字符串索引签名能够很好的描述dictionary模式，并且它们也会确保所有属性与其返回值类型相匹配
interface NumberDictionary {
  [index: string]: number;
  length: number;    // 可以，length是number类型
  name: string       // 错误，`name`的类型与索引类型返回值的类型冲突
}