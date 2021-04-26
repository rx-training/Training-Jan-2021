using System;
using System.Collections;
using System.Linq;
using System.Text;
using System.Collections.Generic;
namespace Practice1
{
    public class Student
    {
        public int StudentID { get; set; }
        public string StudentName { get; set; }
        public int Age { get; set; }
    }
    public class Employee
    {
        public int EmployeeID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public int Salary { get; set; }
        public static List<Employee> GetAllEmployees()
        {
            List<Employee> EmployeesList = new List<Employee>
            {
            new Employee
            {
                EmployeeID = 101,
                FirstName = "Riya",
                LastName = "Patel",
                Gender = "Female",
                Salary = 50000
            },
            new Employee
            {
                EmployeeID = 102,
                FirstName = "John",
                LastName = "Shah",
                Gender = "Male",
                Salary = 40000
            },
            new Employee
            {
                EmployeeID = 103,
                FirstName = "Roy",
                LastName = "Patel",
                Gender = "Male",
                Salary = 70000
            },
            new Employee
            {
                EmployeeID = 104,
                FirstName = "Reema",
                LastName = "Shah",
                Gender = "Female",
                Salary = 60000
            },
        };
            return EmployeesList;

        }
    }
    class Department
    {
        public int DepartmentID { get; set; }
        public string DepartmentName { get; set; }
        public int EmployeeID { get; set; }
        public static List<Department> GetDepartments()
        {
            List<Department> DepartmentList = new List<Department>()
            {
                new Department{ DepartmentID=1,DepartmentName="Banking",EmployeeID=101},
                new Department{ DepartmentID=1,DepartmentName="Banking",EmployeeID=102},
                new Department { DepartmentID=2,DepartmentName= "Insurance",EmployeeID= 101},
                new Department { DepartmentID =2, DepartmentName="Insurance", EmployeeID=102 },
            };
            return DepartmentList;
        }

    }
    class Program
    {
        static void Main(string[] args)
        {
            int[] Studentsage = { 20, 30, 12, 10, 23, 6, 21, 22, 45, 33, 26 };
            //Take
            var TakeList = Studentsage.Take(2);
            foreach( var i in TakeList)
            {
                Console.WriteLine(i);
            }
            IList<Student> studentList = new List<Student>() 
            {
                new Student() { StudentID = 1, StudentName = "John", Age = 18 } ,
                new Student() { StudentID = 2, StudentName = "Steve",  Age = 21 } ,
                new Student() { StudentID = 3, StudentName = "Bill",  Age = 18 } ,
                new Student() { StudentID = 4, StudentName = "Ram" , Age = 20 } ,
                new Student() { StudentID = 5, StudentName = "Ron" , Age = 21 }
            };

            var lowercaseStudentNames = from s in studentList
                                        where s.StudentName.ToLower().StartsWith("r")
                                        select s.StudentName.ToLower();
            //Let
         

            foreach (var name in lowercaseStudentNames)
                Console.WriteLine(name);
          
            //All
            var AllList = Studentsage.All(Studentsage => Studentsage > 5);
            Console.WriteLine(AllList);
            //Any
            Console.WriteLine("Result of any:");
            var AnyList = Studentsage.Any(Studentsage => Studentsage > 20);
            Console.WriteLine(AnyList);
            //Deferred Execution
            Console.WriteLine("Result of deffered execution");
            var Exec1 = from i in Studentsage where i > 20 select i;
            foreach(var i in Exec1)
            {
                Console.WriteLine(i);
            }
         
            //Immediate Execution
            var Exec2 = Studentsage.Count();
            Console.WriteLine(Exec2);
            //Groupby
            //var group = Employee.GetAllEmployees().GroupBy(x => x.Gender).ToList();
            var group = Employee.GetAllEmployees().ToLookup(x => x.Gender).ToList();
            foreach (var i in group)
            {
                Console.WriteLine(i.Key);
                foreach( var j in i)
                {
                    Console.WriteLine(j.FirstName);
                }
            }
            //Element Operators
            //First
            /*int[] num4 = { };
            var res4 = num4.First();
            Console.WriteLine(res4);*/
            Console.WriteLine("result");
            int[] numbers3 = { 10,20,30,40,50,10};
            var result12 = numbers3.First();
            Console.WriteLine(result12);

            int result13 = numbers3.First(x=>x%2==0);
            Console.WriteLine(result13);

            //FirstOrDefault
            int[] num4 = { };
            var res4 = num4.FirstOrDefault();
            Console.WriteLine(res4);
            var result14 = numbers3.FirstOrDefault();
            Console.WriteLine(result14);
            //Last
            Console.WriteLine("value from last is");
            var result15 = numbers3.Last();
            Console.WriteLine(result15);

            int result16 = numbers3.Last(x => x % 2 == 0);
            Console.WriteLine(result16);

            //LastOrDefault
            var res5 = num4.LastOrDefault();
            Console.WriteLine(res5);
            var result17 = numbers3.LastOrDefault();
            Console.WriteLine(result17);

            //ElementAt
            Console.WriteLine("value from element at is");
            var result18 = numbers3.ElementAt(3);
            Console.WriteLine(result18);

            //ElemetAtOrDefault
            var res6 = num4.ElementAtOrDefault(3);
            Console.WriteLine(res5);
            var result19 = numbers3.LastOrDefault();
            Console.WriteLine(result19);

            //Single
            int[] num7 = { 10 };
            int[] num8 = { 10 ,11};
            Console.WriteLine("value from single is");
            var result20 = num7.Single();
            Console.WriteLine(result20);
            int result21 = num8.Single(x => x % 2 == 0);
            Console.WriteLine(result21);

            //SingleOrDefault
            var res7 = num4.SingleOrDefault();
            Console.WriteLine(res7);

            //DefalutIfEmpty
            Console.WriteLine("value using Defalut if empty");
            IEnumerable<int> res11 = num4.DefaultIfEmpty();
            foreach(var i in res11)
            {
                Console.WriteLine(i);
            }
            int[] num10 = { 20, 30, 40 };
            IEnumerable<int> res10= num10.DefaultIfEmpty();
            foreach(var i in res10)
            {
                Console.WriteLine(i);
            }
            

            int[] num1 = { 10, 20, 30, 40, 50 };
            int[] num2 = { 10, 60, 70, 80, 20 };

            //Union
            var result9 = num1.Union(num2);
            foreach (var i in result9)
            {
                Console.WriteLine(i);
            }
            //Intersect
            Console.WriteLine("Intersect result is:");
            var result10 = num1.Intersect(num2);
            foreach (var i in result10)
            {
                Console.WriteLine(i);
            }
            //Except
            Console.WriteLine("Except result is:");
            var result11 = num1.Except(num2);
            foreach (var i in result11)
            {
                Console.WriteLine(i);
            }

            //Join
            var result8 = Department.GetDepartments().GroupJoin(Employee.GetAllEmployees(), d => d.EmployeeID, e => e.EmployeeID, 
                (departments,employees) => new 
            {
                Department = departments,
                Employee = employees 
            });
            foreach(var department in result8)
            {
                Console.WriteLine(department.Department.EmployeeID);
                foreach(var employee in department.Employee)
                {
                    Console.WriteLine(employee.FirstName);
                }
            }
            //join 
            var DepartmentEmployee = from dept in Department.GetDepartments()
                                     join emp in Employee.GetAllEmployees()
                                     on dept.EmployeeID equals emp.EmployeeID into DeptEmp
                                     select new
                                     {
                                         Department = dept,
                                         Employee = DeptEmp
                                     };
            foreach (var department in DepartmentEmployee)
            {
                Console.WriteLine(department.Department.EmployeeID);
                foreach (var employee in department.Employee)
                {
                    Console.WriteLine(employee.FirstName);
                }
            }
            string[] StudentsNames = { "Beena", "Rita", "Reena", "John", "Roy" };
            //Select
            var z = from i in Studentsage select i;
            //where
            var a = from i in Studentsage where i > 20 select i;
            //Order by
            var b = from i in Studentsage where i > 20 orderby i descending select i;
            //Contains
            var c = from i in StudentsNames where i.Contains("e") select i;
            //Name starts with B
            var d = from i in StudentsNames where i.StartsWith("B") select i;
            //Maximum 
            var max = Studentsage.Max();
            //Maximum 
            var min = Studentsage.Min();
            //Average
            var avg = Studentsage.Average();
            //Sum
            var sum = Studentsage.Sum();
            //Count
            var count = Studentsage.Count();
            //Count
            var aggregate = Studentsage.Aggregate(func: Add);
            //cast
            ArrayList numbers = new ArrayList();
            numbers.Add(1);
            numbers.Add(2);
            numbers.Add(3);
            IEnumerable<int> result = numbers.Cast<int>();
            //OfType
            ArrayList numbers1 = new ArrayList();
            numbers1.Add(20);
            numbers1.Add(30);
            numbers1.Add(40);
            numbers1.Add("xyz");
            numbers1.Add("abc");
            IEnumerable<int> result1 = numbers1.OfType<int>();
            //Projection Operators
            IEnumerable<string> res = Employee.GetAllEmployees().Select(emp => emp.FirstName);

            var result3 = Employee.GetAllEmployees().Select(emp => new { FirstName = emp.FirstName, Gender = emp.Gender });

            var result4 = Employee.GetAllEmployees().Select(emp => new { FullName = emp.FirstName + " " + emp.LastName, Monthlysalary = emp.Salary / 12 });

            var result5 = Employee.GetAllEmployees().Where(emp => emp.Salary > 50000).Select(emp => new { Name = emp.FirstName, Salary = emp.Salary, Bonus = emp.Salary * 0.1 });

            //Group by 
            var EmployeeGroups = Employee.GetAllEmployees().GroupBy(x => x.Gender);
            foreach (var value in EmployeeGroups)
            {
                Console.WriteLine(value.Key + " " + value.Count());
            }

            //Group by Male 
            var EmployeeGroups1 = Employee.GetAllEmployees().GroupBy(x => x.Gender);
            foreach (var value in EmployeeGroups1)
            {
                Console.WriteLine(value.Key + " " + value.Count(x => x.Gender == "Male"));
            }

            //Group by max salary
            var EmployeeGroups2 = from employee in Employee.GetAllEmployees() group employee by employee.Gender;
            foreach (var value in EmployeeGroups1)
            {
                Console.WriteLine(value.Key + " " + value.Max(x => x.Salary));
            }

            //Rstriction Operators
            Employee.GetAllEmployees().Where(x => x.Gender == "Female" );
            //Func<int, bool> predicate = x => x % 2 == 0;
            IEnumerable<int> list1 = from age in Studentsage where age % 2 == 0 select age;
            foreach(int i in list1)
            {
                Console.WriteLine(i);
            }

            var list2 = Studentsage.Select((age, index) => new { Age = age, Index = index }).Where(x => x.Age % 2 == 0 ).Select(x => x.Index);
            foreach(var value in list2)
            {
                //Console.WriteLine(value.Age+" "+value.Index);
                Console.WriteLine(value);
            }

            foreach (int i in list1)
            {
                Console.WriteLine(i);
            }

            IEnumerable<int> evenNumbers = Studentsage.Where(num => IsEven(num));

            IEnumerable<int> AgeList = Studentsage.Where(x => x % 2==0);
            foreach(var value in AgeList)
            {
                Console.WriteLine(value);
            }

            foreach (var value in result5)
            {
                Console.WriteLine(value.Name + " " + value.Salary + " " + value.Bonus);
            }
            foreach (var value in result3)
            {
                Console.WriteLine(value.FirstName + " " + value.Gender);
            }
            foreach (var value in result4)
            {
                Console.WriteLine(value.FullName + " " + value.Monthlysalary);
            }
            foreach (string value in res)
            {
                Console.WriteLine(value);
            }
            foreach (int i in result1)
            {
                Console.WriteLine(i);
            }

            foreach (int i in result)
            {
                Console.WriteLine(i);
            }
            foreach (var value in z)
            {
                Console.WriteLine(value);
            }
            foreach (var item in a)
            {
                Console.WriteLine(item);
            }
            foreach (var item in b)
            {
                Console.WriteLine(item);
            }
            foreach (var item in c)
            {
                Console.WriteLine(item);
            }
            foreach (var item in d)
            {
                Console.WriteLine(item);
            }
            Console.WriteLine(max);
            Console.WriteLine(min);
            Console.WriteLine(avg);
            Console.WriteLine(sum);
            Console.WriteLine(count);
            Console.WriteLine(aggregate);
        }
        private static bool IsEven(int number)
        {
            if(number%2==0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        public static int Add(int x, int y)
        {
            return x + y;
        }
    }
    }

