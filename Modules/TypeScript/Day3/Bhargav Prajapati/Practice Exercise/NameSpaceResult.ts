/// <reference path="Calc.ts"/>

var data= new Calc.Calculator();

var sum=data.Addition(2,5);
console.log(`Addition Of Two Number :-  ${sum}`);

var sub=data.Subtraction(5,9);
console.log(`Subtraction Of Two Number :- ${sub}`);

var mul=data.Multiplication(5,5);
console.log(`Multiplication Of Two Number :- ${mul}`);

var div=data.Division(10,7)
console.log(`Division Of Two Number :- ${div}`);

var mod=data.Modulo(11,15);
console.log(`Modulo of Two Number :- ${mod}`);  
