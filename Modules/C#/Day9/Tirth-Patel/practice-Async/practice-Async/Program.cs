using System;
using System.Threading.Tasks;
namespace practice_Async
{
    class Program
    {

        static async Task Main(string[] args)
        {
            Coffee cup = PourCoffee();
            Console.WriteLine("coffee is ready");

         Task<Egg> eggsTask = FryEggsAsync(2);
            Task<Bacon> baconTask = FryBacon(3);
            var toastTask = MakeToastWithButterAndJamAsync(2);
            Toast toast = await toastTask;
           
            ApplyButter(toast);
            ApplyJam(toast);
            Console.WriteLine("toast is ready");
            Egg eggs = await eggsTask;
            Console.WriteLine("eggs are ready");

           
            Bacon bacon = await baconTask;
            Console.WriteLine("bacon is ready");

           
            
          

            Juice oj = PourOJ();
            Console.WriteLine("oj is ready");
            Console.WriteLine("Breakfast is ready!");
        }
        private static Juice PourOJ()
        {
            Console.WriteLine("Pouring orange juice");
            return new Juice();
        }

        private static void ApplyJam(Toast toast) =>
            Console.WriteLine("Putting jam on the toast");

        private static void ApplyButter(Toast toast) =>
            Console.WriteLine("Putting butter on the toast");

        private async static Task<Toast> ToastBread(int slices)
        {
            for (int slice = 0; slice < slices; slice++)
            {
                Console.WriteLine("Putting a slice of bread in the toaster");
            }
            Console.WriteLine("Start toasting...");
            Task.Delay(3000).Wait();
            Console.WriteLine("Remove toast from toaster");

            return new Toast();
        }

        private async static Task<Bacon> FryBacon(int slices)
        {
            Console.WriteLine($"putting {slices} slices of bacon in the pan");
            Console.WriteLine("cooking first side of bacon...");
            Task.Delay(3000).Wait();
            for (int slice = 0; slice < slices; slice++)
            {
                Console.WriteLine("flipping a slice of bacon");
            }
            Console.WriteLine("cooking the second side of bacon...");
            Task.Delay(3000).Wait();
            Console.WriteLine("Put bacon on plate");

            return new Bacon();
        }

        private async static Task<Egg> FryEggsAsync(int howMany)
        {
            Console.WriteLine("Warming the egg pan...");
            Task.Delay(3000).Wait();
            Console.WriteLine($"cracking {howMany} eggs");
            Console.WriteLine("cooking the eggs ...");
            Task.Delay(3000).Wait();
            Console.WriteLine("Put eggs on plate");

            return new Egg();
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
        //static async Task Main(string[] args)
        //{
        //   await DisplayCurrentInfoAsync();
        //}
        //public static async Task DisplayCurrentInfoAsync()
        //{
        //    Console.WriteLine("wating for task to complete");
        //    await WaitAndApologizeAsync();

        //    Console.WriteLine($"Today is {DateTime.Now:D}");
        //    Console.WriteLine($"The current time is {DateTime.Now.TimeOfDay:t}");
        //    Console.WriteLine("The current temperature is 76 degrees.");
        //}

        //static async Task WaitAndApologizeAsync()
        //{
        //    await Task.Delay(2000);

        //    Console.WriteLine("Sorry for the delay...\n");
        //}
    }
}
