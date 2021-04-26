using System;
using System.Collections.Generic;
using System.Text;

namespace Assignments
{
    class Mobike
    {
        public string BikeNumber { get; set; }
        public long PhoneNumber { get; set; }
        public string Name { get; set; }
        public int Days { get; set; }
        public int Rent 
        {
            get
            {
                return this.Compute();
            }
        }

        public void Input()
        {
            Console.WriteLine("Enter bike number for the customer (10 characters): ");
            var newNumber = Console.ReadLine();
            while (string.IsNullOrWhiteSpace(newNumber) || newNumber.Length != 10)
            {
                Console.WriteLine("Enter bike number for the customer (10 characters): ");
                newNumber = Console.ReadLine();
            }
            Console.WriteLine("Enter name of the customer: ");
            var name = Console.ReadLine();
            while (string.IsNullOrWhiteSpace(name))
            {
                Console.WriteLine("Enter name of the customer: ");
                name = Console.ReadLine();
            }
            Console.WriteLine("Enter contact number of the customer (10 digits): ");
            var cn = Console.ReadLine();
            long verifiedCN;
            while (string.IsNullOrWhiteSpace(cn) || !long.TryParse(cn, out verifiedCN) || cn.Length != 10)
            {
                Console.WriteLine("Enter contact number of the customer (10 digits): ");
                cn = Console.ReadLine();
            }
            Console.WriteLine("Enter days: ");
            var days = Console.ReadLine();
            int verifiedDays;
            while (string.IsNullOrWhiteSpace(days) || !int.TryParse(days, out verifiedDays))
            {
                Console.WriteLine("Enter days: ");
                days = Console.ReadLine();
            }
            this.BikeNumber = newNumber;
            this.Name = name;
            this.PhoneNumber = verifiedCN;
            this.Days = verifiedDays;
        }

        private int Compute()
        {
            var days = this.Days;
            if(days >= 10)
            {
                return 5 * 500 + 5 * 400 + (days - 10) * 200;
            }
            else if (days > 5 && days < 10)
            {
                return 5 * 500 + (days - 5) * 400;
            }
            else
            {
                return days * 500;
            }
        }

        public void Display(bool showTableHeader = false)
        {
            if(showTableHeader)
            {
                Console.WriteLine();
                Console.WriteLine("------------------------------------------------------------");
                Console.WriteLine("| Bike Number\t | Name\t\t | Contact Number | Days\t | Rent\t\t |");
                Console.WriteLine("------------------------------------------------------------");
            }
            Console.Write($"| {this.BikeNumber}\t ");
            Console.Write($"| {this.Name}\t ");
            Console.Write($"| {this.PhoneNumber}\t  ");
            Console.Write($"| {this.Days}\t\t ");
            Console.Write($"| {this.Rent}\t\t ");
            Console.WriteLine("|");
        }
    }
}
