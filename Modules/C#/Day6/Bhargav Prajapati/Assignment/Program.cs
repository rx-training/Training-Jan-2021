using System;

namespace Assignment
{
    class Program
    {
        static void Main(string[] args)
        {
            /*Compute area of rectangle using func delegate*/

            Console.WriteLine("Enter Length ");
            double length = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Enter Breadth");
            double breadth = Convert.ToDouble(Console.ReadLine());
            Func<double, double, double> area = (Length, Breadth) =>  Length* Breadth;
            double Area = area(length,breadth);
            Console.WriteLine($"Area Of Rectangle  is  :-  {Area}");


            /*Compute add of two number using lambda expression*/
            Console.WriteLine("Enter The Number 1 :-");
            int num1 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter The Number 2 :-");
            int num2 = Convert.ToInt32(Console.ReadLine());
            Func<int, int, int> addition = (number1, number2) => num1 + num2;
            int sum = addition(num1, num2);
            Console.WriteLine($"Addition Of {num1} And {num2} Is :- {sum}");




        }
    }
}
