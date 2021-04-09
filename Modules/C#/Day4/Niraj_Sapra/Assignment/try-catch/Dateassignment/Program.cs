using System;

namespace Dateassignment
{
    class DateException : Exception
    {
        public DateException(String message)
        : base(message)
        {

    }
    }
    class Program
    {
        static void validate(DateTime dates)
        {
            if (DateTime.Now.CompareTo(dates)!=0)
            {
                throw new DateException("you not enterless then this date.");
            }
        }
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            try
            {
                DateTime num = Convert.ToDateTime(Console.ReadLine());
                validate(num);
            }
            catch (DateException e)
            {
                Console.WriteLine(e);
            }
            Console.WriteLine("Rest of the code");
        }
    }
}
