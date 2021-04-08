using System;
using System.Collections.Generic;
using System.Text;

namespace EmployeePayRollSystem
{
  public interface Emp
    {
       public void GetEmployeedata();
       public void display();
      public   decimal Salary();

    }
   public abstract class Employee : Emp
    {
        public int ID ;
        public string Name ;
        public string Address ;
        public string PAN ;
       /* public employee(int id,string name,string address,string pan)
        {
            this.id = id;
            this.name = name;
            this.address = address;
            this.pan = pan;
        }*/
        public virtual void GetEmployeedata()
        {
            Console.WriteLine("Enter ID");
            ID= Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("enter Name");
            Name = Console.ReadLine();
            Console.WriteLine("Enter address");
            Address = Console.ReadLine();;
            Console.WriteLine("Enter PAN");
            PAN = Console.ReadLine();
        }
       public virtual void display() {
            Console.WriteLine($"Employee name is{ this.Name}");
            Console.WriteLine($"Emplopyee Id is :{this.ID}");
            Console.WriteLine($"Employee PAN:{this.PAN}");
            Console.WriteLine($"Employee Address is:{this.Address}");
        }
      public virtual decimal Salary() { return 0; }




    }
    public class PartTime : Employee
    { 
       /* public PartTime(int id,string Name,string Address , string PAN)
            : base(id,Name,Address,PAN)
        {
            
        }*/
        public int NoOfhours;
        public int SalesPerHour ;
        public override void GetEmployeedata()
        {
            base.GetEmployeedata();
            Console.WriteLine("Enter SalesPerHour");
            SalesPerHour = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter NoofHours");
            NoOfhours = Convert.ToInt32(Console.ReadLine());
        }

        public override decimal Salary()
        {
            return NoOfhours * SalesPerHour;
        }
        public override void display()
        {
            base.display();
            Console.WriteLine($"employee salary is:{Salary()}");
        }
    }
    public class FullTime : Employee {
        /*public FullTime(int id, string Name, string Address, string PAN)
         : base(id, Name, Address, PAN)
        {
           
        }*/
        private decimal HRA = 120.5m;
        private decimal TD = 10.5m;
        private decimal TA = 7.5m;
        private int basic;

        public override void GetEmployeedata()
        {
            base.GetEmployeedata();
            Console.WriteLine("Enter Basic salary");
           basic = Convert.ToInt32(Console.ReadLine());
        }


        public override decimal Salary()
        {
            return basic + HRA + TD + TA;
        }
        public override void display()
        {
            base.display();
            Console.WriteLine($"Employee salary is:{Salary()}");
        }
    }


}
