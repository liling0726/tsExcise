/**
 * 类类型 implements
 * 接口描述的是类的公共部分，不会帮你检查某些私有成员
 */
// interface ClockInterface {
//   currentTime: Date;
// }

// class Clock implements ClockInterface {
//   currentTime: Date;
//   constructor(h: number, m: number) { }
// }

/**
 * 类静态部分和实例部分的区别
 * 当一个类实现了一个接口时，只对其实例部分进行类型检查。 constructor存在于类的静态部分，所以不在检查的范围内。
 */
// interface ClockConstructor {
//   new (hour: number, minute: number);
// }
// // 报错
// class Clock implements ClockConstructor {
//   currentTime: Date;
//   constructor(h: number, m: number) { }
// }

/**
 * 直接操作类的静态部分
 * createClock的第一个参数是ClockConstructor类型，在createClock(AnalogClock, 7, 32)里，会检查AnalogClock是否符合构造函数签名。
 */
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
      console.log("beep beep");
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
      console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);