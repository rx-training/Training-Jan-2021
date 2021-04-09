using System;

namespace Practice4
{
    class Program
    {
        //Operators in c#
        static void Main(string[] args)
        {
            //ArithmeticException operators
            string c;
            Console.WriteLine("Enter any operator from +,-,*,%,/");
            c = Console.ReadLine();
            Console.WriteLine(c);
            int num1;
            int num2;
            int result;
            Console.WriteLine("Enter first number");
            num1 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter second number");
            num2 = Convert.ToInt32(Console.ReadLine());
            switch (c)
            {
                case "+":
                    result = num1 + num2;
                    Console.WriteLine(result);
                    break;
                case "-":
                    result = num1 - num2;
                    Console.WriteLine(result);
                    break;
                case "*":
                    result = num1 * num2;
                    Console.WriteLine(result);
                    break;
                case "/":
                    result = num1 / num2;
                    Console.WriteLine(result);
                    break;
                case "%":
                    result = num1 % num2;
                    Console.WriteLine(result);
                    break;
                default:
                    Console.WriteLine("Invalid operator");
                    break;
            }
            //Logical and comparision operators
            int x = 120;
            int y = 100;
            int z = 90;
            if(x >y && x>z)
            {
                Console.WriteLine("X is greater than y and z");
            }
            if(x >y || x>z)
            {
                Console.WriteLine("X is greater");
            }
            if(x != y)
            {
                Console.WriteLine("X is not equal to y");
            }
            if(x== y)
            {
                Console.WriteLine("X is equal to y");
            }
            x =x>>3;
            x = x << 2;
            z = x & y;
            z = x ^ y;
            z = x | y;
            Console.WriteLine("X is"+x);
            Console.WriteLine("Z is"+z);
        }
    }
}
