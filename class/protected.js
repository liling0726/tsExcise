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
/**
 * protected 和private相似，区别在于protected可以被继承，在派生类中访问和修改
 */
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        console.log("hello,my name is " + this.name + " and I work in " + this.department);
    };
    Employee.prototype.setName = function (name) {
        this.name = name;
    };
    return Employee;
}(Person));
var howard = new Employee('howard', 'Sales');
howard.setName('hahha');
howard.getElevatorPitch(); // hello,my name is hahha and I work in Sales
var John = new Person('John'); // 报错
