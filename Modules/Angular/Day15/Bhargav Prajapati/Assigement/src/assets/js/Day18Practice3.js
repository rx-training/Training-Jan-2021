document.writeln("The Differnce between Var KeyWord And Let keyword"+"<br>");
document.writeln("var Keyword"+"<br>");
var num1=20
if(true)
{
    var num1=40;//local variable 
    document.writeln(num1+"<br>");
}
document.writeln(num1+"<br>");//logically global  variable are prints
// so that var keyword  are access the local variable so we can say that the local let keyword is not depending on the scope of the variable so that we can use the let keyword
document.writeln("let Keyword"+"<br>");
let num2=70;
if(true)
{
    let num2=50;
    document.writeln(num2+"<br>");
}
document.writeln(num2+"<br>");
//let keyword is depending on the scop of the element the scop of the  num2=50   inside the  if statement.
