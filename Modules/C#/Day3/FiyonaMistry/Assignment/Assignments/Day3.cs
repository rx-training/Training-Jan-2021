using System;

namespace Assignments
{
    interface Emp
    {
        public void get() { }
        public void display() { }
        public int salary() { return default; }
    }

    public abstract class Employee : Emp
    {
        public virtual void get()
        {
            this.ID = ID;
            this.Name = Name;
            this.Address = Address;
            this.PanNumber = PanNumber;
        }
        public virtual void display()
        {
            Console.WriteLine("ID : " + ID);
            Console.WriteLine("Name : " + Name);
            Console.WriteLine("Address : " + Address);
            Console.WriteLine("Pan Number : " + PanNumber);
        }

        public int ID { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public int PanNumber { get; set; }
    }

    public class PartTime : Employee
    {
        public int NoOfHour { get; set; }
        public int SalePerHour { get; set; }

        public PartTime(int noOfHour, int salePerHour)
        {
            this.NoOfHour = noOfHour;
            this.SalePerHour = salePerHour;
        }

        public int salary()
        {
            return this.NoOfHour * this.SalePerHour;
        }
        public void display()
        {
            Console.WriteLine("Salary : " + salary());
        }
    }

    public class FullTime : Employee
    {
        public int Basic { get; set; }
        public int HRA { get; set; }
        public int TA { get; set; }
        public int DA { get; set; }

        public FullTime()
        {
            this.Basic = Basic;
            this.HRA = HRA;
            this.TA = TA;
            this.DA = DA;
        }

        public int salary()
        {
            return this.Basic + this.HRA + this.TA + this.DA;
        }

        public void display()
        {
            Console.WriteLine("Salary : " + salary());
        }
    }

    class Day3
    {
        static void Main(string[] args)
        {
            string time;
            Employee emp = new FullTime();

            Console.Write("Enter Id : ");
            emp.ID = Convert.ToInt32(Console.ReadLine());

            Console.Write("Enter Name : ");
            emp.Name = Console.ReadLine();

            Console.Write("Enter Address : ");
            emp.Address = Console.ReadLine();

            Console.Write("Enter Pan card number : ");
            emp.PanNumber = Convert.ToInt32(Console.ReadLine());

            Console.Write("Full Time / Part Time Employee : ");
            time = Console.ReadLine();

            if (time == "part")
            {
                int NoOfHour, SalePerHour;

                Console.Write("Number of hours worked : ");
                NoOfHour = Convert.ToInt32(Console.ReadLine());

                Console.Write("Sales made per hour : ");
                SalePerHour = Convert.ToInt32(Console.ReadLine());

                PartTime pt = new PartTime(NoOfHour, SalePerHour);
                pt.display();
            }

            else if(time == "full")
            {
                FullTime ft = new FullTime();

                Console.Write("Enter basic Salary : ");
                ft.Basic = Convert.ToInt32(Console.ReadLine());

                Console.Write("Enter HRA : ");
                ft.HRA= Convert.ToInt32(Console.ReadLine());

                Console.Write("Enter TA : ");
                ft.TA= Convert.ToInt32(Console.ReadLine());

                Console.Write("Enter DA : ");
                ft.DA = Convert.ToInt32(Console.ReadLine());

                ft.display();
            }

            emp.display();

            Console.WriteLine("Hello World!");
        }
    }
}
