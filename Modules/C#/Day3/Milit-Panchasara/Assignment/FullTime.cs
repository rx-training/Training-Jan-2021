using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment
{
    class FullTime : Employee
    {
        private int basic;
        private decimal hra;
        private decimal ta;
        private decimal da;

        public int Basic
        {
            get
            {
                return basic;
            }
            set
            {
                basic = value;
            }
        }
        public decimal HRA
        {
            get
            {
                return hra;
            }
            set
            {
                hra = value;
            }
        }

        public decimal TA
        {
            get
            {
                return ta;
            }
            set
            {
                ta = value;
            }
        }

        public decimal DA
        {
            get
            {
                return da;
            }
            set
            {
                da = value;
            }
        }

        public override int GetSalary()
        {
            return this.Basic + Convert.ToInt32(this.HRA + this.TA + this.DA);
        }

        public override void SetEmployeeData()
        {
            base.SetEmployeeData();

            var basic = String.Empty;
            var hra = String.Empty;
            var da = String.Empty;
            var ta = String.Empty;

            Console.WriteLine("Enter Basic Salary: ");
            basic = Console.ReadLine();
            int verifiedBasic;
            while (!int.TryParse(basic, out verifiedBasic))
            {
                Console.WriteLine("Please enter the correct salary: ");
                basic = Console.ReadLine();
            }

            Console.WriteLine("Enter HRA: ");
            hra = Console.ReadLine();
            decimal verifiedHRA;
            while (!decimal.TryParse(hra, out verifiedHRA))
            {
                Console.WriteLine("Please enter the correct HRA: ");
                hra = Console.ReadLine();
            }

            Console.WriteLine("Enter TA: ");
            ta = Console.ReadLine();
            decimal verifiedTA;
            while (!decimal.TryParse(ta, out verifiedTA))
            {
                Console.WriteLine("Please enter the correct TA: ");
                ta = Console.ReadLine();
            }

            Console.WriteLine("Enter DA: ");
            da = Console.ReadLine();
            decimal verifiedDA;
            while (!decimal.TryParse(da, out verifiedDA))
            {
                Console.WriteLine("Please enter the correct DA: ");
                da = Console.ReadLine();
            }

            this.Basic = verifiedBasic;
            this.HRA = verifiedHRA;
            this.TA = verifiedTA;
            this.DA = verifiedDA;
        }
        public override void DisplayEmployeeInfo()
        {
            base.DisplayEmployeeInfo();
            Console.WriteLine($"Salary :\t{this.GetSalary()}");
            Console.WriteLine("------------------------------------------------------------");
        }
    }
}
