using System;

namespace Calculator
{
    class Program
    {
        static void Main(string[] args)
        {
           double num1 = 0;
           double num2 = 0;
            //Display title as calculator App
            Console.WriteLine("Console calculator in c#:/r");
            Console.WriteLine("-----------------\n");
            //ask user to enter numbers
            Console.WriteLine("Type A number");
            num1 = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Type Another number");
            num2 = Convert.ToDouble(Console.ReadLine());
            //ASking user to choose option
            Console.WriteLine("Choose option from following lisyt");
            Console.WriteLine("\ta - Add");
            Console.WriteLine("\ts - Subtract");
            Console.WriteLine("\tm - Multiply");
            Console.WriteLine("\td - Divide");
            Console.Write("Your option? ");

            switch(Console.ReadLine())
            {
                case "a":
                    Console.WriteLine($"Your result :{num1} + {num2} = " + (num1 + num2));
                    break;
                case "s":
                    Console.WriteLine($"Your result :{num1} - {num2} = " + (num1 - num2));
                    break;
                case "m":
                    Console.WriteLine($"Your result :{num1} * {num2} = " + (num1 * num2));
                    break;
                case "d":
                    while(num2 == 0)
                    {
                        Console.WriteLine("divisor Can not be zero");
                        num2 = Convert.ToDouble(Console.ReadLine());
                    }
                    Console.WriteLine($"Your result :{num1} / {num2} = " + (num1 / num2));
                    break;
                default:
                    Console.WriteLine("Incorrect option");
                    break;


            }
            Console.Write("press any key to exit");
            Console.ReadKey();

        }
    }
}
