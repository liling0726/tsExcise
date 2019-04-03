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
 * private
 * 不能在声明它的类外部访问
 */
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function () {
        console.log('animal move');
    };
    return Animal;
}());
// 报错 Property 'name' is private and only accessible within class 'Animal'
//new Animal('cat').name 
/**
 * 带有private或者protected成员的类型，
 * 如果其中一个类型包含一个private，那么只有当另外一个类型也存在private，
 * 并且都来自统一处出声明，才认为两个类型是兼容的
 */
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, 'Rhino') || this;
    }
    Rhino.prototype.move = function () {
        console.log('Rhino move');
    };
    return Rhino;
}(Animal));
var Employee = /** @class */ (function () {
    function Employee(theName) {
        this.name = theName;
    }
    Employee.prototype.move = function () {
        console.log('Employee move');
    };
    return Employee;
}());
var animal = new Animal('Goat');
var rhino = new Rhino();
var employee = new Employee('Bob');
// Rhino 未定义name属性，可以兼容，如果定义，则不会兼容
// animal = rhino 要求 Rhino <=  Animal ，含义是 Rhino 必须是Animal 或是 Animal 的派生类 ，对于private/protected 的属性，要求Rhino 和 Animal  必须是 同样的声明
// animal: Animal = rhino
animal = rhino;
console.log(animal instanceof Rhino); // true
animal.move(); // Rhino move
// 报错 Type 'Employee' is not assignable to type 'Animal'.
// Types have separate declarations of a private property 'name'.
// animal = employee
