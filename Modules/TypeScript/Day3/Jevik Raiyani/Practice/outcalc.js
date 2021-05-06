var calc;
(function (calc) {
    class Calculate {
        constructor(n1, n2) {
            this.num1 = n1;
            this.num2 = n2;
        }
        sum() {
            return this.num1 + this.num2;
        }
        sub() {
            return this.num1 - this.num2;
        }
        mul() {
            return this.num1 * this.num2;
        }
        div() {
            return this.num1 / this.num2;
        }
        mod() {
            return this.num1 % this.num2;
        }
    }
    calc.Calculate = Calculate;
})(calc || (calc = {}));
/// <reference path = "calc.ts"/>
var a = new calc.Calculate(15, 2);
console.log(a.sum());
console.log(a.sub());
console.log(a.mul());
console.log(a.div());
console.log(a.mod());
