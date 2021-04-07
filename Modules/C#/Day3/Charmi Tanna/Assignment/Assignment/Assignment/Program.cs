using System;

namespace Assignment
{
    interface I1
    {
        void Get();
        void Display();
        int Salary();
    }
    public abstract class Employee : I1
    {
        int ID;
        string Name,Address,PanNumber;
        
        public virtual void Get()
        {
            Console.WriteLine("Enter Employee ID");
            ID = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter Employee Name");
            Name = Console.ReadLine();
            Console.WriteLine("Enter Employee Address");
            Address = Console.ReadLine();
            Console.WriteLine("Enter Employee Pan Number");
            PanNumber = Console.ReadLine();
        }
        public virtual void Display()
        {
            Console.WriteLine($"EmployeeID is:{ID},Employee Name is:{Name},Employee Address is: {Address},Employee Pan Number is: {PanNumber} ");
        }
        public abstract int Salary();
    }
    public class PartTime : Employee
    {
        int SalaryPerHour,NoOfHours,salary;
        public override void Get()
        {
            base.Get();
            Console.WriteLine("Enter Employee Salary Per Hour");
            SalaryPerHour = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter Employee total No of Hours");
            NoOfHours = Convert.ToInt32(Console.ReadLine());
        }
        public override void Display()
        {
            base.Display();
            Console.WriteLine($"Salary Per Hour is:{SalaryPerHour},Total No of Hours:{NoOfHours}, Total Salary is : {salary}");
        }
        public override int Salary()
        {
            salary = NoOfHours * SalaryPerHour;
            return salary;
        }
    }
    public class FullTime : Employee
    { 
        int Basic, HRA, DA, TA,salary;
        public override void Get()
        {
            base.Get();
            Console.WriteLine("Enter Basic Salary Of Employee");
            Basic = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter HRA Of Employee");
            HRA = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter DA Of Employee");
            DA = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter TA Of Employee");
            TA = Convert.ToInt32(Console.ReadLine());
        }
        public override int Salary()
        {
            salary = 0;
            salary = Basic + DA + HRA + TA;
            return salary;
        }
        public override void Display()
        {
            base.Display();
            Console.WriteLine($"Basic is:{Basic},DA is:{DA}, HRA is : {HRA},TA is:{TA},Salary is:{salary}");
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            PartTime p = new PartTime();
            p.Get();
            p.Salary();
            p.Display();
            FullTime f = new FullTime();
            f.Get();
            f.Salary();
            f.Display();
        }
    }
}
