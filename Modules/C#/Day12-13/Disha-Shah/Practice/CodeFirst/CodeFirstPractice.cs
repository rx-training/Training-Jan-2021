using CodeFirst.Models;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace CodeFirst
{
    class CodeFirstPractice
    {
        static void Main(string[] args)
        {
            using (var context = new SchoolDBContext())
            {
                // Insert Data in DB
                var course = new Course() { CourseName = "C++" };
                context.Courses.Add(course);
                context.SaveChanges();
                Console.WriteLine("Course added successfully");

                // Update Data in DB
                var updateCourse = context.Courses
                                       .SingleOrDefault<Course>(x => x.CourseName == "C++");

                updateCourse.CourseName = ".Net";
                context.SaveChanges();
                Console.WriteLine("Course Updated Successfully");

                // Delete Data in DB
                var deleteCourse = context.Courses
                                       .SingleOrDefault<Course>(x => x.CourseName == ".Net");

                context.Courses.Remove(deleteCourse);
                context.SaveChanges();
                Console.WriteLine("Course Deleted Successfully");

                // Raw SQL
                var students = context.Students
                                  .FromSqlRaw("Select * from Students where StudName = 'Bill'")
                                  .ToList();

                Console.WriteLine("Raw SQL: ");
                foreach (var item in students)
                {
                    Console.WriteLine($"{item.Name} {item.DOB}");
                }

                // Parameterized Query
                string name = "Bill";
                var students1 = context.Students
                    .FromSqlRaw($"Select * from Students where StudName = '{name}'")
                    .OrderBy(s => s.StudentId)
                    .ToList();

                Console.WriteLine();
                Console.WriteLine("Parameterized Query:");
                foreach (var item in students1)
                {
                    Console.WriteLine($"{item.Name} {item.DOB}");
                }

                // Execute Stored Procedures
                var students2 = context.Students.FromSqlRaw("GetStudents 'Bill'").ToList();

                Console.WriteLine();
                Console.WriteLine("Stored Procedures:");
                foreach (var item in students2)
                {
                    Console.WriteLine($"{item.Name} {item.DOB}");
                }

                // Execute stored procedures using parameter
                var students4 = context.Students
                      .FromSqlRaw($"GetStudents {name}")
                      .ToList();

                Console.WriteLine();
                Console.WriteLine("Stored Procedures using params:");
                foreach (var item in students4)
                {
                    Console.WriteLine($"{item.Name} {item.DOB}");
                }

                // In and Out Parameter
                var param = new SqlParameter("@FirstName", "Bill");
                var students5 = context.Students.FromSqlRaw("GetStudents @FirstName", param).ToList();

                Console.WriteLine();
                Console.WriteLine("Stored Procedures using params In and oUt:");
                foreach (var item in students5)
                {
                    Console.WriteLine($"{item.Name} {item.DOB}");
                }

                // @p0..
                var students6 = context.Students.FromSqlRaw("GetStudents @p0", "Bill").ToList();

                Console.WriteLine();
                Console.WriteLine("Stored Procedures using params @p0 and so on..:");
                foreach (var item in students6)
                {
                    Console.WriteLine($"{item.Name} {item.DOB}");
                }

                
            }
        }
    }
}
