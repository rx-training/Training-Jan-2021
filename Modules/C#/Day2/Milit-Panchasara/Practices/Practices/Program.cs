using System;
using SampleLibrary;

namespace Practices
{
    internal class Student
    {
        public string Name { get; set; } = "UNKNOWN"; // Property with default value.
        public DateTime JoiningDate { get; } // Read-only property
        public int Standard { get; set; }
        public int Fees
        {
            get { return fees; }
            set { fees = Convert.ToInt32(value * 1.18); }
        }

        private int fees;

        public int GetFeesAmount()
        {
            return fees;
        }

        public Student(string name, DateTime joiningDate, int standard) // Constructor with all properties
        {
            this.Name = name;
            this.JoiningDate = joiningDate;
            this.Standard = standard;
        }

        public Student(string name, DateTime joiningDate) // Constructor with some properties
        {
            this.Name = name;
            this.JoiningDate = joiningDate;
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            // SampleData class is coming from SampleLibrary namespace, which is in the different project.
            SampleData data = new SampleData();
            data.GetData(); // Method from different namespace.

            SampleData data2 = new SampleData();
            data2.GetData();

            // 2 Student object using different constructor.
            Student newStudent1 = new Student("Milit", Convert.ToDateTime("2020-04-01"), 5);
            Student newStudent2 = new Student("Udit", Convert.ToDateTime("2020-04-01"));

            newStudent1.Fees = 5000;
            Console.WriteLine($"Fees for student1 with GST is {newStudent1.GetFeesAmount()}");
        }
    }
}
