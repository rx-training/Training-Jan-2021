using System;
using System.Collections.Generic;

namespace Assignment
{

    class Program
    {
        static void Main(string[] args)
        {
            List<Employee> employees = new List<Employee>();
            while (true)
            {
                Console.WriteLine();
                Console.WriteLine("Enter 1 For new Part Time Employee entry");
                Console.WriteLine("Enter 2 For new Full Time Employee entry");
                Console.WriteLine("Enter 3 to Display Employees");
                Console.WriteLine("Press any other number to exit");
                int choice = Convert.ToInt32(Console.ReadLine());


                if (choice == 1)
                {
                    Employee ep = new PartTime();
                    ep.get();
                    employees.Add(ep);
                }
                else if (choice == 2)
                {
                    Employee ef = new FullTime();
                    ef.get();
                    employees.Add(ef);
                }
                else if (choice == 3)
                {
                    foreach (var e in employees)
                    {
                        e.display();
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
