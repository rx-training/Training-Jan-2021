using OneToMany.Models;
using System;

namespace OneToMany
{
    class Program
    {
        static void Main(string[] args)
        {
            var grade = new Grade() { GradeName = "A", Section = "English" };
            var student = new Student() { StudentName = "Riya" ,Grade = grade};
            SchoolDbContext s = new SchoolDbContext();
            s.Grades.Add(grade);
            s.Students.Add(student);
            s.SaveChanges();
        }
    }
}
