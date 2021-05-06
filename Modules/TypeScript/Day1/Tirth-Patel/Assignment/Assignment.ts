// 1.  Store 5 employees’ data in one array (ID,FirstName,LastName,Address,Salary).
//  Do the operation searching by indexnumber, EmployeeID, Insert the employee,
//   delete the employee from the Array. Create one more array emp and join the
//    value with above array. When display list combine firstname and lastname
//     as fullname, From the address field flatnumber,city,state and
//  should be splited.PF should be computed and total salary should be display.

var Employees =
 [{ID:1,FirstName:"Tirth",LastName:"patel",Address:"f-101 ,krihna-flats,ahmedabad,gujarat",salary:10000},
 {ID:2,FirstName:"Meena",LastName:"Shrama",Address:"A-101 ,Sayan-flats,rajkot,gujarat",salary:110000},
 {ID:3,FirstName:"Vishnu",LastName:"shah",Address:"E-101 ,nayna-flats,morbi,gujarat",salary:20000},
 {ID:4,FirstName:"reema",LastName:"patel",Address:"f-101 ,krihna-flats,vadodara,gujarat",salary:30000},
 {ID:5,FirstName:"kapil",LastName:"teli",Address:"A-101 ,sahajannd-flats,vapi,gujarat",salary:40000}


]
function SearchWithIndex(index:string):void{
    for(var emp in Employees){
        if(emp == index){
            
                console.log(Employees[emp]);
            
        }
    }
}
SearchWithIndex("1");

//Search With ID
function SearchWithID(index:number):void{
    for(var emp in Employees){
        if(Employees[emp].ID == index){
            
                console.log(Employees[emp]);
            
        }
    }
}
SearchWithID(2);
//Insert an employee
Employees.push({ID:5,FirstName:"Krishna",LastName:"trivedi",Address:"C-01 ,sahajannd-bunglows,Ahmedabad,gujarat",salary:50000});


//Delete an Employee
Employees.pop();

//new emp array
var emp =
 [{ID:6,FirstName:"viren",LastName:"patel",Address:"f-101 ,krihna-flats,ahmedabad,gujarat",salary:10000},
 {ID:7,FirstName:"Nisarg",LastName:"Shah",Address:"A-101,Sayan-flats,rajkot,gujarat",salary:110000}];

 //joining 2 arrays

 var NewArray = Employees.concat(emp);

 for(var empss in NewArray){
     console.log(NewArray[empss]);
 }

 //Display list
 var List :{
     ID:number;
     Fullname:String;
     Flatnumber:string;
     City:string;
     State:String;
     TotalSalary:number
 }[]= [];



for(var Emp in NewArray )


{

 var splt:Array<string> =[];
  splt = NewArray[Emp].Address.split(",",4);
     List.push({
   ID: NewArray[Emp].ID,
  Fullname : NewArray[Emp].FirstName +" "+ NewArray[Emp].LastName,
   Flatnumber : splt[0],
    City : splt[2],
    State : splt[3],
    TotalSalary : NewArray[Emp].salary *1.25 +NewArray[Emp].salary });
    
}
 for(var data of List){
    console.log(data);
 }

