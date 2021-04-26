using System;
using System.Collections.Generic;
using System.Linq;

namespace Day7_8AssignmentTask
{
    class Day7_8AssignmentTasks
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

            //1.Get employee details from employees object whose employee name is “John” (note restrict operator)
            var empDetail = from emp in employees
                            where emp.FirstName == "John"
                            select emp;

            Console.WriteLine("Details of employees whose name is John:");
            foreach (var item in empDetail)
            {
                Console.WriteLine($"ID: {item.ID}\nFirstname: {item.FirstName}\nLastname: {item.LastName}\nSalary: {item.Salary}\nJoiningDate: {item.JoiningDate}\nDepartment: {item.Deparment}");
            }

            Console.WriteLine();
            //2.Get FIRSTNAME,LASTNAMe from employees object(note project operator)
            var empName = from emp in employees
                          select new
                          {
                              fname = emp.FirstName,
                              lname = emp.LastName
                          };

            Console.WriteLine("Firstname & LastName of all employees:");
            foreach (var item in empName)
            {
                Console.WriteLine($"Firstname: {item.fname}, Lastname: {item.lname}");
            }

            Console.WriteLine();
            //3.Select FirstName, IncentiveAmount from employees and incentives object for those employees who have incentives.
            // (join operator)
            var empIncentive = from emp in employees
                               join incent in incentives
                               on emp.ID equals incent.ID
                               select new
                               {
                                   fname = emp.FirstName,
                                   amount = incent.IncentiveAmount
                               };

            Console.WriteLine("Employee name with their Incentive Amount:");
            foreach (var item in empIncentive)
            {
                Console.WriteLine($"Firstname: {item.fname}, IncentiveAmount: {item.amount}");
            }

            Console.WriteLine();
            //4.Get department wise maximum salary from employee table order by salary ascending(note group by)
            Console.WriteLine("Departmentwise Maximum salary of employee:");
            var deptSal = from emp in employees
                          group emp by emp.Deparment into deptGrp
                          let maxSalary = deptGrp.Max(x => x.Salary)
                          orderby maxSalary
                          select new
                          {
                              dept = deptGrp.Key,
                              maxSal = maxSalary
                          };

            foreach (var item in deptSal)
            {
                Console.WriteLine($"Department: {item.dept}, Maximum Salary: {item.maxSal}");
            }

            Console.WriteLine();
            //5.Select department, total salary with respect to a department from employees object where total salary greater 
            //than 800000 order by TotalSalary descending(group by having)
            Console.WriteLine("Department wise total salary amount:");
            var deptTotalSal = from emp in employees
                               group emp by emp.Deparment into deptGrp
                               let totalSalary = deptGrp.Sum(x => x.Salary)
                               where totalSalary > 800000
                               orderby totalSalary descending
                               select new
                                {
                                    dept = deptGrp.Key,
                                    totalSal = totalSalary
                                };


            foreach (var item in deptTotalSal)
            {
                Console.WriteLine($"Department: {item.dept}, Total Salary: {item.totalSal}");
            }

        }
    }
}
