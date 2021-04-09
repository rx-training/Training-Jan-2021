using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment
{
    class Employee : Emp
    {
        int ID;
        string Name;
        string Address;
        string PAN;

        public Employee() { }
        
        
        public virtual void display() 
        {
            Console.WriteLine($"Details of EmployeeID {ID}");
            Console.WriteLine("----------------------------------------------------------");
            Console.WriteLine($"EmployeeID              {ID}");
            Console.WriteLine($"Name                    {Name}");
            Console.WriteLine($"Address                 {Address}");
            Console.WriteLine($"PAN Number              {PAN}");
        }

        public virtual void get() 
        {
            Console.WriteLine("Enter Employee ID");
            ID = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter Employee Name");
            Name = Console.ReadLine();
            Console.WriteLine("Enter Address");
            Address = Console.ReadLine();
            Console.WriteLine("Enter PAN Number of Employee");
            PAN = Console.ReadLine();
        }

        public void Salary() { }
    }
}
