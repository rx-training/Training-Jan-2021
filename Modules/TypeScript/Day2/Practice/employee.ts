interface Iemployee{
    empnumber:number;
    studentname: string;
    empsalary:(number) => number;
  }

  class Emps implements Iemployee{
    empnumber:number;  
    studentname: string;    
      constructor(name :string,num :number){
        this.empnumber=num;
        this.studentname = name;
      }
      getsalary(empnumber:number):number{
          return 35000;
      }
  }
  let emp = new Emps('niraj',12);
  emp.getsalary(20000);