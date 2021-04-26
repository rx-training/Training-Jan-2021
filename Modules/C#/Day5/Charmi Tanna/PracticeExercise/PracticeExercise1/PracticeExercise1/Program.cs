using System;
using System.Collections;
using System.Collections.Generic;

namespace PracticeExercise1
{
    public class Students
    {
        public string Name { get; set; }
    }
    class Program
    {
        static void Main(string[] args)
        {
            //Create List of Students
            var StudentsList = new List<Students>
            {
                new Students(){Name = "Neha"},
                new Students(){Name = "Poonam"},
                new Students(){Name = "Mukesh"},
                new Students(){Name = "Pooja"}
            };
            //Display
            foreach(var student in StudentsList)
            {
                Console.WriteLine(student.Name+" ");
            }
            //Search
            Console.WriteLine("Enter name of student you want to search");
            string Name = Console.ReadLine();
            for(int i = 0;i<StudentsList.Count;i++)
            {
                if(Name == StudentsList[i].Name)
                {
                    Console.WriteLine($"Name {StudentsList[i].Name} Found at index number{i}");
                }
            }
        }
    }
}
