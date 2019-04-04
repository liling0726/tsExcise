/**
 * 可选属性 ？
 * 1. 对存在的属性进行预定义
 * 2. 可以捕获不存在的属性的错误
 */
interface SquareConfig{
  color?:string,
  width?: number
}
function  createSquare(config:SquareConfig):{color:string,area:number}{
  let newSquare = { color:"white",area:100}
  if(config.color){
    newSquare.color = config.color
  }
  if(config.width){
    newSquare.area = config.width * config.width
  }
  return newSquare
}

let mySquare = createSquare({color:'black'})