using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment
{
    class PartTime : Employee
    {
        int NoOfHour, saleperhour;

        public PartTime() : base()
        {
        }

        

        public override void get()
        {
            base.get();
            Console.WriteLine("Enter No Of Hours worked by EMployee");
            NoOfHour = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter Sale per Hour");
            saleperhour = Convert.ToInt32(Console.ReadLine());
        }

        private string salary()
        {
            return $"{ NoOfHour* saleperhour} INR";
        }

        public override void display()
        {
            base.display();
            Console.WriteLine($"Salary              {salary()}");
            Console.WriteLine("--------------------------------------------------");
        }
    }
}
