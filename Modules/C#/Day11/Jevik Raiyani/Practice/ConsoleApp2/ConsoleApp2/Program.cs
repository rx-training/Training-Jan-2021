using System;
using System.Linq;

namespace ConsoleApp2
{
    class Program
    {
        static void Main(string[] args)
        {
            var data = new School();
            var std = new Student { Name = "Jevik" };

            data.Students.Add(std);
            data.SaveChanges();

            var p = data.Students.Where(s => s.Name == "Jevik").ToList();
            foreach (var item in p)
            {
                Console.WriteLine (item.StudentID+"  "+ item.Name);
            }


            Console.WriteLine("Hello World!");
        }
    }
}
