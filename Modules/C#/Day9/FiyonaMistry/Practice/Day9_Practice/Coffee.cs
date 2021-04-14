using System;

namespace Day9_Practice
{
    public class Coffee
    {
        public static Coffee PourCoffee()
        {
            Console.WriteLine("Pouring coffee");
            return new Coffee();
        }
    }
}