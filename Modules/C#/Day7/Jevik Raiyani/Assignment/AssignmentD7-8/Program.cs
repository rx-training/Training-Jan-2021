using System;
using System.Linq;
using System.Collections.Generic;

namespace AssignmentD7_8
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
            var a1 = employees.Find(s => s.FirstName == "John");
            Console.WriteLine(a1.FirstName, a1.LastName + " " + a1.ID);

            //2.Get FIRSTNAME,LASTNAMe from employees object(note project operator)
            var a2 = employees.Select(s => new { s.FirstName, s.LastName });
            foreach (var item in a2)
            {
                Console.WriteLine(item.FirstName + " " + item.LastName);
            }

            //3. Select FirstName, IncentiveAmount from employees and incentives object for those employees who have incentives.(join operator)

            var a3 = from emp in employees
                     join inc in incentives
                     on emp.ID equals inc.ID
                     select new
                     {
                         Name = emp.FirstName,
                         IncAmount = inc.IncentiveAmount
                     };
            foreach (var item in a3)
            {
                Console.WriteLine(item.Name + " " + item.IncAmount);
            }

            //4. Get department wise maximum salary from employee table order by salary ascending (note group by)
            var v4 = employees.GroupBy(e => e.Deparment)
                                    .Select(p => p.OrderByDescending(x => x.Salary).First());
                     
                     

            foreach (var item in v4)
            {
                Console.WriteLine(item.Deparment+" "+item.Salary);
            }
           

            //5. Select department, total salary with respect to a department from employees object where total salary greater than 800000 order by TotalSalary descending(group by having)
            var v5 = employees.GroupBy(e => e.Deparment)
                                    .Where(p => p.Sum(x => x.Salary) > 800000)
                                    .Select(s=>new {deptName =s.Key,
                                        depttoalSalary = s.OrderByDescending(x => x.Salary).Sum(c => c.Salary) });
            foreach (var item in v5)
            {
                Console.WriteLine(item.deptName+" "+item.depttoalSalary);
            }
                                    
        }
    }
}
