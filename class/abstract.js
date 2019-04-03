/**
 * 作为其他派生类使用
 * 抽象类中国年的抽象方法不包含具体实现并且必须在派生类中实现
 * 派生类中存在为生命的方法报错
 * abstrct 修饰器
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
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log('Department name' + this.name);
    };
    return Department;
}());
var AccountDepartment = /** @class */ (function (_super) {
    __extends(AccountDepartment, _super);
    function AccountDepartment() {
        var _this = _super.call(this, 'Accounting and Auditing') || this;
        _this.name = 'name';
        return _this;
    }
    // 没有该方法报错
    AccountDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday at 10am.');
    };
    AccountDepartment.prototype.generateReports = function () {
        console.log('Generating accounting reports...');
    };
    return AccountDepartment;
}(Department));
var department; // 允许创建一个对抽象类型的引用
//department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
department.generateReports(); // 错误: 方法在声明的抽象类中不存在
