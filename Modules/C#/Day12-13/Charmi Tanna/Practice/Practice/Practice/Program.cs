using System;
using Microsoft.EntityFrameworkCore;
using Practice.Models;

namespace Practice
{
    class Program
    {
        static void Main(string[] args)
        {
            var student = new Student() { Name = "Riya" };
            UniversityDBContext u = new UniversityDBContext();
            u.Students.Add(student);
            u.SaveChanges();
        }
    }
}
