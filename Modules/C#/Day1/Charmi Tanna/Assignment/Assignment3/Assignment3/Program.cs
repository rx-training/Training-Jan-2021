using System;
enum Days { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };
namespace Assignment3
{
    class Program
    {
        static void Main(string[] args)
        {
             static void Main(string[] args)
            {
                string s = Enum.GetName(typeof(Days), 3);
                Console.WriteLine(s);
                Days d = Days.Sunday;
            }
        }
    }
}
