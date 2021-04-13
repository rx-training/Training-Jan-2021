using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment
{
    abstract class Employee : IEmp
    {
        private static int idSeed = 1;
        private int id;
        private string name;
        private string address;
        private long panNumber;

        public int Id { 
            get
            {
                return id;
            }
        }
        public string Name { 
            get
            {
                return name;
            }
            set
            {
                name = value;
            }
        }
        public string Address
        {
            get
            {
                return address;
            }
            set
            {
                address = value;
            }
        }
        public long PanNumber
        {
            get
            {
                return panNumber;
            }
        }

        public Employee()
        {
            this.id = idSeed;
            idSeed++;
        }
        public abstract int GetSalary();
        public virtual void SetEmployeeData()
        {
            var name = String.Empty;
            var address = String.Empty;
            var panNumber = String.Empty;

            Console.WriteLine("Enter the name of the Employee: ");
            name = Console.ReadLine();
            while(name.Trim() == String.Empty)
            {
                Console.WriteLine("Please enter the name of the Employee: ");
                name = Console.ReadLine();
            }

            Console.WriteLine("Enter the address: ");
            address = Console.ReadLine();
            while (address.Trim() == String.Empty)
            {
                Console.WriteLine("Please enter the address: ");
                address = Console.ReadLine();
            }

            Console.WriteLine("Enter Pan Card Number");
            panNumber = Console.ReadLine();
            long verifiedPanNo = 0;
            while(panNumber.Trim().Length != 10 || !Int64.TryParse(panNumber, out verifiedPanNo))
            {
                Console.WriteLine("Please enter the pan number: ");
                panNumber = Console.ReadLine();
            }

            this.Name = name;
            this.Address = address;
            this.panNumber = verifiedPanNo;

        }
        public virtual void DisplayEmployeeInfo()
        {
            Console.WriteLine("------------------------------------------------------------");
            Console.WriteLine($"ID:\t\t{this.Id}");
            Console.WriteLine($"Name:\t\t{this.Name}");
            Console.WriteLine($"Address:\t{this.Address}");
            Console.WriteLine($"Pan Number:\t{this.PanNumber}");
        }
    }
}
