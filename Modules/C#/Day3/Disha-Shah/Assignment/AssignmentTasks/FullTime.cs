using System;
using System.Collections.Generic;
using System.Text;

namespace AssignmentTasks
{

    class FullTime : Employee
    {
        public double Basic { get; set; }

        private double hra;

        private double ta;

        private double da;

        public override void Get()
        {
            base.Get();
            Console.WriteLine();

            Console.WriteLine("Enter Employee Id:");
            Id = Convert.ToInt32(Console.ReadLine());
            while (Id <= 0)
            {
                Console.WriteLine("Employee Id can't be negative, Enter correct Employee Id");
                Id = Convert.ToInt32(Console.ReadLine());
            }

            Console.WriteLine("Enter Name:");
            Name = Console.ReadLine();


            Console.WriteLine("Enter Address:");
            Address = Console.ReadLine();


            Console.WriteLine("Enter Pan Number:");
            PanNumber = Console.ReadLine();


            Console.WriteLine("Enter Basic Salary Amount:");
            Basic = Convert.ToInt32(Console.ReadLine());
            while (Basic <= 0)
            {
                Console.WriteLine("Employee's Basic Salary can't be negative, Enter correct Employee's Basic Salary");
                Basic = Convert.ToInt32(Console.ReadLine());
            }

            hra = Basic * 0.2;

            ta = Basic * 0.2;

            da = Basic * 0.4;

            Console.WriteLine();


        }

        public override void Display()
        {
            base.Display();
            Console.WriteLine();
            Console.WriteLine($"Id: {Id}");
            Console.WriteLine($"Name: {Name}");
            Console.WriteLine($"Address: {Address}");
            Console.WriteLine($"Pan Number: {PanNumber}");
            Console.WriteLine($"Basic Salary: {Basic}");
            Console.WriteLine($"House Rent Allowance: {hra}");
            Console.WriteLine($"Travelling Allowance: {ta}");
            Console.WriteLine($"Dearness Allowance: {da}");
            Console.WriteLine($"Gross Salary: {Salary()}");
            Console.WriteLine();


        }

        public override double Salary()
        {
            return Basic + hra + ta + da;
        }
    }
}
