using System;
using System.Collections.Generic;
using System.Linq;

namespace Assignment
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Employee> employees = new List<Employee>()
            {
                new Employee(){ ID=1,FirstName="John",LastName="Abraham",Salary=1000000,JoiningDate=new DateTime(2013,1,1),Deparment="Banking" },
                new Employee(){ ID=2,FirstName="Michael",LastName="Clarke",Salary=800000,JoiningDate=new DateTime(),Deparment="Insurance" },
                new Employee(){ ID=3,FirstName="oy",LastName="Thomas",Salary=700000,JoiningDate=new DateTime() ,Deparment="Insurance"},
                new Employee(){ ID=4,FirstName="Tom",LastName="Jose",Salary=600000,JoiningDate=new DateTime() ,Deparment="Banking"},
                new Employee(){ ID=4,FirstName="TestName2",LastName="Lname%",Salary=600000,JoiningDate=new DateTime(2013,1,1) ,Deparment="Services"}
            };

            List<Incentive> incentives = new List<Incentive>()
            {
                new Incentive(){ ID=1,IncentiveAmount=5000,IncentiveDate=new DateTime(2013,02,02) },
                new Incentive(){ ID=2,IncentiveAmount=10000,IncentiveDate=new DateTime(2013,02,4) },
                new Incentive(){ ID=1,IncentiveAmount=6000,IncentiveDate=new DateTime(2012,01,5) },
                new Incentive(){ ID=2,IncentiveAmount=3000,IncentiveDate=new DateTime(2012,01,5) }
            };

            // Assignment 1
            var assignment1 = employees.Where(emp => emp.FirstName == "John");

            // query syntax
            //assignment1 = from emp in employees
            //              where emp.FirstName == "John"
            //              select emp;

            foreach (var item in assignment1)
            {
                Console.WriteLine($"Employee ID: {item.ID}, Name: {item.FirstName} {item.LastName}, Salary: {item.Salary}, Joining Date: {item.JoiningDate}, Department: {item.Deparment}");
            }
            Console.WriteLine();
            Console.WriteLine("-------------------------------------");
            Console.WriteLine();

            // Assignment 2
            var assignment2 = employees.Select(emp => new { emp.FirstName, emp.LastName });

            // query syntax
            //assignment2 = from emp in employees
            //              select new { emp.FirstName, emp.LastName };

            foreach (var item in assignment2)
            {
                Console.WriteLine($"Employee Name: {item.FirstName} {item.LastName}");
            }
            Console.WriteLine();
            Console.WriteLine("-------------------------------------");
            Console.WriteLine();

            // Assignment 3
            var assignment3 = employees.Join(incentives, emp1 => emp1.ID, emp2 => emp2.ID, (emp1, emp2) => new { emp1.FirstName, emp2.IncentiveAmount });

            // query syntax
            //assignment3 = from emp1 in employees
            //              join emp2 in incentives
            //              on emp1.ID equals emp2.ID
            //              select new { emp1.FirstName, emp2.IncentiveAmount };


            foreach (var item in assignment3)
            {
                Console.WriteLine($"Employee Name: {item.FirstName}, Incentive Amount: {item.IncentiveAmount}");
            }
            Console.WriteLine();
            Console.WriteLine("-------------------------------------");
            Console.WriteLine();

            // Assignment 4
            var assignment4 = employees.GroupBy(emp => emp.Deparment).Select(emp => new { Deparment = emp.Key, Salary = emp.Max(e => e.Salary) }).OrderBy(x => x.Salary);

            // query syntax
            //var assignment4a = from emp in employees
            //                   group emp by emp.Deparment
            //                   into x
            //                   select new { Deparment = x.Key, Salary = x.Max(e => e.Salary) }
            //                   into x2
            //                   orderby x2.Salary
            //                   select x2;

            foreach (var item in assignment4)
            {
                Console.WriteLine($"DepartmenT: {item.Deparment}, Max Salary: {item.Salary}");
            }
            Console.WriteLine();
            Console.WriteLine("-------------------------------------");
            Console.WriteLine();

            // Assignment 5
            var assignment5 = employees.GroupBy(emp => emp.Deparment)
                                        .Select(emp => new { Deparment = emp.Key, TotalSalary = emp.Sum(e => e.Salary) })
                                        .Where(x => x.TotalSalary > 800000)
                                        .OrderByDescending(x => x.TotalSalary);

            // query syntax
            //var assignment5a = from emp in employees
            //                   group emp by emp.Deparment
            //                   into x
            //                   select new { Deparment = x.Key, TotalSalary = x.Sum(e => e.Salary) }
            //                   into x2
            //                   where x2.TotalSalary > 800000
            //                   orderby x2.TotalSalary descending
            //                   select x2;

            foreach (var item in assignment5)
            {
                Console.WriteLine($"Department: {item.Deparment}, Max Salary: {item.TotalSalary}");
            }
            Console.WriteLine();
            Console.WriteLine("-------------------------------------");
            Console.WriteLine();
        }
    }
}
