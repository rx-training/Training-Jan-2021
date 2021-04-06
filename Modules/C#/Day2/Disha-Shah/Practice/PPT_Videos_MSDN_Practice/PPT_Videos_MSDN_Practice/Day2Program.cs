using System;

namespace PPT_Videos_MSDN_Practice
{
    class Square
    {
        private double side;

        public double Length
        {
            get
            {
                return side;
            }
            set
            {
                if (value > 0)
                {
                    side = value;
                }
            }
        }

        public double GetArea()
        {
            return side * side;
        }

    }

    class Rectangle
    {
        private double length;
        private double width;

        public Rectangle()
        {
            length = 0;
            width = 0;
        }

        public Rectangle(double l, double w)
        {
            length = l;
            width = w;
        }

        public static string ShapeName
        {
            get { return "Rectangle"; }
        }

        public double GetArea()
        {
            return length * width;
        }
    }

    public class Circle
    {
        public Circle(string radius) => this.Radius = radius;

        public string Radius { get; }

        // remaining implementation removed from listing
    }

    // Static Class Example
    public static class TemperatureConverter
    {
        public static double CelsiusToFahrenheit(string temperatureCelsius)
        {
            // Convert argument to double for calculations.
            double celsius = Double.Parse(temperatureCelsius);

            // Convert Celsius to Fahrenheit.
            double fahrenheit = (celsius * 9 / 5) + 32;

            return fahrenheit;
        }

        public static double FahrenheitToCelsius(string temperatureFahrenheit)
        {
            // Convert argument to double for calculations.
            double fahrenheit = Double.Parse(temperatureFahrenheit);

            // Convert Fahrenheit to Celsius.
            double celsius = (fahrenheit - 32) * 5 / 9;

            return celsius;
        }
    }

    public class Person
    {
        
        public string FirstName { get; set; } = string.Empty;

        public string FirstName1
        {
            get => firstName;
            // Validations
            set
            {
                if (string.IsNullOrWhiteSpace(value))
                    throw new ArgumentException("First name must not be blank");
                firstName = value;
            }
        }
        private string firstName;

        public string FirstName2 { get; private set; }
        
        public string LastName { get; set; }

        public string FullName { get { return $"{FirstName} {LastName}"; } }

        private string fullName;
        public string FullName1
        {
            get
            {
                if (fullName == null)
                    fullName = $"{FirstName} {LastName}";
                return fullName;
            }
        }


        private string firstName3;
        public string FirstName3
        {
            get => firstName3;
            set
            {
                firstName3 = value;
                fullName3 = null;
            }
        }

        private string lastName3;
        public string LastName3
        {
            get => lastName3;
            set
            {
                lastName3 = value;
                fullName3 = null;
            }
        }

        private string fullName3;
        public string FullName3
        {
            get
            {
                if (fullName3 == null)
                    fullName3 = $"{FirstName3} {LastName3}";
                return fullName3;
            }
        }

    }

    public class Employee
    {
        public int Salary;

        public Employee() { }

        public Employee(int annualSalary)
        {
            Salary = annualSalary;
        }

        public Employee(int weeklySalary, int numberOfWeeks)
        {
            Salary = weeklySalary * numberOfWeeks;
        }
    }

    // Static Field and Static method
    public class Employee4
    {
        public string id;
        public string name;

        public Employee4()
        {
        }

        public Employee4(string name, string id)
        {
            this.name = name;
            this.id = id;
        }

        public static int employeeCounter;

        public static int AddEmployee()
        {
            return ++employeeCounter;
        }
    }

    class Day2Program
    {
        static int x = y;
        static int y = 5;

        static void Main(string[] args)
        {

            Rectangle r = new Rectangle();
            Console.WriteLine($"Area of {Rectangle.ShapeName} = {r.GetArea()}");

            Rectangle rectangle = new Rectangle(20, 10);
            Console.WriteLine($"Area of {Rectangle.ShapeName} = {rectangle.GetArea()}");

            Square square = new Square() { Length = 10 };
            Console.WriteLine($"Area of Square = {square.GetArea()}");

            square.Length = 30;
            Console.WriteLine($"Area of square = {square.GetArea()}");

            Person person = new Person() { FirstName = "Disha"};
            Console.WriteLine($"{person.FirstName}");

            //Person person1 = new Person() { FirstName1 = "" };
            //Console.WriteLine($"{person1.FirstName1}");

            //Person person2 = new Person() { FirstName2 = "Disha" };
            //Console.WriteLine($"{person2.FirstName2}");

            Circle circle = new Circle("23");
            Console.WriteLine($"Radius={circle.Radius}");

            Person person3 = new Person() { FirstName = "Disha", LastName = "Shah"};
            Console.WriteLine($"{person3.FullName}");

            // Cached Evaluated Property
            Person person4 = new Person() { FirstName = "Disha", LastName = "Shah" };
            Console.WriteLine($"{person4.FullName}");

            Person person5 = new Person() { FirstName3 = "Disha", LastName3 = "Shah" };
            Console.WriteLine($"{person5.FullName3}");

            // Static Class
            Console.WriteLine("Please select the convertor direction");
            Console.WriteLine("1. From Celsius to Fahrenheit.");
            Console.WriteLine("2. From Fahrenheit to Celsius.");
            Console.Write(":");

            string selection = Console.ReadLine();
            double F, C = 0;

            switch (selection)
            {
                case "1":
                    Console.Write("Please enter the Celsius temperature: ");
                    F = TemperatureConverter.CelsiusToFahrenheit(Console.ReadLine());
                    Console.WriteLine("Temperature in Fahrenheit: {0:F2}", F);
                    break;

                case "2":
                    Console.Write("Please enter the Fahrenheit temperature: ");
                    C = TemperatureConverter.FahrenheitToCelsius(Console.ReadLine());
                    Console.WriteLine("Temperature in Celsius: {0:F2}", C);
                    break;

                default:
                    Console.WriteLine("Please select a convertor.");
                    break;
            }

            Employee e1 = new Employee(30000);
            Employee e2 = new Employee(500, 52);

            Console.Write("Enter the employee's name: ");
            string name = Console.ReadLine();
            Console.Write("Enter the employee's ID: ");
            string id = Console.ReadLine();

            // Create and configure the employee object.
            Employee4 e = new Employee4(name, id);
            Console.Write("Enter the current number of employees: ");
            string n = Console.ReadLine();
            Employee4.employeeCounter = Int32.Parse(n);
            Employee4.AddEmployee();

            // Display the new information.
            Console.WriteLine($"Name: {e.name}");
            Console.WriteLine($"ID:   {e.id}");
            Console.WriteLine($"New Number of Employees: {Employee4.employeeCounter}");

            Console.WriteLine(Day2Program.x);
            Console.WriteLine(Day2Program.y);

            Day2Program.x = 99;
            Console.WriteLine(Day2Program.x);

        }
    }
}
