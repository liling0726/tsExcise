/**
 * 类
 */
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeter = message;
    }
    Greeter.prototype.greet = function () {
        console.log('hello ' + this.greeter);
    };
    return Greeter;
}());
new Greeter('world').greet();
