using System;
using codefirstapproch.Models;
namespace codefirstapproch
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            var student = new Student() { Name="raj"};
            var schooldata = new Schooldata();
            schooldata.Students.Add(student);
            schooldata.SaveChanges();
            Console.WriteLine("Hello World!");
        }

    }
}
