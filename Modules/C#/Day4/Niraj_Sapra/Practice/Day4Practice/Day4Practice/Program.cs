using System;

namespace Day4Practice
{
    class Program
    {
        static void Main(string[] args)
        {
            int x = 0;
            try
            {
                Person p1 = new Person();
                p1.Name = "John";
                Person p2 = null;

                // The following throws a NullReferenceException.
                Console.WriteLine("p1 = p2: {0}", p1.Equals(p2));
                

                int y = 100 / x;
            }
            catch (ArithmeticException e)
            {
                Console.WriteLine($"ArithmeticException Handler: {e}");
            }
            catch (Exception e)
            {
                Console.WriteLine($"Generic Exception Handler: {e}");
            }
        }
    }
}
