using System;
using System.Linq;
using PracticeDay12.Models;

namespace PracticeDay12
{
    class Practice12
    {
        static void Main(string[] args)
        {
            using (var con = new Context())
            {
               //To add Data
               var std = new Student()
               {
                   Id = 1,
                   Name = "Bill"
               };

                con.Students.Add(std);
                con.SaveChanges();

                //To get data whose name is bill

                var studentsWithSameName = con.Students
                                      .Where(s => s.Name == "Bill")
                                      .ToList();

                foreach (var item in studentsWithSameName)
                {
                    Console.WriteLine($"Id : {item.Id}, Name : {item.Name}");
                }

                // Updating data

                var std10 = con.Students.First<Student>();
                std10.Name = "Steve";
                con.SaveChanges();
                Console.WriteLine("Updated data");
                var std1 = con.Students.First<Student>();
                Console.WriteLine($"Id : {std1.Id}, Name : {std1.Name}");
                Console.WriteLine();

                // Adding data and deleting it...
                var stdData = new Student()
                {
                    Id = 2,
                    Name = "Bill"
                };
                con.Students.Add(stdData);
                con.SaveChanges();

                var stdFind = con.Students.ToList().Find(s => s.Name == "Bill");
                con.Students.Remove(stdFind);
                con.SaveChanges();
                Console.WriteLine("deleted successfully...");

                var crs = new Course()
                {
                    CourseId = 1,
                    CourseName = "abc"
                };
                con.Courses.Add(crs);
                con.SaveChanges();

                var std9 = new Student()
                {
                    Name = "aa",
                    CourseId = 1
                };
                con.Students.Add(std9);
                con.SaveChanges();


            }
        }
    }
}
