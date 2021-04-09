using System;

namespace day1
{
    class Practice
    {
        public static void main(String[] args)
        {
            int num1, num2;

            Console.WriteLine($"Calculator in C#");
            Console.WriteLine($"Enter two values");

            num1 = Convert.ToInt32(Console.ReadLine());

            num2 = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine($"choose one operation and enter a number of opertion");
            Console.WriteLine($"1.Addition, 2.Substraction, 3.Multiplication, 4.Division ");

            switch (Convert.ToInt32(Console.ReadLine()))
            {
                case 1:
                    Console.WriteLine($"Addition of {num1} and {num2} is {num1 + num2}");
                    break;
                case 2:
                    Console.WriteLine($"Substraction of {num1} and {num2} is {num1 - num2}");
                    break;
                case 3:
                    Console.WriteLine($"Multiplication of {num1} and {num2} is {num1 * num2}");
                    break;
                case 4:
                    Console.WriteLine($"Division of {num1} and {num2} is {num1/num2}");
                    break;
                default:
                    Console.WriteLine($"Please choose an appropriate operation");
                    break;
            }                                                                            
        }
    }
}
