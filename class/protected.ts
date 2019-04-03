/**
 * protected 和private相似，区别在于protected可以被继承，在派生类中访问和修改
 */
class Person {
  protected name :string
  protected constructor(name:string){
    this.name = name
  }
}

class Employee extends Person{
  private department: string
  constructor(name:string,department:string){
    super(name)
    this.department = department
  }
  getElevatorPitch(){
    console.log(`hello,my name is ${this.name} and I work in ${this.department}`)
  }

  setName(name:string){
    this.name = name
  }
}

let howard = new Employee('howard','Sales')
howard.setName('hahha')
howard.getElevatorPitch() // hello,my name is hahha and I work in Sales

let John = new Person('John') // 报错