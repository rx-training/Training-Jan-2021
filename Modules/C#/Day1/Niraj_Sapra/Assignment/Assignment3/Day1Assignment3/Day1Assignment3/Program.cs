using System;

namespace Day1Assignment3
{
    class Program
    {
        enum WeekDays
        {
            Monday = 1,
            Tuesday = 2,
            Wednesday = 3,
            Thursday = 4,
            Friday = 5,
            Saturday = 6,
            Sunday = 7
        }
        static void Main(string[] args)
        {
        Console.WriteLine("Enter number of week day");
            int number = Convert.ToInt32(Console.ReadLine());
            switch(number)
            {
                case 1:Console.WriteLine(WeekDays.Monday.ToString());
                break;
                case 2:
                    Console.WriteLine(WeekDays.Tuesday.ToString());
                    break;
                case 3:
                    Console.WriteLine(WeekDays.Wednesday.ToString());
                    break;
                case 4:
                    Console.WriteLine(WeekDays.Thursday.ToString());
                    break;
                case 5:
                    Console.WriteLine(WeekDays.Friday.ToString());
                    break;
                case 6:
                    Console.WriteLine(WeekDays.Saturday.ToString());
                    break;
                case 7:
                    Console.WriteLine(WeekDays.Sunday.ToString());
                    break;
                default:
                    Console.WriteLine("Invalid choice");
                    break;
            }
             
        }
    }
}
