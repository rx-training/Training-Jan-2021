using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment
{
    class FullTime : Employee
    {
        int HRA, TA, DA, Basic;

        public FullTime() : base()
        {
        }

        public override void get()
        {
            base.get();
            Console.WriteLine("Enter Basic of EMployee");
            Basic = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter HRA of Employee");
            HRA = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter TA of Employee");
            TA = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter DA of Employee");
            DA = Convert.ToInt32(Console.ReadLine());
            
        }

        private string salary()
        {
            return $"{Basic + HRA + TA + DA} INR";
        }

        public override void display()
        {
            base.display();
            Console.WriteLine($"Salary              {salary()}");
            Console.WriteLine("-----------------------------------------------");
        }
    }
}
