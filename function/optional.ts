/**
 * 可选参数和默认参数
 * typescript中的每个参数是必选的，会检查用户是否为每个伧俗传了值
 * 默认参数：name=defaultvalue
 * 可选参数： name?:type
 */
/* function buildName(firstName:string,secondName:string):string{
  return firstName + ''+secondName
}
buildName('bob')//报错，参数太少
buildName('bob','Adams','Sr') //报错，参数太多
buildName('bob','Adams') */

/**
 * 可选参数 ？
 * 
 */
/* function buildName(firstName:string,secondName?:string):string{

  return firstName + ''+secondName
}
buildName('bob')//正确,
buildName('bob','Adams','Sr')//报错，参数太多 */

/**
 * 默认参数
 * @param firstName  
 * @param secondName 
 * 
 */
function buildName(firstName:string,secondName='Smith'):string{

  return firstName + ''+secondName
}
buildName('bob',2)//报错,共享(firstName: string, lastName?: string) => string
buildName('bob','Adams')//报错，参数太多


