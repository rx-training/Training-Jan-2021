using System;

namespace EmployeePayRollSystem
{
    class Program
    {
        static void Main(string[] args)
        {
            
            Console.WriteLine("Hello World!");
            Console.WriteLine("Welcome to Our Office");
            Console.WriteLine("enter 1 for Fulltime And Enter 2 For Parttime");
            
            int choice = Convert.ToInt32(Console.ReadLine());
          
            /*static void info (Employee E)
            {
                e.GetEmployeedata();
                e.display();
            }*/
            switch (choice)
            {
                case 1:
                    FullTime f1 = new FullTime();
                    f1.GetEmployeedata();
                    f1.display();
                    break;
                 case 2:
                    PartTime p1 = new PartTime() ;
                    p1.GetEmployeedata();
                    p1.display();
                    break;
                default:
                    Console.WriteLine("enter valid choice");
                    break;
            }
            



        }
    }
}
