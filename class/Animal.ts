/**
 * 继承 通过extends
 */
class Animal {
  private readonly  name: string
  move(distanceInMeters:number=0){
    console.log(`Animal moved ${distanceInMeters}`)
  }
}

class Dog extends Animal {
  bark(){
    console.log('Woof! Woof')
  }
}

const dog = new Dog()
dog.bark()
dog.move(10)

