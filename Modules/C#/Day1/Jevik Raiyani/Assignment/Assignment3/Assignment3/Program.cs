using System;

namespace Assignment3
{
    enum weekday
    {
        Monday,
        Tuesday,
        Wednesday,
        Thrusday,
        Friday,
        Saturday,
        Sunday
    }
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter no beteween 0-6");

            int i = int.Parse(Console.ReadLine());

            var wd = (weekday) i;

            Console.WriteLine(wd);

        }
    }
}
