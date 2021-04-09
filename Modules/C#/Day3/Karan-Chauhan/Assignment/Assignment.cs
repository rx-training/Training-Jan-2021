using System;

namespace Assignment
{
    interface Emp
    {

        public void Get(int Id, string Name, string Address, string PANNumber);

        public void Display();

        public int Salary();
    }

    public abstract class Employee : Emp
    {
        int Id;
        string Name;
        string Address;
        string PANNumber;
        public virtual void Get(int Id, string Name, string Address, string PANNumber)
        {
            this.Id = Id;
            this.Name = Name;
            this.Address = Address;
            this.PANNumber = PANNumber;
        }

        public virtual void Display()
        {
            Console.WriteLine($"Id: {Id}   Name: {Name}    Address: {Address}    PANNumber: {PANNumber}");
        }

        public abstract int Salary();
        
    }

    public class PartTime : Employee
    {
        public int noofhours { get; set; }
        public int salperhour { get; set; }
        public override int Salary()
        {
            return noofhours * salperhour;
        }
    }


    public class FullTime : Employee
    {
        public int basic { get; set; }
        public int HRA { get; set; }
        public int TA { get; set; }
        public int DA { get; set; }

        public override int Salary()
        {
            return basic + HRA + TA + DA;
        }
    }
    class Assignment
    {
        static void Main(string[] args)
        {
            Console.WriteLine("PLEASE ENTER THE FOLLOWING DETAILS:");
            Console.WriteLine("Enter the Name:");
            string name = Console.ReadLine();
            Console.WriteLine("Enter the Id:");
            int id = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter the Address:");
            string address = Console.ReadLine();
            Console.WriteLine("Enter the PAN Number:");
            string panno = Console.ReadLine();
            Console.WriteLine("Press 1)PartTime Salary 2)FullTime Salary");
            int choice = Convert.ToInt32(Console.ReadLine());

            

            switch (choice)
            {
                case 1:
                    Console.WriteLine("Enter the no of hours:");
                    int no = Convert.ToInt32(Console.ReadLine());
                    Console.WriteLine("Salary per hour:");
                    int sal = Convert.ToInt32(Console.ReadLine());
                    PartTime p = new PartTime();
                    p.noofhours = no;
                    p.salperhour = sal;
                    p.Get(id, name, address, panno);
                    Console.WriteLine("PartTime Salary is: "+p.Salary());
                    p.Display();                    
                    break;

                case 2:
                    Console.WriteLine("Enter the basic salary:");
                    int basic = Convert.ToInt32(Console.ReadLine());
                    Console.WriteLine("Enter the HRA:");
                    int hra = Convert.ToInt32(Console.ReadLine());
                    Console.WriteLine("Enter the TA:");
                    int ta = Convert.ToInt32(Console.ReadLine());
                    Console.WriteLine("Enter the DA:");
                    int da = Convert.ToInt32(Console.ReadLine());
                    FullTime f = new FullTime();
                    f.basic = basic;
                    f.HRA = hra;
                    f.TA = ta;
                    f.DA = da;
                    f.Get(id, name, address, panno);
                    Console.WriteLine("FullTime Salary is: "+f.Salary());
                    f.Display();
                    break;

                default:
                    Console.WriteLine("Invalid Choice!");
                    break;
            }
            
            

            Console.ReadKey();
        }
    }
}
