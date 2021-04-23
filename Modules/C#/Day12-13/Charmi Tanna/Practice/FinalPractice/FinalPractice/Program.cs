using FinalPractice.Models;
using System;

namespace FinalPractice
{
    class Program
    {
        static void Main(string[] args)
        {
            var grade = new Grade() { GradeName="A",Section="A"};
            var student = new Student() { StudentName = "Riya",Grade=grade};
            SchoolDBContext s = new SchoolDBContext();
            s.Grades.Add(grade);
            s.Students.Add(student);
            s.SaveChanges();       
        }
    }
}
