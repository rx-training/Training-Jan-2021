document.getElementById("app").innerHTML += "<br> Array Methods Practice <br>";

var list: number[] = [1, 3, 5];

for(var index in list)
{
    document.getElementById("app").innerHTML += `${list[index]} `;
}
document.getElementById("app").innerHTML += "<br>";

var list1: Array<number> = [1, 3, 5];

for(var value of list1)
{
    document.getElementById("app").innerHTML += `${value} `;
}
document.getElementById("app").innerHTML += "<br>";

// multi type array
var list2: (string | number)[] = ['Apple', 2, 'Orange', 4, 7];

for(var i=0; i<list2.length; i++)
{
    document.getElementById("app").innerHTML += `${list2[i]} `;
}
document.getElementById("app").innerHTML += "<br>";

var list3: Array<string|number> = ['Apple', 3, 'Orange', 4, 7];

for(var i=0; i<list3.length; i++)
{
    document.getElementById("app").innerHTML += `${list3[i]} `;
}
document.getElementById("app").innerHTML += "<br>";

// sort()
var fruits: Array<string> = ['Apple', 'Orange', 'Banana']; 
fruits.sort(); 
console.log(fruits); //output: [ 'Apple', 'Banana', 'Orange' ]

// pop()
console.log(fruits.pop()); //output: Orange

// push()
fruits.push('Papaya'); 
console.log(fruits); //output: ['Apple', 'Banana', 'Papaya']

// concat()
fruits = fruits.concat(['Fig', 'Mango']); 
console.log(fruits); //output: ['Apple', 'Banana', 'Papaya', 'Fig', 'Mango'] 

fruits = fruits.concat('Kiwi', 'Pear', 'Orange', 'Grape');
console.log(fruits);

// copyWithin()
console.log(fruits.copyWithin(2, 0, 2));

// indexOf()
console.log(fruits.indexOf('Papaya'));//output: 2

// filter()
var newArray=fruits.filter((fruits,i,arr)=>{
    return fruits.length<6;
});

console.log(newArray);

// fill()
fruits = fruits.fill("!", 3,5);
console.log(fruits);

// shift()
console.log(fruits.shift());

// multi-dimensional array
var mArray:number[][] = [[1,2,3],[5,6,7]] ;  
console.log(mArray[0][0]);  
console.log(mArray[0][1]);  
console.log(mArray[0][2]);  
console.log();  
console.log(mArray[1][0]);  
console.log(mArray[1][1]);  
console.log(mArray[1][2]);  

let arr1:string[] = new Array("JavaTpoint", "2300", "Java", "Abhishek");   
//Passing arrays in function  
function display(arr_values:string[]) {  
   for(let i = 0;i<arr_values.length;i++) {   
      console.log(arr1[i]);  
   }    
}  
//Calling arrays in function  
display(arr1);  

// spread operator
let arr3 = [ 1, 2, 3];  
let arr2 = [ 4, 5, 6];  
//Create new array from existing array  
let copyArray = [...arr3];     
console.log("CopiedArray: " +copyArray);  
//Create new array from existing array with more elements  
let newArray1 = [...arr3, 7, 8];  
console.log("NewArray: " +newArray1);  
//Create array by merging two arrays  
let mergedArray = [...arr3, ...arr2];  
console.log("MergedArray: " +mergedArray); 

