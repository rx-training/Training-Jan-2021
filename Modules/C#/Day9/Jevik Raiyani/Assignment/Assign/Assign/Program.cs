using System;

namespace Assign
{
    class Program
    {
        static void Main(string[] args)
        {
            string text = System.IO.File.ReadAllText(@"F:\helo.txt");
            Console.WriteLine(text);

        }
    }
}
