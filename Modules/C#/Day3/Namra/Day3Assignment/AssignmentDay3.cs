using System;

namespace Day3Assignment
{
    interface Emp
    {
        void Get();
        void Display();
        void Salary();
    }
    abstract class Employee : Emp
    {
        public int ID{ get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string PanNumber { get; set; }

        public virtual void Get()
        {
            Console.WriteLine($"Enter Id of Employee :");
            ID = Convert.ToInt32( Console.ReadLine());
            Console.WriteLine($"Enter Name of Employee :");
            Name = Console.ReadLine();
            Console.WriteLine($"Enter Address of Employee :");
            Address = Console.ReadLine();
            Console.WriteLine($"Enter PanNumber of Employee :");
            PanNumber = Console.ReadLine();
        }
        public virtual void Display()
        {
            Console.WriteLine($"-----------------------------------------------------------------------------------------------------------------------");
            Console.WriteLine($"Id : {ID}\t Name : {Name} \t Address : {Address} \t PanNumber : {PanNumber}");
        }
        public abstract void Salary();

        
    }
    class PartTime : Employee
    {
        public int noOfHour { get; set; }
        public int SalePerHour { get; set;}
        int salary;
        public override void Salary()
        {
            salary = noOfHour * SalePerHour;
        }
        public override void Get()
        {
            base.Get();
            Console.WriteLine($"Enter number of hour employee worked : ");
            noOfHour = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine($"Enter Sale per hour of Employee");
            SalePerHour = Convert.ToInt32(Console.ReadLine());
        }
        public override void Display()
        {
            base.Display();
            Salary();
            Console.WriteLine($"No of Hours Worked  : {noOfHour} \t Sale per hour : {SalePerHour} \t Salary : {salary}");
            Console.WriteLine($"Salary of {Name} is {salary}");
            Console.WriteLine($"-----------------------------------------------------------------------------------------------------------------------");
        }
        public void GetSalary()
        {
            Get();
            Salary();
        }
    }
    class FullTime : Employee
    {
        public string field { get; set; }
        public int HRA { get; set; }
        public int TA { get; set; }
        public int DA { get; set; }
        int salary;
        public override void Salary()
        {
            salary = HRA + TA + DA;
        }
        public override void Get()
        {
            base.Get();
            Console.WriteLine($"Enter field, House rent allowance, Travelling allowance, Dearness Allowance respectively in order :");
            field = Console.ReadLine();
            HRA = Convert.ToInt32(Console.ReadLine());
            TA = Convert.ToInt32(Console.ReadLine());
            DA = Convert.ToInt32(Console.ReadLine());
        }
        public override void Display()
        {
            base.Display();
            Salary();
            Console.WriteLine($"Field is {field}, House Rent Allowance : {HRA}, Travelling Allowance : {TA} , Dearness Allowance : {DA}");
            Console.WriteLine($"Salary of {Name} is {salary}");
            Console.WriteLine($"-----------------------------------------------------------------------------------------------------------------------");
        }
        public void GetSalary()
        {
            Get();
            Salary();
        }
    }
    class AssignmentDay3
    {
        static void Main(string[] args)
        {
            //Console.WriteLine($"Full Time Employee");
            //FullTime f = new FullTime();
            //f.Get();
            //Console.WriteLine();
            //Console.WriteLine($"\nPart time Employee");
            //PartTime p = new PartTime();
            //p.Get();
            //Console.WriteLine($"\n\nFull time Employee {f.Name}");
            //f.Display();
            //Console.WriteLine($"\n\nPart time Employee {p.Name}");
            //p.Display();

            Employee[] empArr = new Employee[5];

            for (int i = 0; i < empArr.Length ; i++) 
            {
                Console.WriteLine($"Enter F for Full time or P for Part Time");
                char choice = Convert.ToChar(Console.ReadLine());

                if (choice == 'f' || choice == 'F')
                {
                    empArr[i] = new FullTime();
                    empArr[i].Get();
                    empArr[i].Salary();
                }
                else
                {
                    empArr[i] = new PartTime();
                    empArr[i].Get();
                    empArr[i].Salary();
                }
            }
            foreach(var item in empArr)
            {
                item.Display();
            }
        }
    }
}
