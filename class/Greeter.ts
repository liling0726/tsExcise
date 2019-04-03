/**
 * 类
 */
class Greeter{
  greeter:string;
  constructor(message:string){
    this.greeter = message
  }
  greet(){
    console.log('hello '+this.greeter)
  }
}
new Greeter('world').greet()