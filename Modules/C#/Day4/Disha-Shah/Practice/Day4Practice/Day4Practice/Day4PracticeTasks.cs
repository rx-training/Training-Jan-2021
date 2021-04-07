using System;

namespace Day4Practice
{

    class Day4PracticeTasks
    {
        static void Main(string[] args)
        {
            Console.WriteLine("-------------------------- String Practice --------------------------------");
            StringPractice stringPractice = new StringPractice();
            stringPractice.Display();
            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine("-------------------------- Date Practice --------------------------------");
            DatePractice datePractice = new DatePractice();
            datePractice.Display();
            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine("-------------------------- Exception Practice --------------------------------");
            ExceptionPractice exceptionPractice = new ExceptionPractice();
            exceptionPractice.Display();
            Console.WriteLine();
            Console.WriteLine();
        }
    }
}
