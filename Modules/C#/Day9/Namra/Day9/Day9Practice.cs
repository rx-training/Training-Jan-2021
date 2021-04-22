using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading;
using System.Threading.Tasks;
namespace Day9
{
    public static class IntExtension
    {
        public static bool IsGreaterThan(this  int i, int value)
        {
            return i > value;
        }
    }
     public class Day9PracticeWork
    {
   
        public static async Task Main(string[] args)
        {
            Console.WriteLine($"Enter two Numbers");
            Console.WriteLine();
            Console.WriteLine($"Enter First Number");
            int num1 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine($"Enter Second Number");
            int num2 = Convert.ToInt32(Console.ReadLine());
            if (num1.IsGreaterThan(num2))
            {
                Console.WriteLine($"{num1} is greater than {num2}");
            }
            else
            {
                Console.WriteLine($"{num1} is not greater than {num2}");
            }
            await Practice1();
            Console.WriteLine("Please enter your Name");
            string name = Console.ReadLine();
            Console.WriteLine($"Your Name : {name}");
        }
        public static async Task Practice1() 
        {
            var result = 0;
            var task = Task.Run(() => DoSomething(2, 4));
            Console.WriteLine("Working");
            result = await task;
            Console.WriteLine($"your result is : {result}");
            Console.WriteLine("Done");
        }
        private static int DoSomething(int num1, int num2)
        {
            Console.WriteLine($"0 second");
            for (int i = 0; i < 10; i++)
            {
                Thread.Sleep(1000);
                Console.WriteLine($"{i+1} seconds");
            }
            return num1 * num2;
        }
    }
}

