/**
 * 函数类型
 * 参数列表和返回值类型定义
 */

 interface SearchFunc{
   (source:string,subString:string):boolean
 }
 let mySearch: SearchFunc;
 // 参数可以不用写类型，ts会推断出类型
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}