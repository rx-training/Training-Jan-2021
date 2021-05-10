namespace Vecancies
{
    export interface IVecancy
    {
        DepartmentId:number;
        DepartmentName:string;
        PostName:string;
        NumberOfOpening:number;
    }

   export var vecencydata:IVecancy[]=
    [
        {DepartmentId:1,DepartmentName:".Net",PostName:"sr.Softwere Engineer",NumberOfOpening:10},
        {DepartmentId:2,DepartmentName:"PHP",PostName:"Jr.Softwere Engineer",NumberOfOpening:5},
        {DepartmentId:3,DepartmentName:"NodeJs",PostName:"Developer",NumberOfOpening:8},
        {DepartmentId:4,DepartmentName:"Java",PostName:"Technical Engineer",NumberOfOpening:10},
        {DepartmentId:5,DepartmentName:"HR",PostName:"HR Manager",NumberOfOpening:2}
    ]
}