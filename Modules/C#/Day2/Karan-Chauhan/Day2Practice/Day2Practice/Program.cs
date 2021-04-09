using System;

namespace Day2Practice
{
    public class Transaction
    {
        public decimal Amount { get; }
        public DateTime Date { get; }
        public string Notes { get; }

        public Transaction(decimal amount, DateTime date, string note)
        {
            this.Amount = amount;
            this.Date = date;
            this.Notes = note;
        }
    }

    public class Person
    {
        public string FirstName
        {
            get { return firstName; }
            set { firstName = value; }
        }
        private string firstName;
        // remaining implementation removed from listing
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

    class Test
    {
        static int x = y;
        static int y = 5;

        static void Main()
        {
            Console.WriteLine(Test.x);
            Console.WriteLine(Test.y);

            Test.x = 99;
            Console.WriteLine(Test.x);
        }
    }
    /*
    Output:
        0
        5
        99
    */
}