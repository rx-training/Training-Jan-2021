using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Day9_Practice
{
    public static class IntExtensions
    {
        public static bool IsGreaterThan(this int i, int value)
        {
            return i > value;
        }
    }

    class Program
    {
        static async Task Main(string[] args)
        {
            int i = 10;

            bool result = i.IsGreaterThan(100);

            Console.WriteLine(result);
              
            Coffee cup = Coffee.PourCoffee();
            Console.WriteLine("coffee is ready");

            var eggsTask = Egg.FryEggsAsync(2);
            var baconTask = Bacon.FryBaconAsync(3);
            var toastTask = Toast.MakeToastWithButterAndJamAsync(2);

            var breakfastTasks = new List<Task> { eggsTask, baconTask, toastTask };
            while (breakfastTasks.Count > 0)
            {
                Task finishedTask = await Task.WhenAny(breakfastTasks);
                if (finishedTask == eggsTask)
                {
                    Console.WriteLine("eggs are ready");
                }
                else if (finishedTask == baconTask)
                {
                    Console.WriteLine("bacon is ready");
                }
                else if (finishedTask == toastTask)
                {
                    Console.WriteLine("toast is ready");
                }
                breakfastTasks.Remove(finishedTask);
            }

            Juice oj = Juice.PourOJ();
            Console.WriteLine("oj is ready");
            Console.WriteLine("Breakfast is ready!");

            await DisplayCurrentInfoAsync();
        }

        public static async Task DisplayCurrentInfoAsync()
        {
            await WaitAndApologizeAsync();

            Console.WriteLine($"Today is {DateTime.Now:D}");
            Console.WriteLine($"The current time is {DateTime.Now.TimeOfDay:t}");
            Console.WriteLine("The current temperature is 76 degrees.");
        }

        static async Task WaitAndApologizeAsync()
        {
            await Task.Delay(2000);
            Console.WriteLine("Sorry for the delay...\n");
        }
    }
}