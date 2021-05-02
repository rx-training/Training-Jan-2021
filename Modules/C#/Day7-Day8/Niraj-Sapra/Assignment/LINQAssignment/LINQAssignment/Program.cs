using System;
using System.Linq;
using System.Collections.Generic;
namespace Linqassignment
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Employee> employees = new List<Employee>()

           {

                new Employee(){ ID=1,FirstName="John",LastName="Abraham",Salary=1000000,JoiningDate=new DateTime(2013,1,1),Deparment="Banking"},

                new Employee(){ID=2,FirstName="Michael",LastName="Clarke",Salary=800000,JoiningDate=new DateTime(),Deparment="Insurance" },

                new Employee(){ID=3,FirstName="oy",LastName="Thomas",Salary=700000,JoiningDate=new DateTime() ,Deparment="Insurance"},

                new Employee(){ID=4,FirstName="Tom",LastName="Jose",Salary=600000,JoiningDate=new DateTime() ,Deparment="Banking"},

                new Employee(){ID=4,FirstName="TestName2",LastName="Lname%",Salary=600000,JoiningDate=new DateTime(2013,1,1) ,Deparment="Services"}

            };

            List<Incentive> incentives = new List<Incentive>()

            {

                new Incentive(){ ID=1,IncentiveAmount=5000,IncentiveDate=new DateTime(2013,02,02)},

                new Incentive(){ID=2,IncentiveAmount=10000,IncentiveDate=new DateTime(2013,02,4)},

                new Incentive(){ID=1,IncentiveAmount=6000,IncentiveDate=new DateTime(2012,01,5)},

                new Incentive(){ID=2,IncentiveAmount=3000,IncentiveDate=new DateTime(2012,01,5)}

            };


            //Get employee details from employees object whose employee name is “John” (note restrict operator)
            var empname = from emp in employees where emp.FirstName == "John" select emp;
            
            foreach (Employee emp in empname)
            {
                Console.WriteLine("\n "+emp.ID+" "+emp.FirstName + " " +emp.LastName + " " +emp.JoiningDate + " " + emp.Deparment + " " +emp.Salary );
            }

            //2. Get FIRSTNAME,LASTNAMe from employees object(note project operator)

            var res = from e in employees
                      select e.FirstName+""+e.LastName;

            foreach (var val in res)
            {
                Console.WriteLine("\n " + "Employee Name: {0}", val);
            }
            //3. Select FirstName, IncentiveAmount from employees and incentives object for those employees who have incentives.(join operator)
            Console.WriteLine("Third query");
            var innerJoinResult = employees.Join(
                      incentives,
                      employe => employe.ID,    // outerKeySelector
                      incentive => incentive.ID,  // innerKeySelector
                      (employe, incentive) => new  // result selector
                      {
                          EmployeeName = employe.FirstName,
                          IncentiveAmount = incentive.IncentiveAmount
                      });
            foreach (var obj in innerJoinResult)
            {
                Console.WriteLine("\n " + "Employee Name is {0} And Incentive Amount is {1}", obj.EmployeeName, obj.IncentiveAmount);
            }

            //4. Get department wise maximum salary from employee table order by salary ascending (note group by)

            //var salary = from emp in employees   emp.Salary group emp by emp.Deparment;

            var salary = employees.GroupBy(s => s.Deparment).Select(s => new { 
            emp = s.Key,maxsalry = s.Max(s=>s.Salary)
           
            }).OrderBy(s=>s.maxsalry); 
            foreach(var items in salary)
            {
                Console.WriteLine("\n " + items.emp+ items.maxsalry);
            }

            //5. Select department, total salary with respect to a department from employees object
            //where total salary greater than 800000 order by TotalSalary descending(group by having)

            //orderby emp.Salary descending
            //            var totalsalary = from emp in employees

            //                              group emp by emp.Deparment into departmentqroupquery 


            //;           
            var total = employees.GroupBy(x => x.Deparment).Select(e => new
            {
                departmentname = e.Key,Sumsalry = e.Sum(e=> e.Salary)
            
            }).Where(s=>s.Sumsalry>800000).OrderByDescending(e => e.Sumsalry) ;
            Console.WriteLine("\n " + "final query run");
            foreach (var departGroup in total) 
            {
                Console.WriteLine("\n " + departGroup.departmentname+departGroup.Sumsalry);
            }
            

        }
    }
}
