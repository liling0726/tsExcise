var p1 = { x: 1, y: 2 };
// 报错
p1.x = 5;
/**
 * typeScript 具有ReadonlyArray<T> 类型，与Array<T>相似，把可变方法去掉
 *
 */
var a = [1, 2, 3, 4];
var ro = a;
//  报错 Index signature in type 'readonly number[]' only permits reading
ro[1] = 12;
// 报错
ro.push(5);
// 报错
ro.length = 100;
// Type 'readonly number[]' is missing the following properties from type 'number[]': pop, push, reverse, shift, and 3 more.
a = ro;
a = ro;
ro[10] = 10;
a[3] = 100;
console.log(a[3]);
