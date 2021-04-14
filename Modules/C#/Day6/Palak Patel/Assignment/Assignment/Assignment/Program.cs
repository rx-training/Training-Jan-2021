using System;
using System.Linq;

namespace Assignment
{
    class Program
    {
        public delegate float areaHandler(float x, float y);
        static void Main(string[] args)
        {


            Console.WriteLine("Enter the Length of Rectangle");
            float length = Convert.ToSingle(Console.ReadLine());
            Console.WriteLine("Enter the width of Rectangle");
            float width = Convert.ToSingle(Console.ReadLine());

            Math math = new Math();

            areaHandler calculateArea = new areaHandler(math.Area);
            

            float result = calculateArea(length, width);

            Console.WriteLine($"Area of rectangle is : {result}");
            
            Console.WriteLine();
            Console.WriteLine("Enter num 1");
            int num1 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter 2nd Number");
            int num2 = Convert.ToInt32(Console.ReadLine());
            int[] numbers = { num1, num2 };
            int sum = numbers.Aggregate(0, (int first, int next) => first + next);
            Console.WriteLine($"Addition of two numbers are : {sum}");   
        }
    }
}
       