using System;

namespace Day6_Assignment
{
    class Program
    {
        public delegate Area Func<in x, in y, out Area>(int x, int y);

        public static int AreaMethod(int x, int y)
        {
            return x * y;
        }

        static void Main(string[] args)
        {
            // Compute area of rectangle using func delegate
            int a, b;

            Console.Write("Enter first number : ");
            a = Convert.ToInt32(Console.ReadLine());

            Console.Write("Enter width : ");
            b = Convert.ToInt32(Console.ReadLine());

            Func<int, int, int> area = AreaMethod;
            Console.WriteLine("Area of rectangle : " + area(a, b));


            // Compute add of two number using lambda expression
            Func<int, int, int> Sum = (p, q) => p + q;
            Console.WriteLine("Addition : " + Sum(a, b));

        }
    }
}
