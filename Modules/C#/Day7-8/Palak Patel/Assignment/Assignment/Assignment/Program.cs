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

                new Employee() { ID = 1, FirstName = "John", LastName = "Abraham", Salary = 1000000, JoiningDate = new DateTime(2013,1,1), Deparment = "Banking" },

                new Employee() { ID = 2, FirstName = "Michael", LastName = "Clarke", Salary = 800000, JoiningDate = new DateTime(), Deparment = "Insurance" },

                new Employee() { ID = 3, FirstName = "Roy", LastName = "Thomas", Salary = 700000, JoiningDate = new DateTime(), Deparment = "Insurance" },

                new Employee() { ID = 4, FirstName = "Tom", LastName = "Jose", Salary = 600000, JoiningDate = new DateTime(), Deparment = "Banking" },

                new Employee() { ID = 4, FirstName = "TestName2", LastName = "Lname%", Salary = 600000, JoiningDate = new DateTime(2013,1,1), Deparment = "Services" }

            };

            List<Incentive> incentives = new List<Incentive>()

            {

                new Incentive() { ID = 1, IncentiveAmount = 5000, IncentiveDate = new DateTime(2013, 02, 02) },

                new Incentive() { ID = 2, IncentiveAmount = 10000, IncentiveDate = new DateTime(2013, 02, 4) },

                new Incentive() { ID = 1, IncentiveAmount = 6000, IncentiveDate = new DateTime(2012, 01, 5) },

                new Incentive() { ID = 2, IncentiveAmount = 3000, IncentiveDate = new DateTime(2012, 01, 5) }

            };

            var result1 = from e in employees where e.FirstName == "John" select e;

            foreach (var item in result1)
            {
                Console.WriteLine($"{item.ID}\t {item.FirstName} {item.LastName}\t {item.Salary}\t {item.JoiningDate}\t {item.Deparment}");
            }

            Console.WriteLine(" ");
            var result2 = from e in employees select new { Name = e.FirstName +" "+ e.LastName};
            foreach (var item in result2)
            {
                Console.WriteLine(item.Name);
            }

            Console.WriteLine(" ");
            var result3 = employees.GroupJoin(incentives, i => i.ID, e => e.ID, (e, i) => new{ Name = e.FirstName, Detail = i });
            foreach (var item in result3)
            {
                Console.Write($"{item.Name}\t");
                foreach (var d in item.Detail)
                {
                    Console.WriteLine($"{d.IncentiveAmount}\t{d.IncentiveDate}");
                }
            }

            Console.WriteLine(" ");
            Console.WriteLine(" ");

            var result4 = employees.GroupBy(e => e.Deparment).Select(Group => new { Group.Key, MaxSalary = Group.Max(e => e.Salary) }).OrderBy(e => e.MaxSalary);
            Console.WriteLine("Department\tMaximun Salary");
            foreach (var group in result4)
            {
                Console.WriteLine($"{group.Key} \t{group.MaxSalary}");
            }

            Console.WriteLine(" ");
            var result5 = employees.GroupBy(e => e.Deparment).Select(Group => new { Group.Key, TotalSalary = Group.Sum(e => e.Salary) }).Where(e => e.TotalSalary > 800000).OrderByDescending(e => e.TotalSalary);
            Console.WriteLine("Department\tTotal Salary");
            foreach (var group in result5)
            {
                Console.WriteLine($"{group.Key} \t{group.TotalSalary}");
            }
        }
    }
}
