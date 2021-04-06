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

    class PartTime : Employee
    {
        public int NoOfHour { get; set; }

        private int salperhour = 500;

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

            Console.WriteLine("Enter No of hour:");
            NoOfHour = Convert.ToInt32(Console.ReadLine());
            while (NoOfHour <= 0)
            {
                Console.WriteLine("Number Of working hours can't be negative, Enter correct working hours");
                NoOfHour = Convert.ToInt32(Console.ReadLine());
            }

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
            Console.WriteLine($"Number Of Hours: {NoOfHour}");
            Console.WriteLine($"Salary Per Hour: {salperhour}");
            Console.WriteLine($"Gross Salary: {Salary()}");
            Console.WriteLine();


        }

        public override double Salary()
        {
            return NoOfHour * salperhour;
        }
    }

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
