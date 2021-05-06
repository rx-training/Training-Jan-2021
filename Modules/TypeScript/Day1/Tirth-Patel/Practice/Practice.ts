var age :  number  = 21;
console.log(age);

var Name  :string ="ABCDEFG";
console.log(Name);

var first :number =1232341.23232;
var second:number = 0X37CF //hexaDecimal
var third:number =0o377;//octal
var fourth :number =0b111001; //Binary

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);

console.log(first.toExponential(2));
console.log(first.toFixed(5));
console.log(first.toPrecision(3));
console.log("hello number is string "+first.toString());

var unsued:void ;
console.log (unsued);//by default it is undefined You can define it to null also

function Hello():void{
  //  alert("no return type function")
}
console.log(Hello());

var firstname  :string = "Tirth";
var Lastname  :string = "Patel";
console.log("Full name is :"+`${firstname} ${Lastname}`);
var sentence :string = "  this is new sentence of the period  ...  ";
var secondsent ="hello from typescripts";

 console.log(sentence.charAt(6));
 console.log(sentence.concat(secondsent));
 console.log(sentence.replace("sentence","String"));
 var split : string[] = sentence.split(" ");
 console.log(split);
 console.log(sentence.trim());


 //NUll

 var num:number = null;
var num2 :number;
console.log(num +" "+num2);
//any
//super type of all data types
var identifier:any = val;
var val:any ="hei";
console.log(val);
val = 123;
console.log(val);

function printval(x:any , y:any):void{
console.log (x+y);
}

printval("Hello","any ");

printval(12,10);

//multi type array

var multi :(string | number)[] = ['Apple','orange',6,'banana',12];

for(var index in multi)
{
    console.log(multi[index]);

}

//use for of loop
for(var value of multi){
    console.log(value);
}

var fruits :string[]=['A','Orange','banana'];
console.log(fruits.pop());
fruits.push('apple');
console.log(fruits);
var newArray = fruits.filter((fruits,i,arr)=>{
    return fruits.length<2;
})
console.log(newArray);

enum    PrintMedia{
    Newspaper, //0
    newsLetter,//1
    Internet  //2
}

//enum as return type
 function getMedia(medianame:string):PrintMedia{
     if(medianame =='forbes' || medianame =='Outlook'){
         return PrintMedia.Internet;
     }
 }

 let mediatype :PrintMedia =getMedia('forbes'); //reeturs 2
console.log(mediatype);
 console.log(PrintMedia['newsLetter']);

let books = [{title:"ABcd",Author:"xyz",Availible:false},
{title:"ABcd2",Author:"xyz2",Availible:true}];

console.log(books[0].title)