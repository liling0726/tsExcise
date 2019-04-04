function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
//  报错
printLabel({ size: 10, label: 'Size 10 Object' });
/**
 * 解决办法一
 * var myObj = { size: 10, label: 'Size 10 Object' };
 * printLabel(myObj)
 */
/**
 * 解决方法二
 *
 */
