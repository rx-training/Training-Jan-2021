using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment
{
    abstract class Employee : Emp
    {
        int id, pannumber;
        string name, address;

        public virtual void Emp.Get()
        {
            Console.WriteLine("Enter Employees id");
            id = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter Employees Pannumber");
            pannumber = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter Employees Name");
            name = Console.ReadLine();
            Console.WriteLine("Enter Employees Address");
            address = Console.ReadLine();
        }

        public virtual void Emp.Display()
        {
            Console.WriteLine("Employees id :-" + id);
            Console.WriteLine("Employees Name :-" + name);
            Console.WriteLine("Employees Address :-" + address);
            Console.WriteLine("Employees Pannumber :-" + pannumber);
        }


        public abstract void Emp.Salary()
        {
            throw new NotImplementedException();
        }
    }
}
