using System;
using Practice.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Practice
{
    class Program
    {
        static void Main(string[] args)
        {
            //New EF-core Querying
            //using(var ctx = new SchoolContext())
            // {
            //     var std = new Student() { Name = "Bill" };
            //     ctx.Students.Add(std);
            //     ctx.SaveChanges();
            // }
            //using(var ctx = new SchoolContext())
            // {
            //     var stdwithgrd = ctx.Students.FromSqlRaw("Select * From Students where Name = 'Bill'").FirstOrDefault();

            //     Console.WriteLine(stdwithgrd.FirstName);
            // }
            //using(var ctx = new SchoolContext())
            // {
            //     var stdgrade = ctx.Students.Where(s => s.FirstName == "bill")
            //         .FirstOrDefault();
            //     Console.WriteLine(stdgrade.FirstName);
            // }
            //var stdGrade = new Grade() { GradeName = "dotnet", Section = "A" };
            //var studnetadd = new StudentAddress() { City = "SFO", State = "CA", Country = "Usa" };
            //var std = new Student() { FirstName = "steve", LastName = "Jobs", Address = studnetadd, Grade = stdGrade };
            //using (var context = new SchoolContext())
            //{
            //    context.Add<Student>(std);
            //    context.SaveChanges();
            //}

            //updating
            //using (var ctx = new SchoolContext())
            //{
            //    var s1 = ctx.Students.FirstOrDefault(s =>s.FirstName == "steve");
            //    s1.FirstName = "jhon";
            //    ctx.Update(s1);
            //    ctx.SaveChanges();             
            //}


            //checking stored procedures
            var name = "Jhon";
            var ctx = new SchoolContext();
            var studentinfo = ctx.Students.FromSqlRaw($"dbo.GetStudents {name}").ToList();
            foreach (var item in studentinfo)
            {
                Console.WriteLine($"{item.FirstName}  {item.LastName}  {item.StudentId}");
            }
        }
    }
}
