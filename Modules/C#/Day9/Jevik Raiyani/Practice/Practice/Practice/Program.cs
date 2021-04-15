using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Practice
{
    //public static class IntExtensions
    //{
    //    public static bool IsGreaterThan(this int i, int value)
    //    {
    //        return i > value;
    //    }
    //}
    class Program
    {
         static  async Task     Main(string[] agrs)
        {
            await Practice1();


            //int i = 10;
            //bool result = i.IsGreaterThan(100);
            //Console.WriteLine(result);
        }
        public static async Task Practice1()
        {
            var result = 0;
            var task = Task.Run(() => DoSomeThingAsync(2, 4));
            Console.WriteLine("working");
            //task.wait();
            result = await task;
            Console.WriteLine(result);
            Console.WriteLine("Done");
        }
        private static int DoSomeThingAsync(int a, int b)
        {
            Thread.Sleep(1000);
            var n = a + b;
            Console.WriteLine(n);
            return n;   
        }

        //static void Main()
        //{
        //    Task task = new Task(CallMethod);
        //    task.Start();
        //    task.Wait();
        //    Console.ReadLine();
        //}

        //static async void CallMethod()
        //{
        //    string filePath = "E:\\sampleFile.txt";
        //    Task<int> task = ReadFile(filePath);

        //    Console.WriteLine(" Other Work 1");
        //    Console.WriteLine(" Other Work 2");
        //    Console.WriteLine(" Other Work 3");

        //    int length = await task;
        //    Console.WriteLine(" Total length: " + length);

        //    Console.WriteLine(" After work 1");
        //    Console.WriteLine(" After work 2");
        //}

        //static async Task<int> ReadFile(string file)
        //{
        //    int length = 0;

        //    Console.WriteLine(" File reading is stating");
        //    using (StreamReader reader = new StreamReader(file))
        //    {
        //        // Reads all characters from the current position to the end of the stream asynchronously    
        //        // and returns them as one string.    
        //        string s = await reader.ReadToEndAsync();

        //        length = s.Length;
        //    }
        //    Console.WriteLine(" File reading is completed");
        //    return length;
        //}


        //{
        //    callMethod();
        //    Console.ReadKey();
        //}

        //public static async void callMethod()
        //{
        //    Task<int> task = Method1();
        //    Method2();
        //    int count = await task;
        //    Method3(count);
        //}

        //public static async Task<int> Method1()
        //{
        //    int count = 0;
        //    await Task.Run(() =>
        //    {
        //        for (int i = 0; i < 100; i++)
        //        {
        //            Console.WriteLine(" Method 1");
        //            count += 1;
        //        }
        //    });
        //    return count;
        //}

        //public static void Method2()
        //{
        //    for (int i = 0; i < 25; i++)
        //    {
        //        Console.WriteLine(" Method 2");
        //    }
        //}

        //public static void Method3(int count)
        //{
        //    Console.WriteLine("Total count is " + count);
        //}

        //{
        //    Method1();
        //    Method2();
        //    Console.ReadKey();
        //}

        //public static async Task Method1()
        //{
        //    await Task.Run(() =>
        //    {
        //        for (int i = 0; i < 100; i++)
        //        {
        //            Console.WriteLine(" Method 1");
        //            // Do something
        //            Task.Delay(100).Wait();
        //        }
        //    });
        //}


        //public static void Method2()
        //{
        //    for (int i = 0; i < 25; i++)
        //    {
        //        Console.WriteLine(" Method 2");
        //        // Do something
        //        Task.Delay(400).Wait();
        //    }
        //}
    }
}
