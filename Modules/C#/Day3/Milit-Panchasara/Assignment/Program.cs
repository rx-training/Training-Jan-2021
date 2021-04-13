using System;
using System.Collections.Generic;

namespace Assignment
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Welcome");
            List<Employee> employeeList = new List<Employee>();
            while(true)
            {
                Console.WriteLine();
                Console.WriteLine("Press p to add PartTime Employee, \nPress f to add FullTime Employee, \nPress d to display all entered employees,\nPress any other key to exit.");
                char type = Console.ReadLine()[0];
                if (type == 'p')
                {
                    Employee newEmp = new PartTime();
                    newEmp.SetEmployeeData();
                    employeeList.Add(newEmp);
                }
                else if (type == 'f')
                {
                    Employee newEmp = new FullTime();
                    newEmp.SetEmployeeData();
                    employeeList.Add(newEmp);
                }
                else if (type == 'd')
                {
                    foreach (var emp in employeeList)
                    {
                        //Console.WriteLine(emp.GetType()); // Type of employee
                        emp.DisplayEmployeeInfo();
                    }
                }
                else
                {
                    break;
                }
            }
            
        }
    }
}
