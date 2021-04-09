using System;

namespace Assignment5
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter Age");
            int age = int.Parse(Console.ReadLine());

            var result = age > 18 ? "You are eligible for Vote" : "Not eligible for vote";

            Console.WriteLine(result);
            Console.WriteLine(age > 18 ? "you are eligible for vote" : "You must be 18 for voting");
        }
    }
}
