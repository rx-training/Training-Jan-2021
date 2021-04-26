using Microsoft.EntityFrameworkCore;
using Practice.Models;
using System;
using System.Linq;

namespace Practice
{
    class Program
    {
        static void Main(string[] args)
        {
            sqlTrainingContext connection = new sqlTrainingContext();


            Employee e = new Employee();
            e.FirstName = "Mohan";
            e.LastName = "Roy";
            e.Email = "mr@m.m";
            e.Commission = 1000;
            e.Salary = "10000";
            e.ManagerId = 1;
            e.HireDate = DateTime.Now;
            e.JobId = 1;
            e.DepartmentId = 1;
            e.PhoneNumber = "1515151515";
            connection.Employees.Add(e);
            connection.SaveChanges();

            var x = connection.Employees;
            foreach (var item in x)
            {
                Console.WriteLine(item.FirstName);
            }
            Console.WriteLine();

            var latest = connection.Employees.OrderByDescending(x => x.HireDate).ThenBy(x => x.FirstName).First();
            Console.WriteLine($"ID: {latest.EmployeeId}, Name: {latest.FirstName} {latest.LastName}, Hire Date: {latest.HireDate}, Email: {latest.Email}.");
            Console.WriteLine();

            latest.Email = "x@x.com";
            connection.SaveChanges();
            latest = connection.Employees.OrderByDescending(x => x.HireDate).ThenBy(x => x.FirstName).First();
            Console.WriteLine($"ID: {latest.EmployeeId}, Name: {latest.FirstName} {latest.LastName}, Hire Date: {latest.HireDate}, Email: {latest.Email}.");
            Console.WriteLine();

            var joined = connection.Employees.Include(p => p.Department);
            foreach (var item in joined)
            {
                Console.WriteLine($"{item.FirstName} : {item.Department.DepartmentName}");
            }

            var toBeRemoved = x.Where(x => x.FirstName == "Mohan").First();
            x.Remove(toBeRemoved);
            connection.SaveChanges();

            var x2 = connection.Employees;
            foreach (var item in x2)
            {
                Console.WriteLine(item.Department.DepartmentName);
            }
            Console.WriteLine();


        }
    }
}
