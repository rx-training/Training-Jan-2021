using System;
using System.Collections.Generic;
using System.Text;

namespace AssignmentTasks
{
    interface IEmp
    {
        void Get();

        void Display();

        double Salary();
    }

    abstract class Employee : IEmp
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public string PanNumber { get; set; }

        public virtual void Get()
        {
            Console.WriteLine("Please Enter Following Information");
        }

        public virtual void Display()
        {
            Console.WriteLine("Employee Information:");
        }

        public virtual double Salary()
        {
            return 0;
        }
    }

}
