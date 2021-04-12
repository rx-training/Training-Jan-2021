using System;

namespace Assignment2
{
    class Program
    {
        delegate int del(int x, int y);
        static void Main(string[] args)
        {
            del add = (x, y) => x + y;
            int result = add(5, 10);
            Console.WriteLine(result);
        }
       
    }
}
