function printLabel(labelledObj) {
    console.log(labelledObj.label);
    // 未定义size，报错
    //console.log(labelledObj.label,labelledObj.size)
}
var myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
