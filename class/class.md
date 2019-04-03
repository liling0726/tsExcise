## class 修饰符
## 继承 extends
## private
无法在声明它的类外部调用，带有private或者protected成员的类型，如果其中一个类型包含一个private，那么只有当另外一个类型也存在private，并且都来自统一处出声明，才认为两个类型是兼容的
 
 ## protected
  无法在声明它的类外部调用，可以在派生类中访问和赋值，不能在包含它的类外被实例化，但是能被继承
  
  ## readonly
  readonly只有在声明和constuctor中赋值
  
 ## 存取器（get和set）
 
 ## 静态属性 static
 ## 抽象类 abstract
 抽象类中的抽象方法必须在派生类中实现，并且派生类中存在抽象类不存在的方法时，报错