using System;


namespace Practice_Exercise
{
    interface Emp
    {
        public void GetData(int id, string name, string address, string panno);
        public void Display();
        public int Salary();
    }

    public   abstract class Employeess : Emp
    {
        int id;
        string name;
        string address;
        string panno;
        public virtual void GetData(int id, string name, string address, string panno)
        {
            this.id = id;
            this.name = name;
            this.address = address;
            this.panno = panno;
        }
        public virtual void Display()
        {
            Console.WriteLine($"Id :- {id}");
            Console.WriteLine($"Name :- {name}");
            Console.WriteLine($"Address :- {address}");
            Console.WriteLine($"Pan NO :- {panno}");
        }
        public abstract  int Salary();
    }
    class PartTime : Employeess
    {

        public int noofhours { get; set; }
        public int salaryperhour { get; set; }
        int salary;
        public override int Salary()
        {
            salary = noofhours * salaryperhour;
            return salary;
        }
        
    }
    class FullTime: Employeess
    {
        public int Basic { get; set; }
        public int HRA { get; set; }
        public int TA { get; set;  }
        public int DA { get; set;  }
        int salary;
        public override int Salary()
        {
            salary = Basic + HRA + TA + DA;
            return salary;
        }
    }
class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("ENTER ID");
            int id =Convert.ToInt32( Console.ReadLine());
            Console.WriteLine("ENTER NAME");
            string Name = Console.ReadLine();
            Console.WriteLine("ENTER ADDRESS");
            string Address = Console.ReadLine();
            Console.WriteLine("ENTER PAN NO");
            string panno = Console.ReadLine();
            Console.WriteLine("Press 1 Calculate PartTime Salary");
            Console.WriteLine("Press 2 Calculate FullTime Salary");
            int ch = Convert.ToInt32(Console.ReadLine());
            switch (ch)
            {
                case 1:
                    PartTime p1 = new PartTime();
                    Console.WriteLine("Enter Number Of Hour");
                    p1.noofhours = Convert.ToInt32(Console.ReadLine());
                    Console.WriteLine("Enter Number Of Salary Per Hour");
                    p1.salaryperhour = Convert.ToInt32(Console.ReadLine());
                    int sal = p1.Salary();
                    p1.GetData(id, Name, Address, panno);
                    p1.Display();
                    Console.WriteLine("YOUR PART TIIME SALARY IS :-"+sal);
                    break;
                case 2:
                    FullTime fl = new FullTime();
                    Console.WriteLine("ENTER BASIC SALARY");
                    fl.Basic = Convert.ToInt32(Console.ReadLine());
                    Console.WriteLine("ENTER DA AMOUNT");
                    fl.DA = Convert.ToInt32(Console.ReadLine());
                    Console.WriteLine("ENTER HRA AMOUNT");
                    fl.HRA = Convert.ToInt32(Console.ReadLine());
                    int fullsal = fl.Salary();
                    fl.GetData(id, Name, Address, panno);
                    fl.Display();
                    Console.WriteLine("YOUR FULL TIIME SALARY IS :-" + fullsal); 
                    break;
            }

            
            Console.ReadLine();

        }
    }
}
