using System;

namespace Assignment
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                Console.WriteLine("Entering Name: \"milit\" & Age: 0");
                Student s = new Student("milit", 0);
            }
            catch (Exception e)
            {
                Console.BackgroundColor = ConsoleColor.Red;
                Console.WriteLine(e.Message);
                Console.ResetColor();
            }
            Student s2 = new Student("milit",2);
            Console.WriteLine($"Name: {s2.Name} & Age: {s2.Age}");

            try
            {
                Console.WriteLine("Entering Name: \"milit123\" & Age: 22");
                Student s = new Student("milit123", 22);
            }
            catch (Exception e)
            {
                Console.BackgroundColor = ConsoleColor.Red;
                Console.WriteLine(e.Message);
                Console.ResetColor();
            }

            DateTime[] dates = { new DateTime(2020, 10, 17), new DateTime(2021, 10, 17) };



            foreach (var date in dates)
            {
                try
                {
                    Console.WriteLine($"Checking Date {date}");
                    if (date > DateTime.Now)
                    {
                        Console.WriteLine($"Date {date} IS VALID");
                    }
                    else
                    {
                        throw new DateException($"Date {date} is less than the current date!");
                    }
                }
                catch (Exception e)
                {
                    Console.BackgroundColor = ConsoleColor.Red;
                    Console.WriteLine(e.Message);
                    Console.ResetColor();
                }
            }
        }
    }
}
