/**
 * 泛型类
 * 和接口相似，在类名后面添加<T>
 *
 */
class GenericNumber<T>{
  zeroValue:T
  add:(x:T,y:T)=> T
}

/**
 * 在泛型中使用类类型
 */
class BeeKeeper {
  hasMask: boolean;
}

class ZooKeeper {
  nametag: string;
}

class Animal {
  numLegs: number;
}

class Bee extends Animal {
  keeper: BeeKeeper;
}

class Lion extends Animal {
  keeper: ZooKeeper;
}

class Monster{
  keeper:ZooKeeper
}
function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!
createInstance(Monster).keeper.nametag;  //报错