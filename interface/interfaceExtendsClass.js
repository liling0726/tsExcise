/**
 * 接口继承类
 * 可以继承累的成员，但不包括其实现
 * 当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，
 * 这个接口类型只能被这个类或其子类所实现（implement）
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TextBox;
}(Control));
// 错误：“Image1”类型缺少“state”属性。
var Image1 = /** @class */ (function () {
    function Image1() {
    }
    Image1.prototype.select = function () { };
    return Image1;
}());
var Location1 = /** @class */ (function () {
    function Location1() {
    }
    return Location1;
}());
