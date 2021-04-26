using System;

namespace CodeFirst.Models
{
    class Program
    {
        static void Main(string[] args)
        {
            using(var ctx = new SchoolContext())
            {
                var Stud = new Student() { StudentName = "Bill" };
                ctx.Students.Add(Stud);
                ctx.SaveChanges();
            }
        }
    }
}
