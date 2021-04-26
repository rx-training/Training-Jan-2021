using System;

namespace Assignment1
{

    class Program
    {
        static void Main(string[] args)
        {                 
            Func<int, int, int> add1 = new Func<int, int, int>(AreaOfRectangle);
            int result = AreaOfRectangle(10, 10);
            Console.WriteLine(result);
        }
        public static int AreaOfRectangle(int l, int b)
        {
            return l * b;
        }
    }
}
