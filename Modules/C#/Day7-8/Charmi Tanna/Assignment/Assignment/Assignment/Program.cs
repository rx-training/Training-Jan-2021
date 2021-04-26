using System;
using System.Collections;
using System.Linq;
using System.Text;
using System.Collections.Generic;

namespace Assignment
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

                new Employee()
                { ID=1,
                  FirstName = "John",
                  LastName = "Abraham",
                  Salary = 1000000,
                  JoiningDate = new DateTime(2013,1,1),
                  Deparment = "Banking"
                },

                new Employee()
                {
                    ID=2,
                    FirstName = "Michael",
                    LastName = "Clarke",
                    Salary = 800000,
                    JoiningDate = new DateTime(),
                    Deparment = "Insurance"
                },

                new Employee()
                {
                 ID=3, 
                 FirstName = "oy",
                 LastName = "Thomas",
                 Salary = 700000,
                 JoiningDate = new DateTime() ,
                 Deparment = "Insurance"
                },

                new Employee()
                {ID=4,
                 FirstName = "Tom",
                 LastName = "Jose",
                 Salary = 600000,
                 JoiningDate = new DateTime(),
                 Deparment = "Banking"
                },

                new Employee()
                {
                    ID = 4,
                    FirstName = "TestName2",
                    LastName = "Lname%",
                    Salary = 600000,
                    JoiningDate = new DateTime(2013,1,1),
                    Deparment = "Services"
                }

            };

            List<Incentive> incentives = new List<Incentive>()

            {

                new Incentive()
                { ID = 1,
                  IncentiveAmount = 5000,
                  IncentiveDate = new DateTime(2013,02,02)
                },

                new Incentive()
                {
                 ID = 2,
                 IncentiveAmount = 10000,
                 IncentiveDate = new DateTime(2013,02,4)
                },

                new Incentive()
                {
                    ID = 1,
                    IncentiveAmount = 6000,
                    IncentiveDate = new DateTime(2012,01,5)
                },

                new Incentive()
                {
                    ID = 2,
                    IncentiveAmount = 3000,
                    IncentiveDate = new DateTime(2012,01,5)
                }
            };
            //1.Get employee details from employees object whose employee name is “John” (note restrict operator)
            var result7 = employees.Where(x => x.FirstName == "John");
            foreach(var i in result7)
            {
                Console.WriteLine(i.ID+" "+i.FirstName+" "+" "+i.LastName+" "+i.Salary+" "+i.JoiningDate+" "+i.Deparment);
            }
            //2.Get FIRSTNAME,LASTNAMe from employees object(note project operator)
            var result = employees.Select(emp => new { FirstName = emp.FirstName, LastName = emp.LastName });
            foreach (var value in result)
            {
                Console.WriteLine(value.FirstName + " " + value.LastName);
            }
            //3.Select FirstName, IncentiveAmount from employees and incentives object for those employees who have incentives.(join operator)
            var result2 = from i in incentives
                          join e in employees on i.ID equals e.ID into EGroup
                          select new
                          {
                              incentives = i,
                              employees = EGroup
                          };
            Console.WriteLine("Incentive Amount and ID is:");
            foreach(var v in result2)
            {
                Console.Write(v.incentives.IncentiveAmount);
                foreach(var v1 in v.employees)
                {
                    Console.WriteLine(" "+v1.ID);
                }
            }
            //var result3 = from e in employees
            //              join i in incentives on e.ID equals i.ID into EGroup
            //              select new
            //              {
            //                  employees  = e,
            //                  incentives = EGroup
            //              };
            //foreach(var res in result3)
            //{
            //    Console.Write(res.employees.ID);
            //    foreach(var j in res.incentives)
            //    {
            //        Console.WriteLine(" "+j.IncentiveAmount);
            //    }
            //}
            //4.Get department wise maximum salary from employee table order by salary ascending(note group by)
            Console.WriteLine("Department wise maximum Salary is:");
            var result1 = from employee in employees group employee by employee.Deparment into g select new { Dept = g.Key,sal = g.Max(t => t.Salary) } into i orderby i.sal ascending select i;
            foreach (var value in result1)
            {
                Console.WriteLine(value.Dept+" "+value.sal);
            }

            //5.Select department, total salary with respect to a department from employees object where total salary greater than 800000 order by TotalSalary descending(group by having)
            Console.WriteLine("Department wise Total Salary is:");
            var result5 = from employee in employees orderby employee.Salary descending group employee by employee.Deparment into g select new { dept = g.Key, sal = g.Sum(t => t.Salary) }  into i where i.sal > 800000 select i;
            foreach (var value in result5)
            {
                Console.WriteLine(value.dept+" "+value.sal);
            }
        }
    }
}

 
 
