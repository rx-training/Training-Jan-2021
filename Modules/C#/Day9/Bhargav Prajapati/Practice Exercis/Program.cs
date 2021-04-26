using System;
using System.Threading.Tasks;
using System.Threading;
using Extension_method;
namespace Practice_Exercis
{
    class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine("Extension Method :-");
            Console.WriteLine("Enter The Any Statement");
            string statement = Console.ReadLine();

            int numchar = statement.worldCount();
            Console.WriteLine($"Count :- {numchar}");

            Console.WriteLine("Working");
            sum(2, 4);
            Console.WriteLine("this statement executed first");
            getName();



        }

        
        public static void getName()
        {
            Console.WriteLine("get Name method is exeduted fist before because sum method in processing");
        }
        private static async Task sum(int a, int b)
        {
            Task.Delay(10000);
            await Task.Run(() => Console.WriteLine($"Addition of {a}  And  {b} is {a + b}"));

        }
    }
}


