using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

public enum weekdays
{
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5
}

namespace Question3
{
    class Program
    {
        static void Main(string[] args)
        {
            int num;
            Console.Write("Enter Weekday number: ");
            num = Convert.ToInt32(Console.Read());
            switch (num)
            {
                case 1:
                    Console.WriteLine("This number is for {0}", weekdays.Monday);
                    break;
                case 2:
                    Console.WriteLine("This number is for {0}", weekdays.Tuesday);
                    break;
                case 3:
                    Console.WriteLine("This number is for {0}", weekdays.Wednesday);
                    break;
                case 4:
                    Console.WriteLine("This number is for {0}", weekdays.Thursday);
                    break;
                case 5:
                    Console.WriteLine("This number is for {0}", weekdays.Friday);
                    break;
                default:
                    Console.WriteLine("Please enter number from 1 to 5");
                    break;
            }
        }
    }
}
