/**
 * 只读属性
 * 在对象刚创建的时候修改值
 * const和readonly区别：
 * 作为变量使用const，作为属性使用readonly
 */
interface Point{
  readonly x :number
  readonly y :number
}

let p1 :Point = {x:1,y:2}
// 报错
p1.x = 5

/**
 * typeScript 具有ReadonlyArray<T> 类型，与Array<T>相似，把可变方法去掉
 * 
 */
let a:number[] = [1,2,3,4]
let ro :ReadonlyArray<number> = a
//  报错 Index signature in type 'readonly number[]' only permits reading
ro[1] = 12
// 报错
ro.push(5)
// 报错
ro.length=100
// 不可以把ReadonlyArray数组赋值到普通数组上，可以通过断言重写
// Type 'readonly number[]' is missing the following properties from type 'number[]': pop, push, reverse, shift, and 3 more.
a=ro
// 正确
a= ro as number[]
a[3] =100