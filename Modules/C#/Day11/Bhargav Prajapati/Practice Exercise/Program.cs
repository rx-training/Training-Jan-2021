using Microsoft.EntityFrameworkCore;
using Practice_Exercise.Models;
using System;
using System.Collections.Generic;
using System.Linq;
namespace Practice_Exercise
{
    class Program
    {
        static void Main(string[] args)
        {
            JobdatabaseContext data = new JobdatabaseContext();

            //Insert the data into the department table table
            List<Department> dep = new List<Department>()
            {
                new Department(){ DeparmentId=1,DeparmentName=".Net" },
                new Department(){ DeparmentId=2,DeparmentName="Java" },
                new Department(){ DeparmentId=3,DeparmentName="PHP"}

            };
            foreach (Department item in dep)
            {
                data.Departments.Add(item);
                data.SaveChanges();
            }
            Console.WriteLine("Successfuly added Data into the department table");


            List<Employee> empdata = new List<Employee>()
            {
                new Employee(){EmpId=1,EmpName="Karan",Experiance=10,Salary=50000,DeparmentId=1 },
                new Employee(){EmpId=2,EmpName="Vishal",Experiance=15,Salary=20000,DeparmentId=1},
                new Employee(){EmpId=3,EmpName="Bhavik",Experiance=5,Salary=60000,DeparmentId=2 },
                new Employee(){ EmpId=4,EmpName="Parth",Experiance=6,Salary=100000,DeparmentId=2},
                new Employee(){ EmpId=5,EmpName="Hardik",Experiance=8,Salary=82000,DeparmentId=3},
                new Employee(){EmpId=6,EmpName="Nirav",Experiance=7,Salary=90000,DeparmentId=3 }
            };

            int count = 0;
            foreach (Employee item in empdata)
            {
                data.Add(item);
                data.SaveChanges();
                count++;
            }

            Console.WriteLine($"Data is Added With Affected {count}  Row  :) ");


            //Retrive the data  from database

            Console.WriteLine("Employee Data");
            foreach (var item in data.Employees)
            {
                Console.WriteLine("===================================");
                Console.WriteLine($"Employee Id :- {item.EmpId}");
                Console.WriteLine($"Employee Name :- {item.EmpName}");
                Console.WriteLine($"Employee Salary :- {item.Salary}");
                Console.WriteLine($"Employee Department Id :- {item.DeparmentId}");
                data.SaveChanges();
            }

            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine("Department data");

            foreach (var item in data.Departments)
            {
                Console.WriteLine("************************************");
                Console.WriteLine($"Department  Id :-  {item.DeparmentId}");
                Console.WriteLine($"Department Name :- {item.DeparmentName}");
                data.SaveChanges();
            }


            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine("Retrive Particular data :-");
            var result = data.Employees.Single(p=>p.EmpId==2);
            Console.WriteLine("-------------------------------");
            Console.WriteLine($"Employee Id :- {result.EmpId}");
            Console.WriteLine($"Employee Name :- {result.EmpName}");
            Console.WriteLine($"Employee Salary :- {result.Salary}");

            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine("Include Method");
            Console.WriteLine("////////////////////////////////////");
            
            var res = data.Employees.Include(p=>p.Deparment);
            foreach (var item in res)
            {
                Console.WriteLine("Employee Name :- "+item.EmpName);
                Console.WriteLine("Department Name :-"+item.Deparment.DeparmentName);
            }



            Console.ReadLine();
        }
    }
}
