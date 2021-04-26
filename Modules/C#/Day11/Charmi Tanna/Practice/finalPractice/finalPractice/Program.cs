using finalPractice.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace finalPractice
{
   
    class Program
    {
        static void Main(string[] args)
        {

            EMPDATABASEContext empDatabaseContext = new EMPDATABASEContext();
            //Display
            foreach (var i in empDatabaseContext.Employees)
            {
                Console.WriteLine(i.FirstName + " " + i.DepartmentId);
            }
            //Update and find
            var result = empDatabaseContext.Employees.Single(e => e.Id == 1);
            result.FirstName = "Krina";
            empDatabaseContext.SaveChanges();
            Console.WriteLine("Result is:");
            Console.WriteLine(result.FirstName + " " + result.DepartmentId);
            //Insert
            Employee e = new Employee() { Id = 8, FirstName = "Meena", LastName = "Patel", Gender = "Female", Salary = 20000, DepartmentId = 3 };
            empDatabaseContext.Add(e);
            var e1 = empDatabaseContext.Employees.Single(emp => emp.Id == 8);
            empDatabaseContext.Remove(e1);
            empDatabaseContext.SaveChanges();
            //Include Method
            var r1 = empDatabaseContext.Employees.Include(e => e.Department);
            foreach (var i in r1)
            {
                Console.WriteLine(i.DepartmentId + " " + i.FirstName + " " + i.Department.Name);
            }
        }
    }
}
