using System;
enum Days
{
    Sunday = 1,
    Monday = 2,
    Tuesday = 3,
    Wednesday = 4,
    Thursday = 5,
    Friday = 6,
    Saturday = 7
}
namespace Assignment3
{
    class Program
    {
        static void Main(string[] args)
        {
             static void Main(string[] args)
            {
                Console.WriteLine("Enter Week day:");
            int number = Convert.ToInt32(Console.ReadLine());
                switch (number)
                {
                    case 1:
                        Console.WriteLine(Days.Sunday.ToString());
                        break;
                    case 2:
                        Console.WriteLine(Days.Monday.ToString());
                        break;
                    case 3:
                        Console.WriteLine(Days.Tuesday.ToString());
                        break;
                    case 4:
                        Console.WriteLine(Days.Wednesday.ToString());
                        break;
                    case 5:
                        Console.WriteLine(Days.Thursday.ToString());
                        break;
                    case 6:
                        Console.WriteLine(Days.Friday.ToString());
                        break;
                    case 7:
                        Console.WriteLine(Days.Saturday.ToString());
                        break;
                }
            }
        }
    }
}
