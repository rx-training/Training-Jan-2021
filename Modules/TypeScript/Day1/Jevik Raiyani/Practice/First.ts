// var age : number = 21;
// var FName :string = "Jevik";
// var IsUpdated: boolean = true;
// // alert("aa");

// console.log(age);
// console.log(FName);
// console.log(IsUpdated);

// let decimal: number = 6;
// let hex: number = 0xf00d;
// let binary: number = 0b1010;
// let octal: number = 0o744;

// console.log(decimal);
// console.log(hex);
// console.log(binary);
// console.log(octal);

// let color: string = "blue";
// color = "Red";
// console.log(color);

// let N1:number = 15.2;
// console.log(N1.toString());
// console.log(N1.toExponential());

// function heloUser():void{
//     console.log("Helo User");
// }
// heloUser();

// let Fname:string = "jeviik";
// let Lname:string ="Raiyani";
// console.log(Fname+ " "+Lname);

// let FullName : string =`firstname: ${Fname}, last name:${Lname} ` ;
// console.log(FullName);

// console.log(Fname.charAt(1));
// console.log(Fname.concat[Lname]);
// console.log(Fname.indexOf("ik"));
// console.log(Fname.replace("je","aa"));
// console.log(Fname.split("j",2));
// console.log(Fname.toUpperCase());
// console.log(Fname.toLowerCase());
// console.log(Fname.charCodeAt(0));
//console.log(Fname.substring(1,4));


// let no: number=null;
// let name1: string=null;
// let bool: boolean = null;
// let str: string = `${no} ${name1}${bool}`;
// console.log(str);

// let val: any ='Hi';
// val=555;
// val= true;

// console.log(val);

// function AnyExample(x:any,y:any){
//     return x+y;
// }
// let result:any;
// result = AnyExample(2,5);
// console.log(result);
// result = AnyExample("jeivi","sdkas");
// console.log(result);
// result = AnyExample(54,"sadsa");
// console.log(result);

// var arr : number[]=[1,3];
// var arr1 : Array<number> =[1,2];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }


let values : (string|number)[] =['Apple',2,'Orange',3,1,"Banana"];
let values1 : Array<string|number>=['Apple',2,'Orange',3,1,"Banana"];
values.forEach(element => {
    console.log(element);
});
values.sort();
console.log(values);

values.pop();
console.log(values);

values.push("papaiya");
console.log(values);

values = values.concat(["aaa"],["bbb"]);
console.log(values);

console.log(values.indexOf("aaa"));

var newArr = values.filter((element,index,array)=>{
    return index >2 
})
console.log(newArr);