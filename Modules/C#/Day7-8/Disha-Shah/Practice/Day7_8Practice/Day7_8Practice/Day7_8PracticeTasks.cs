using System;

namespace Day7_8Practice
{
    class Day7_8PracticeTasks
    {
        static void Main(string[] args)
        {
            Console.WriteLine("------------------------------LINQ Practice from tutorials teacher-------------------------------");
            Console.WriteLine();
            LINQPractice linqPractice = new LINQPractice();
            linqPractice.Display();
            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine("-----------------------------MSDN Practice-------------------------------------");
            Console.WriteLine();
            MsdnPractice msdnPractice = new MsdnPractice();
            msdnPractice.Display();
        }
    }
}
