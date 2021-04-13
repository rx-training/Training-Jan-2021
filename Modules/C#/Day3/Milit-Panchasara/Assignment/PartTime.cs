using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment
{
    class PartTime : Employee
    {
        private int noOfHours;
        private int salaryPerHour;

        public int NoOfHours { 
            get
            {
                return noOfHours;
            }
            set
            {
                noOfHours = value;
            }
        }
        public int SalaryPerHour
        {
            get
            {
                return salaryPerHour;
            }
            set
            {
                salaryPerHour = value;
            }
        }

        public override int GetSalary()
        {
            return this.SalaryPerHour * this.NoOfHours;
        }

        public override void SetEmployeeData()
        {
            base.SetEmployeeData();

            var hours = String.Empty;
            var salary = String.Empty;

            Console.WriteLine("Enter number of hours worked: ");
            hours = Console.ReadLine();
            int verifiedHours;
            while (!Int32.TryParse(hours, out verifiedHours))
            {
                Console.WriteLine("Please enter the correct hours: ");
                hours = Console.ReadLine();
            }

            Console.WriteLine("Enter the salary");
            salary = Console.ReadLine();
            int verifiedSalary;
            while (!Int32.TryParse(salary, out verifiedSalary))
            {
                Console.WriteLine("Please enter the correct salary: ");
                salary = Console.ReadLine();
            }

            this.NoOfHours = verifiedHours;
            this.SalaryPerHour = verifiedSalary;
        }
        public override void DisplayEmployeeInfo()
        {
            base.DisplayEmployeeInfo();
            Console.WriteLine($"Salary :\t{this.GetSalary()}");
            Console.WriteLine("------------------------------------------------------------");
        }
    }
}
