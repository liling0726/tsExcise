/**
 * 函数类型
 * 参数列表和返回值类型定义
 */
var mySearch;
// 参数可以不用写类型，ts会推断出类型
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
