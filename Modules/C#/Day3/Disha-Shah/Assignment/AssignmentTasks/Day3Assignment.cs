using System;

namespace AssignmentTasks
{
    class Day3Assignment
    {
        static void Main(string[] args)
        {
            bool empMore = true;
            while (empMore)
            {

                Employee emp;

                Console.WriteLine("Select from below options:");
                Console.WriteLine("Enter p : PartTime Employee information");
                Console.WriteLine("Enter f : FullTime Employee information");
                char e = Convert.ToChar(Console.ReadLine());
                switch (e)
                {
                    case 'p':
                        emp = new PartTime();
                        EmployeeDisplay(emp);
                        break;
                    case 'f':
                        emp = new FullTime();
                        EmployeeDisplay(emp);
                        break;
                    default:
                        Console.WriteLine("Select valid choice");
                        break;
                }

                Console.WriteLine("Want to see information of more employees? (Y/N)");
                char ans = Convert.ToChar(Console.ReadLine());
                if (ans == 'Y')
                {
                    empMore = true;
                }
                else
                {
                    empMore = false;
                }
            }

        }

        static void EmployeeDisplay(Employee emp)
        {
            emp.Get();
            emp.Display();
        }
    }
}
