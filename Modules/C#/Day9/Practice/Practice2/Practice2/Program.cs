using System;
using System.Threading;
using System.Threading.Tasks;

namespace Practice2
{
    class Program
    {
        static void Main(string[] args)
        {
            string s = "Charmi";
            s = StringUpper.ChangeStringUpper(s);
            Console.WriteLine(s);
            Method();
            Console.WriteLine("Main thread");
            Method2();
            Console.ReadLine();
        }
        public static async void Method()
        {
            await Task.Run(new Action(LongTask));
            Console.WriteLine("New Thread");
        }
        public static void LongTask()
        {
            Thread.Sleep(20000);
        }
        public static void Method2()
        {
            Console.WriteLine("Method2 is running");
        }
    }
}
