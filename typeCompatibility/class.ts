/* class Animal {
  feet: number;
  constructor(name: string, numFeet: number) { }
}

class Size {
  feet: number;
  flee:number;
  constructor(numFeet: number) { }
}

let a: Animal;
let s: Size;

a = s;  // OK
s = a;  // Error */


/**
 * 私有成员
*/
class Parent{
  protected voice : string;
}
class Animal extends Parent{
  feet: number;
  constructor(name: string, numFeet: number) { 
    super()
  }
}

class Size {
  feet: number;
  constructor(numFeet: number) {
   }
}
let a: Animal;
let s: Size;

a = s;  // Error
s = a;  // OK