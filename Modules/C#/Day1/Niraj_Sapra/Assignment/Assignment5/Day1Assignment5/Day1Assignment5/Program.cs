using System;

namespace Day1Assignment5
{
    class Program
    {
        static void Main(string[] args)
        {
            string finalanswer;
            Console.WriteLine("Enter the age of voters.");
            int age=Convert.ToInt32(Console.ReadLine());
            finalanswer = age > 18 ? "You are Elagible" : "You are a Adult";
            Console.WriteLine(finalanswer);
        }
    }
}
