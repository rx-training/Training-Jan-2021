var employee =[
    {"id":1 ,"Fname":"jevik","LName":"Raiyani","Address":"26/11 Bhojarajapara ,Gondal ,Rajkot ,Gujarat","Salary":13451},
    {"id":2 ,"Fname":"Pratik","LName":"Usadatiya","Address":"11 Premnagar ,Varacha ,Surat ,Gujarat","Salary":2124},
    {"id":3 ,"Fname":"Tirath","LName":"Savasaiya","Address":"26/11 Bhojarajapara ,Gondal ,Rajkot ,Gujarat","Salary":13451},
    {"id":4 ,"Fname":"Raj","LName":"sojitra","Address":"26/11 Bhojarajapara ,Gondal ,Rajkot ,Gujarat","Salary":13451},
    {"id":5 ,"Fname":"X","LName":"Y","Address":"26/11 Bhojarajapara ,Gondal ,Rajkot ,Gujarat","Salary":13451}
]
//all

function GetAll(){
    for (const i of employee) {
        console.log(i);
    }
}

//by index

function GetbyIndex(i:number){
    console.log(employee[i]);
}

//emp by id
function GetbyEmpId(i:number){
    var GetbyId = employee.filter((element,index,id)=>{
    return element.id== i;
    })
    console.log(GetbyId);
}

//Push
function PushData(id:number,Fname:string,LName:string,Address:string,Salary:number){
    employee.push( {"id":id ,"Fname":Fname,"LName":LName,"Address":Address,"Salary":Salary});
}

//delete
function PopEmp(){
    employee.pop();
}

//emp array
function empData(){
var emp = employee
for (const val of emp) {
    console.log(`Id: ${val.id}, Name : ${val.Fname.concat(" ").concat(val.LName)}  Address: ${val.Address.split(",")} Salary : ${val.Salary*1.2} `)
}
}

GetAll();
GetbyIndex(1);
GetbyEmpId(4);
PushData(6,"Arvind","Kejrival","4546 aa Delhi",4522);
GetAll();
PopEmp();
GetAll();
empData();
