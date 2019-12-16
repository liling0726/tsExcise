var x;
var y = { name: 'leio', location: 'beiijing' };
// 正确，类型兼容 left->right 相当于右边要包含左边的成员
x = y;
function greet(n) {
    console.log(n.name, n.location);
}
greet(y);
