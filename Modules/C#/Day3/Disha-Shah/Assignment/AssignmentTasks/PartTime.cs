using System;
using System.Collections.Generic;
using System.Text;

namespace AssignmentTasks
{

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

}
