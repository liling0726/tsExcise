/**
 * 剩余参数...
 */
function buildName(firstName,...resetOfName:string[]){
  return firstName+''+resetOfName.join('')
}