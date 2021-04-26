using System;
using EFPractice_Day12.Models;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace EFPractice_Day12
{
    class Program
    {
        static void Main(string[] args)
        {
            using (var context = new CollegeContext())
            {

                List<Student> addStudent = new List<Student>()
                    {
                        new Student() {  Name = "Fiyona" },
                        new Student(){  Name = "Nita"}
                    };
                List<Course> addCourse = new List<Course>()
                    {
                        new Course() {  CourseName = "Bachelors" },
                        new Course() { CourseName = "Master"}
                    };
                List<StudentCourse> addStudentCourse = new List<StudentCourse>()
                    {
                        new StudentCourse(){ StudentId = 5, CourseId = 5 },
                        new StudentCourse(){StudentId = 6, CourseId = 6}
                    };


                //context.Students.AddRange(addStudent);
                //context.Courses.AddRange(addCourse);
                //context.StudentCourses.AddRange(addStudentCourse);
                //Console.WriteLine("Added data to database");

                context.SaveChanges();


                // Raw SQL Queries
                Console.Write("Enter Name : ");
                string name = Console.ReadLine();
                var q1 = context.Students.FromSqlRaw($"select * from Students where Name = '{name}'");
                foreach (var item in q1)
                {
                    Console.WriteLine(item.StudentId + " " + item.Name);
                }


                var q2 = context.Students.FromSqlRaw($"exec GetStudents {name}");
                foreach (var item in q1)
                {
                    Console.WriteLine(item.StudentId + " " + item.Name);
                }
            }
        }
    }
}
