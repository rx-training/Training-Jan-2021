using System;
using Calculator;
namespace Practice_Exercise
{
    
    /* PROPETIES EXAPLE */
     class Product
    {
        int sale;
        public int ID { get; set; }
        public String Name { get; set; }
        public int Price { get; set; }
        public int Qty { get; set; }
        
        public int Sale
        {
            get {
                return Compute();

            }
        }
       
         int Compute()
        {
            sale = Qty * Price;
            return sale;
        }
        public void display()
        {
            Console.WriteLine( $"Id :- {ID}");
            Console.WriteLine($"NAME :- {Name}");
            Console.WriteLine($"Price :- {Price}");
            Console.WriteLine($"QTY :- {Qty}");
            Console.WriteLine($"Sale :- {Sale}");
        }

    }

    /*Construstor Example With Constructor Overloading */
    class Employee
    {
         string name;
          int id;
         string address;
         int salary;
        public Employee(int monthlysalary,string name,int  id)
        {
            this.name = name;
            this.id = id;
            salary = monthlysalary;
        }
        public Employee(int weeklySalary, int numberofweek,int id,string name,string address )
        {
            salary = weeklySalary * numberofweek;
            this.id = id;
            this.name = name;
            this.address = address;
        }

        public void display()
        {
            Console.WriteLine($"ID :- {id}");
            Console.WriteLine($"NAME :- {name}");
            Console.WriteLine($"ADDRSS :- {address}");
            Console.WriteLine($"SALARY :- {salary} ");
        }

    }

    /*Example 2*/

    class Name
    {
        string FirstName;
        string LastName;
        String FullName;
        public Name(string FullName )
        {
            this.FullName = FullName;
        }
        public Name(string FirstName, string LastName)
        {
            this.FirstName = FirstName;
            this.LastName = LastName;
            FullName = FirstName+" " + " "+ LastName;
        }
        public void display()
        {
         
            Console.WriteLine($"FirstName :- {FirstName}");
            Console.WriteLine($"LastName :- {LastName}");
            Console.WriteLine($"FullName :- {FullName}");

        }
    }

    /*Static methods example*/
    class EmployeeData
    {
        public int id;
        public string Name;
        public static int employeecounter;
        public EmployeeData(int id, string Name)
        {
            this.id = id;
            this.Name = Name;
        }
        public static int counter()
        {
            return ++employeecounter;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("CALCULATOR");
            Console.WriteLine("ENTER THE FIRST NUMBER");
            double num1 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("ENTER THE SECOUND NUMBER");
            double num2 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("PRESS 1 TO PERFORM THE ADDITION");
            Console.WriteLine("PRESS 2 TO PERFORM THE SUBTRACTION");
            Console.WriteLine("PRESS 3 TO PERFORM THE MULTIPLICATION");
            Console.WriteLine("PRESS 4 TO PERFORM THE DIVISION");
            int ch = Convert.ToInt32(Console.ReadLine());

            Class1 cl = new Calculator.Class1();
           double res= cl.calc(num1,num2,ch);
            Console.WriteLine($"RESULT :- {res}");
            Product p1 = new Product();
            p1.ID = 1;
            p1.Name = "ABX";
            p1.Price = 5000;
            p1.Qty = 3;
            p1.display();
            Employee e1 = new Employee(50000,"ABC",1);
            e1.display();
            Employee e2 = new Employee(500,50,2,"XYZ","AHMEDABAD");
            e2.display();

            Name n1 = new Name("BHARGAV PRAJAPATI");
            Name n2 = new Name("JENIL", "VIRANI");
            n1.display();
            n2.display();



            Console.Write("Enter the employee's name: ");
            string name = Console.ReadLine();
            Console.Write("Enter the employee's ID: ");
            int id = Convert.ToInt32( Console.ReadLine());

            // Create and configure the employee object.
            EmployeeData e = new EmployeeData(id,name);
            Console.Write("Enter the current number of employees: ");
            string n = Console.ReadLine();
            EmployeeData.employeecounter = Int32.Parse(n);
            EmployeeData.counter();

            // Display the new information.
            Console.WriteLine($"Name: {e.Name}");
            Console.WriteLine($"ID:   {e.id}");
            Console.WriteLine($"New Number of Employees: {EmployeeData.counter()}");
            Console.ReadLine();

        }
    }
}
