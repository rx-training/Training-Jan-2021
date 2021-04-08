using System;
using constructors1;
namespace practiceApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Person hero = new Person();
            hero.FirstName = "Helo";
            PersonEvaluated person1 = new PersonEvaluated();
            person1.FirstName = "Tirth";
            person1.LastName = "Patel";
           Console.WriteLine(person1.FullName);
            Taxi t1 = new Taxi();
            Console.WriteLine(t1.isInitialized);
            Employee e1 = new Employee(70000);
            e1.display();
            Employee e2 = new Employee(576, 67);
            e2.display();
            Manager m = new Manager(10000);
            double radius = 2.5;
            double height = 3.0;
            Circle ring = new Circle(radius);
            Cylinder tube = new Cylinder(radius, height);
            Console.WriteLine("Area of the circle = {0:F2}",ring.Area());
            Console.WriteLine("Area of the cylinder = {0:F2}",tube.Area());
            Console.WriteLine("NAME:");
            string name = Console.ReadLine();
            Console.WriteLine("Id:");
            string id = Console.ReadLine();
            Employee4 e = new Employee4(name, id);
            Console.WriteLine("ENetr current counter");
            string n = Console.ReadLine();
            Employee4.counter = Int32.Parse(n);
            Employee4.AddEmployee();
            Console.WriteLine($"new Number of Employess: {Employee4.counter}");
        }
    }
}
