using System;

namespace try_catch
{
    class AgeException : Exception
    {
        public AgeException(String message)
        : base(message)
        {

        }
    }
    class Program
    {
        static void validate(int age)
        {
            if (age < 0)
            {
                throw new AgeException("Sorry,Age must be grater then 0 ");
            }
        }
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            try
            {
                int num = Convert.ToInt32(Console.ReadLine());
                validate(num);
            }
            catch (AgeException e)
            {
                Console.WriteLine(e);
            }
            Console.WriteLine("Rest of the code");

        }
    }
}
