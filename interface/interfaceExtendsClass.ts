/**
 * 接口继承类
 * 可以继承累的成员，但不包括其实现
 * 当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，
 * 这个接口类型只能被这个类或其子类所实现（implement）
 */

class Control {
  private state: any;
}

interface SelectableControl extends Control  {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() { }
}

class TextBox extends Control {

}

// 错误：“Image1”类型缺少“state”属性。
class Image1 implements SelectableControl {
  select() { }
}

class Location1 {

}
