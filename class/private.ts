/**
 * private 
 * 不能在声明它的类外部访问
 */
class Animal{
  private name :string;
  constructor(theName:string){
    this.name = theName
  }
  move(){
    console.log('animal move')
  }
}
// 报错 Property 'name' is private and only accessible within class 'Animal'
//new Animal('cat').name 
/**
 * 带有private或者protected成员的类型，
 * 如果其中一个类型包含一个private，那么只有当另外一个类型也存在private，
 * 并且都来自统一处出声明，才认为两个类型是兼容的
 */

 class Rhino extends Animal{
   constructor(){
     super('Rhino') 

   }
  move(){
    console.log('Rhino move')
  }
 }

 class Employee {
   private  name :string
   constructor(theName:string){
     this.name = theName
   }
   move(){
    console.log('Employee move')
  }
 }

 let animal = new Animal('Goat')
 let rhino = new Rhino()
 let employee = new Employee('Bob')
 // Rhino 未定义name属性，可以兼容，如果定义，则不会兼容
 // animal = rhino 要求 Rhino <=  Animal ，含义是 Rhino 必须是Animal 或是 Animal 的派生类 ，对于private/protected 的属性，要求Rhino 和 Animal  必须是 同样的声明
 // animal: Animal = rhino
 animal = rhino
 console.log(animal instanceof Rhino) // true
 animal.move() // Rhino move
 // 报错 Type 'Employee' is not assignable to type 'Animal'.
// Types have separate declarations of a private property 'name'.
 // animal = employee
