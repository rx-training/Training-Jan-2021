using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
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


            /* Get employee details from employees object whose employee name is “John” (note restrict operator)*/
            Console.WriteLine("======================Question 1====================================");
            var selectname = from SelectName in employees
                             where SelectName.FirstName == "John"
                             select SelectName;
            Console.WriteLine("Employee Details Whose Name Is John");
            foreach (var item in selectname)
            {
                Console.WriteLine($"First Name :-\t\t{ item.FirstName}");
                Console.WriteLine($"Last Name :-\t\t{ item.LastName}");
                Console.WriteLine($"Salary :-\t\t{item.Salary}");
                Console.WriteLine($"Date Of Joining :-\t{item.JoiningDate}");
                Console.WriteLine($"Department :-\t\t{ item.Deparment}");

            }
            Console.WriteLine(" ");
            Console.WriteLine();
            Console.WriteLine("=============================Question 2===============================");

            /* Get FIRSTNAME,LASTNAMe from employees object(note project operator)*/

            var fullName = from fname in employees
                           select new
                           {
                               FullName = fname.FirstName + " " + fname.LastName
                           };
            foreach (var item in fullName)
            {
                Console.WriteLine($"Full Name Of The Employee :-\t{item.FullName}");
            }

            Console.WriteLine(" ");
            Console.WriteLine();
            Console.WriteLine("=============================Question 3===============================");

            /* Select FirstName, IncentiveAmount from employees and incentives object for 
              those employees who have incentives.(join operator)*/

            var joinoperation = from emp in employees
                                join
                                ins in incentives on emp.ID equals ins.ID
                                select new
                                {
                                    FirstName=emp.FirstName,
                                    IncentiveAmount=ins.IncentiveAmount
                                };
            foreach (var item in joinoperation)
            {
                Console.WriteLine($"Employee Name :- {item.FirstName}");
                Console.WriteLine($"Insentive Amount :- {item.IncentiveAmount}");
            }

            Console.WriteLine(" ");
            Console.WriteLine();
            Console.WriteLine("=============================Question 4===============================");


            /*4. Get department wise maximum salary from employee table order by salary 
             * ascending (note group by)*/

            var sal = from ass in employees group ass by ass.Deparment
                      into d let otp = d.Max(a=>a.Salary)  orderby otp ascending
                      select new 
                      {
                          d.Key,
                          maxsal= otp
                      };
            foreach (var item in sal)
            {
                Console.WriteLine($"Department :-  {item.Key}");
                Console.WriteLine($"MaxSalary :-  {item.maxsal}");
            }


            Console.WriteLine(" ");
            Console.WriteLine();
            Console.WriteLine("=============================Question 5===============================");


            /*5  Select department, total salary with respect to a department from employees object where
             * total salary greater than 800000 order by TotalSalary descending(group by having)*/

            var data = from se in employees 
                         group se by se.Deparment into demo let opt= demo.Sum(p => p.Salary)
                       orderby  opt  descending
                       select new
                       {
                           demo.Key,
                           sumsal =opt,
                           
                           
                       };
            foreach (var item in data)
            {
                if (item.sumsal > 800000)
                {
                    Console.WriteLine($"Department :- {item.Key}");
                    Console.WriteLine($"Salary :- {item.sumsal}");
                }
            
            }

            









        }
    }
}
