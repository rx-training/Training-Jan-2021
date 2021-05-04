using System;
using System.Linq;

using System.Collections.Generic;

namespace Assignment
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
            //Get employee details from employees object whose
            //employee name is “John” (note restrict operator)

            var JhonEmployee = from e in employees
                               where e.FirstName == "John"
                               select e;
            foreach (var item in JhonEmployee)
            {
                Console.WriteLine($"{item.ID} {item.FirstName} {item.LastName} {item.Salary}" +
                    $" {item.Deparment}");
            }
            //Get FIRSTNAME, LASTNAMe from employees object(note project operator)
            var EmpNames = from e in employees
                           select e.FirstName + " " + e.LastName;
            foreach (var item in EmpNames)
            {
                Console.WriteLine(item);
            }
            //Select FirstName, IncentiveAmount from employees and incentives object
            //    for those employees who have incentives.(join operator)
            var IncentivEmp = employees.Join(incentives,
                emp => emp.ID,
                inc => inc.ID,
                (emp, incen) => new
                {
                    empname = emp.FirstName + " " + emp.LastName,
                    InscentiveAmount = incen.IncentiveAmount,
                    Date = incen.IncentiveDate
                });
            Console.WriteLine("Employee Details with their Inscentive");
            foreach (var item in IncentivEmp)
            {
                Console.WriteLine(item);
            }
            //Get department wise maximum salary from 
            //    employee table order by salary ascending(note group by)
            var MaxSalary = from e in employees
                            group e by e.Deparment into Groups
                            select Groups.Max(s => s.Salary) + " " + Groups.Key;
            foreach (var item in MaxSalary)
            {
                Console.WriteLine(item);
            }
            //Select department, total salary with respect to a department 
            //from employees object where total salary greater than 800000
            // order by TotalSalary descending(group by having)
            var TotalSalary = from e in employees
                              group e by e.Deparment into Groups
                              let cond = Groups.Sum(sal => sal.Salary)
                              where cond > 800000
                              orderby cond descending
                              select new
                              {
                                  Department = Groups.Key,
                                  MaxSalary = cond,

                              };
            foreach (var item in TotalSalary)
            {

                Console.WriteLine(item.Department);
                Console.WriteLine(item.MaxSalary);
               
            } 


        }
    }
}
