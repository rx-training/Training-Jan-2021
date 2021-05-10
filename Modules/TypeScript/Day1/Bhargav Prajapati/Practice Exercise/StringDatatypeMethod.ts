
var str:string="Hello World";
var str1:string=" How Are You";

console.log("charAt Method :- "+ str.charAt(7));
console.log("Concat Method :- "+ str.concat(str1));
console.log("Index Of Method :-  "+str.indexOf('H'));
console.log("Index Of Method :-  "+str.indexOf('Q'));
console.log("Index Of Method :-"+str.indexOf('W'));

var str3:string ="Hello Javascript";
var str4:string ="TypeScript";
console.log("String Without Replacing :- "+ str3);
console.log("String With Replacing :- "+str3.replace("Javascript",str4));

var str5="orange ,Mengo ,Banana";
var  data=str5.split(',');
console.log("Splited Element :-");
data.forEach(element => {
    console.log(element);
});

var str5:string="hello world";
console.log("Upper Case String :- " + str5.toUpperCase());
console.log("Lower Case String :- "+ str5.toLocaleLowerCase());


var str6:string="               Hello World                   ";
console.log("Trim Method :-"+str6.trim());



console.log("SubString Method :- "+str5.substring(2,5));
console.log("Substr Mthod :- "+str5.substr(5));

