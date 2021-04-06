using System;

namespace PracticeExe2
{

    public class Test
    {
        public static int x = y;
        public static int y = 5;
    }
    public class employees
    {
        public string id;
        public string name;

        public employees() { }

        public employees(string id, string name)
        {
            this.id = id;
            this.name = name;
        }

        public static int counter;
        public static int AddEmployee()
        {
            return ++counter;
        }
    }
    class Program : employees
    {
        static void Main(string[] args)
        {
            Console.Write("Enter the employee's name: ");
            string name = Console.ReadLine();
            Console.Write("Enter the employee's ID: ");
            string id = Console.ReadLine();

            // Create and configure the employee object.
            employees e = new employees(name, id);
            Console.Write("Enter the current number of employees: ");
            string n = Console.ReadLine();
            employees.counter = Int32.Parse(n);
            employees.AddEmployee();

            // Display the new information.
            Console.WriteLine($"Name: {e.name}");
            Console.WriteLine($"ID:   {e.id}");
            Console.WriteLine($"New Number of Employees: {employees.counter}");


            Console.WriteLine(Test.x);
            Console.WriteLine(Test.y);

            Test.x = 99;
            Test.y = 23;
            Console.WriteLine(Test.x);
            Console.WriteLine(Test.y);

        }

    }
}
