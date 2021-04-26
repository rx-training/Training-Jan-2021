using ConsoleApp1.Models;
using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            var student = new Student() { Name = "Jevik" };
            var UniversityDb = new UniversityDbContext();
            UniversityDb.Students.Add(student);
            UniversityDb.SaveChanges();


            Console.WriteLine("Hello World!");
        }
    }
}
