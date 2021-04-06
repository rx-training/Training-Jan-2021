using System;

namespace Assignment5_1_
{
    class Program
    {
        static void Main(string[] args)
        {
            int age;
            Console.WriteLine("Enter your age");
            age = Convert.ToInt32(Console.ReadLine());
            string result = age > 18 ? "You can vote" : "You can not vote";
            Console.WriteLine(result);
        }
    }
}
