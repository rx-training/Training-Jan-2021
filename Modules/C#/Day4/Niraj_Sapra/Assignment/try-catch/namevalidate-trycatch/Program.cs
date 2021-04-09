using System;

namespace namevalidate_trycatch
{
    class NAMEException : Exception
    {
        public NAMEException(String message)
        : base(message)
        {

        }
    }
    class Program
    {
        static void validate(string name)
        {
            foreach(var item in name)
            {
                if (!char.IsLetter(item))
                {
                    throw new NAMEException("Sorry,Age must be grater then 0 ");
                }
            }

        }
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            try
            {
                string name = Console.ReadLine();
                validate(name);
            }
            catch (NAMEException e)
            {
                Console.WriteLine(e);
            }
            Console.WriteLine("Rest of the code");
        }
    }
}
