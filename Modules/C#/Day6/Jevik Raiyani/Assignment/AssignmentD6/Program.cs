using System;

namespace AssignmentD6
{
    class Program
    {
        static void Main(string[] args)
        {
            //Assignment1
            Func<int, int, int> Rectangle = (x, y) => x * y;

            Console.WriteLine("enter Two numbers to get their rectangle area");
            Console.WriteLine("num1");
            int num1 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("num2");
            int num2 = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Area is");
            Console.WriteLine(Rectangle(num1, num2));


            //assignment

            Console.WriteLine("enter Two numbers to get their sum");
            Console.WriteLine("num1");
            int num11 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("num2");
            int num12 = Convert.ToInt32(Console.ReadLine());


            Action<int,int> sum = (p,q) =>
            {
                int sumofnum = p+q;
                Console.WriteLine(sumofnum);
            };

            Console.WriteLine("Area is");
            sum(num11, num12);
        }
    }
}
