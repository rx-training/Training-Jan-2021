using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PracticeExe2
{
    class Program
    {
        static async Task Main(string[] args)
        {
            Coffee cup = PourCoffee();
            Console.WriteLine("coffee is ready");

            var eggsTask = FryEggsAsync(2);
            var baconTask = FryBaconAsync(3);
            var toastTask = MakeToastWithButterAndJamAsync(2);

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

            Juice oj = PourOJ();
            Console.WriteLine("oj is ready");
            Console.WriteLine("Breakfast is ready!");
        }

        static async Task<Toast> MakeToastWithButterAndJamAsync(int number)
        {
            var toast = await ToastBreadAsync(number);
            ApplyButter(toast);
            ApplyJam(toast);

            return toast;
        }

        private static Coffee PourCoffee()
        {
            Console.WriteLine("Pouring coffee");
            return new Coffee();
        }

        private static async Task<Egg> FryEggsAsync(int howMany)
        {
            Console.WriteLine("Warming the egg pan....");
            Task.Delay(1000).Wait();
            Console.WriteLine($"cracking {howMany} eggs");
            Console.WriteLine("cooking the eggs...");
            Task.Delay(1000).Wait();
            Console.WriteLine("Put eggs on plate");
            return new Egg();
        }

        private static async Task<Bacon> FryBaconAsync(int slices)
        {
            Console.WriteLine($"Putting {slices} slices of bacon in the pan");
            Console.WriteLine("cooking first side of bacon....");
            Task.Delay(1000).Wait();
            for (int slice = 0; slice < slices; slice++)
            {
                Console.WriteLine("Flipping a slice of bacon");
            }
            Console.WriteLine("cooking the second side of bacon");
            Task.Delay(1000).Wait();
            Console.WriteLine("Put bacon on the plate");

            return new Bacon();
        }

        private static async Task<Toast> ToastBreadAsync(int slices)
        {
            for (int slice = 0; slice < slices; slice++)
            {
                Console.WriteLine("Putting a slice of bread int the toaster");
            }
            Console.WriteLine("Start Toasting....");
            Task.Delay(1000).Wait();
            //Console.WriteLine("Fire! Toast is ruined!");
            //throw new InvalidOperationException("The toaster is on fire");
            await Task.Delay(1000);
            Console.WriteLine("Remove toast from toaster");
            

            return new Toast();
        }

        private static void ApplyJam(Toast toast) => Console.WriteLine("Putting Jam on the Toast");

        private static void ApplyButter(Toast toast) => Console.WriteLine("Putting butter in the Toast");

        private static Juice PourOJ()
        {
            Console.WriteLine("Pouring Orange Juice");
            return new Juice();
        }
    }

    internal class Bacon
    {
    }

    internal class Toast
    {
    }

    internal class Juice
    {
    }

    internal class Egg
    {
    }

    internal class Coffee
    {
    }
}
