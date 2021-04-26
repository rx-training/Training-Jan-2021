using System;
using System.Collections.Generic;
using System.Linq;

namespace Day7Assignment
{
    class Employee
    {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public double Salary { get; set; }
        public DateTime JoiningDate { get; set; }
        public string Deparment { get; set; }

        public override string ToString()
        {
            return $"Id : {ID}, Full Name : {FirstName + LastName}, Salary : {Salary}, Joining Date : {JoiningDate}, Department : {Deparment}";
        }
    }
    
    class Incentive
    {
        public int ID { get; set; }
        public double IncentiveAmount { get; set; }
        public DateTime IncentiveDate { get; set; }

        public override string ToString()
        {
            return $"ID : {ID}, Amount : {IncentiveAmount}, Date {IncentiveDate}";
        }
    }

    class Day7Assignment
    {
        static void Main(string[] args)
        {
            List<Employee> employees = new List<Employee>()
            {
                new Employee(){ ID=1,FirstName="John   ",LastName="Abraham",Salary=1000000,JoiningDate=new DateTime(2013,1,1),Deparment="Banking"},
                new Employee(){ID=2,FirstName="Michael",LastName="Clarke",Salary=800000,JoiningDate=new DateTime(),Deparment="Insurance" },
                new Employee(){ID=3,FirstName="Roy",LastName="Thomas",Salary=700000,JoiningDate=new DateTime() ,Deparment="Insurance"},
                new Employee(){ID=4,FirstName="Tom",LastName="Jose",Salary=600000,JoiningDate=new DateTime() ,Deparment="Banking"},
                new Employee(){ID=4,FirstName="Kery",LastName="Josen",Salary=600000,JoiningDate=new DateTime(2013,1,1) ,Deparment="Services"}
            };

            List<Incentive> incentives = new List<Incentive>()
            {
                new Incentive(){ ID=1,IncentiveAmount=5000,IncentiveDate=new DateTime(2013,02,02)},
                new Incentive(){ID=2,IncentiveAmount=10000,IncentiveDate=new DateTime(2013,02,4)},
                new Incentive(){ID=1,IncentiveAmount=6000,IncentiveDate=new DateTime(2012,01,5)},
                new Incentive(){ID=2,IncentiveAmount=3000,IncentiveDate=new DateTime(2012,01,5)}
            };

            //employees.ForEach(s => Console.WriteLine(s.FirstName));
            //incentives.ForEach(s => Console.WriteLine(s.IncentiveDate));

            //1.Get employee details from employees object whose employee name is “John” (note restrict operator)
            var employee1 = employees.Where(s => (s.FirstName).Trim(' ') == "John");
            Console.WriteLine();
            Console.WriteLine($"1.\tGet employee details from employees object whose employee name is “John”");
            Console.WriteLine();
            Console.WriteLine($"\tEmployee Data whose firstName is 'John'\n");
            foreach (var item in employee1)
            {
                Console.WriteLine($"\t{item.ToString()}");
            }
            Console.WriteLine($"--------------------------------------------------------------------------------------------------------------");
           
            //2.Get FIRSTNAME, LASTNAMe from employees object(note project operator)
            var employee2 = from s in employees
                            select new { 
                                FirstName = s.FirstName,
                                LastName = s.LastName
                            };
            Console.WriteLine();
            Console.WriteLine($"2.\tGet FIRSTNAME, LASTNAMe from employees object");
            Console.WriteLine();
            Console.WriteLine($"\t Name of Employees");
            Console.WriteLine($"\t-------------------------");
            foreach (var item in employee2)
            {
                Console.WriteLine($"\t {item.FirstName.Trim(' ')} {item.LastName}");
            }

            //3.Select FirstName, IncentiveAmount from employees and incentives object for those employees who have incentives.(join operator)

            Console.WriteLine($"--------------------------------------------------------------------------------------------------------------");
            Console.WriteLine();
            Console.WriteLine($"3.\tSelect FirstName, IncentiveAmount from employees and incentives object for those employees who have incentives.");
            Console.WriteLine();
            var employee3 = employees.Join(
                    incentives,
                    emp => emp.ID,
                    inc => inc.ID,
                    (emp,inc) => new
                    {
                        EmpId = emp.ID,
                        EmpData =emp,
                        IncData = inc
                    }
                );
            Console.WriteLine($"\t------------------------------------------------------------------------------------------------------------");

            Console.WriteLine($"\tEmplpoyee Id \t Employee Name \t Incentive amount\t Incentive object");
            Console.WriteLine($"\t------------------------------------------------------------------------------------------------------------");
            foreach (var item in employee3)
            {
                Console.WriteLine($"\t\t{item.EmpId} \t {item.EmpData.FirstName}\t       {item.IncData.IncentiveAmount} \t\t {item.IncData.ToString()}");
            }
            
            //4.Get department wise maximum salary from employee table order by salary ascending(note group by)
            
            Console.WriteLine($"--------------------------------------------------------------------------------------------------------------");
            Console.WriteLine();
            Console.WriteLine($"4.\tGet department wise maximum salary from employee table order by salary ascending");
            Console.WriteLine();
            var employee4 = from s in employees
                            group s by s.Deparment into departmentgrp
                            let topSal = departmentgrp.Max(x => x.Salary)
                            orderby topSal
                            select new
                            {
                                dept = departmentgrp.Key,
                                TopSal = departmentgrp.First(y => y.Salary == topSal).ID,//to get employee Id
                                MaxSal = topSal
                            };


            var emp4 = employees.GroupBy(e => e.Deparment).Select(e => new { 
                 dept = e.Key,
                TopSal = e.Max(s => s.Salary)
            }).OrderBy(s=>s.TopSal);

            //foreach (var item in emp4)
            //{
            //    Console.WriteLine($"{item.deptName} {item.TopSal}");
            //}
           

            Console.WriteLine($"\tDepartMent \t Max Salary");
            Console.WriteLine($"\t-----------------------------");
            foreach (var item in employee4)
            {
                Console.WriteLine($"\t{item.dept} \t  {item.MaxSal}");
            }
            
            //5.Select department, total salary with respect to a department from employees object where total salary greater than 800000 order by TotalSalary descending(group by having)
            
            Console.WriteLine($"--------------------------------------------------------------------------------------------------------------");
            Console.WriteLine();
            Console.WriteLine($"5.\tSelect department, total salary with respect to a department from employees object where total salary greater than 800000 order by TotalSalary descending");
            Console.WriteLine();
            var employee5 = from s in employees
                            group s by s.Deparment into departmentGrp
                            let sumSal = departmentGrp.Sum(x => x.Salary)
                            where sumSal > 800000
                            orderby sumSal descending
                            select new
                            {
                                dept = departmentGrp.Key,
                                SumSal = sumSal 
                            };
            //using another way
            var emp5 = employees.GroupBy(e => e.Deparment).Select(e => new { 
                deptName = e.Key,
                SumSal = e.Sum(s =>s.Salary)
            }).Where(e => e.SumSal > 800000).OrderByDescending(s=>s.SumSal);
            
            Console.WriteLine($"\tDepartMent \t Sum Salary");
            Console.WriteLine($"\t-----------------------------");
            foreach (var item in employee5)
            {
                Console.WriteLine($"\t{item.dept} \t  {item.SumSal}");
            }
        }
    }
}
