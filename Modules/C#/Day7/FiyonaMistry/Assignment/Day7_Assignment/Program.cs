using System;
using System.Collections.Generic;
using System.Linq;

namespace Day7_Assignment
{
    class Employee
    {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public double Salary { get; set; }
        public DateTime JoiningDate { get; set; }
        public string Deparment { get; set; }
    }

    class Incentive
    {
        public int ID { get; set; }
        public double IncentiveAmount { get; set; }
        public DateTime IncentiveDate { get; set; }
    }

    class Program
    {
        static void Main(string[] args)
        {
            List<Employee> employees = new List<Employee>()
            {
                new Employee(){ ID=1,FirstName="John", LastName="Abraham",Salary=1000000,JoiningDate=new DateTime(2013,1,1),Deparment="Banking"},
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

            // 1. Get employee details from employees object whose employee name is “John” (note restrict operator)
            var first = employees.Where(e => e.FirstName == "John");

            Console.WriteLine("Employee whose name is John : ");
            foreach (var item in first)
            {
                Console.WriteLine(item.ID + " " + item.FirstName + " " + item.LastName + " " + item.Salary + " " + item.JoiningDate + " " + item.Deparment);
            }
            Console.WriteLine();


            // 2. Get FIRSTNAME,LASTNAMe from employees object(note project operator)
            var second = employees.Select(e => new { FirstName = e.FirstName, LastName = e.LastName });

            Console.WriteLine("First Name and Last Name : ");
            foreach (var item in second)
            {
                Console.WriteLine(item.FirstName + " " + item.LastName);
            }
            Console.WriteLine();


            // 3. Select FirstName, IncentiveAmount from employees and incentives object for those employees who have incentives.(join operator)
            var third = employees.Join(incentives,
                employees => employees.ID,
                incentives => incentives.ID,
                (employees, incentives) => new
                {
                    EmployeeName = employees.FirstName,
                    IncentiveAmount = incentives.IncentiveAmount
                });

            Console.WriteLine("First Name and Incentive Amount using Join : ");
            foreach (var item in third)
            {
                Console.WriteLine(item.EmployeeName + " " + item.IncentiveAmount);
            }
            Console.WriteLine();


            // 4. Get department wise maximum salary from employee table order by salary ascending (note group by)
            var fourth = employees.GroupBy(e => e.Deparment).Select(e => new { Department = e.Key, 
               Salary = e.Max(s => s.Salary)}).OrderBy(e => e.Salary);

            Console.WriteLine("Department wise maximum salary from employee : ");
            foreach (var item in fourth)
            {
                Console.WriteLine(item.Department + " " + item.Salary);
            }
            Console.WriteLine();


            // 5. Select department, total salary with respect to a department from employees object where total salary greater than 800000 order by TotalSalary descending(group by having)
            var fifth = employees.GroupBy(e => e.Deparment).Select(e => new
            {
                Department = e.Key,
                Salary = e.Sum(s => s.Salary)
            }).Where(e => e.Salary > 800000).OrderBy(e => e.Salary);

            Console.WriteLine("Total salary greater than 800000 order by TotalSalary : ");
            foreach (var item in fifth)
            {
                Console.WriteLine(item.Department + " " + item.Salary);
            }
        }
    }
}
