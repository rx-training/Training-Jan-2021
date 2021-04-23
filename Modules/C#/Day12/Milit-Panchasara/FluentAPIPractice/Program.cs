using FluentAPIPractice.Models;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace FluentAPIPractice
{
    class Program
    {
        static void Main(string[] args)
        {
            School context = new School();
            // retrieve entity 
            var student = context.Students.First(); // one entry unchanged
            DisplayStates(context.ChangeTracker.Entries());

            student.Email = "milit@gmail.com"; // one entry modified
            context.Add(new Student() { Name = "Bill", Email = "Gates@g.g" });  // one entry added
            DisplayStates(context.ChangeTracker.Entries());

            context.Students.Remove(student);
            DisplayStates(context.ChangeTracker.Entries()); // one entry deleted

            context = new School();
            Console.WriteLine(context.Entry(student).State); // one entry detached
            Console.WriteLine();

            context.Attach(student).State = Microsoft.EntityFrameworkCore.EntityState.Unchanged; // re attaching the entity 
            DisplayStates(context.ChangeTracker.Entries());

            var sList = context.Students.FromSqlRaw("Select * from Students").ToList();
            foreach (var item in sList)
            {
                Console.WriteLine($"{item.Name}, {item.Email}");
            }
            Console.WriteLine();

            var output = context.getAllNameAndEmails.FromSqlRaw("exec usp_GetAllNameEmail;");
            foreach (var item in output)
            {
                Console.WriteLine($"{item.Name}, {item.Email}");
            }
            Console.WriteLine();
            
        }

        private static void DisplayStates(IEnumerable<EntityEntry> entries)
        {
            foreach (var entry in entries)
            {
                Console.WriteLine($"Entity: {entry.Entity.GetType().Name}, State: { entry.State.ToString()}");
            }
            Console.WriteLine();
        }
    }
}
