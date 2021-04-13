using System;
using CalculatorLibrary;

namespace Calculator
{
    class Program
    {
        static void Main(string[] args)
        {
            string num1 = String.Empty;
            string num2 = String.Empty;

            Console.WriteLine("Console Calculator\r");
            Console.WriteLine("****************************************\n");
            CalculatorClass obj = new CalculatorClass();
            while (true)
            {
                // First number.
                Console.WriteLine("Please enter a number, and then press Enter");
                num1 = Console.ReadLine();

                double verifiedNum1 = 0;
                while(!double.TryParse(num1, out verifiedNum1))
                {
                    Console.Write("This is not valid input. Please enter an integer value: ");
                    num1 = Console.ReadLine();
                }

                // Second number.
                Console.WriteLine("Please enter an another number, and then press Enter");
                num2 = Console.ReadLine();

                double verifiedNum2 = 0;
                while (!double.TryParse(num2, out verifiedNum2))
                {
                    Console.Write("This is not valid input. Please enter an integer value: ");
                    num2 = Console.ReadLine();
                }

                Console.WriteLine("Choose an option from the following list:");
                Console.WriteLine("\ta - Add"); // \t = tab
                Console.WriteLine("\ts - Subtract");
                Console.WriteLine("\tm - Multiply");
                Console.WriteLine("\td - Divide");
                Console.Write("Your option? ");

                string operation = Console.ReadLine();

                while (operation != "a" && operation != "s" && operation != "m" && operation != "d")
                {
                    Console.WriteLine("INVALID OPERATION CODE!\n");
                    Console.WriteLine("Choose an option from the following list:");
                    Console.WriteLine("\ta - Add"); // \t = tab
                    Console.WriteLine("\ts - Subtract");
                    Console.WriteLine("\tm - Multiply");
                    Console.WriteLine("\td - Divide");
                    Console.Write("Your option? ");
                    operation = Console.ReadLine();
                }

                try
                {
                    
                    var result = obj.Calculation(verifiedNum1, verifiedNum2, operation);
                    if(double.IsNaN(result))
                    {
                        Console.WriteLine("This operation will result in a mathematical error.\n");
                    }
                    else
                    {
                        Console.WriteLine("Your result: {0:0.##}\n", result);
                    }
                }
                catch (Exception er)
                {
                    Console.WriteLine("Oh no! An exception occurred trying to do the math.\n - Details: " + er.Message);
                }

                Console.Write("Press 'n' and Enter to close the app, or press any other key and Enter to continue: ");
                if (Console.ReadLine() == "n") break;

                Console.WriteLine("\n"); // Friendly linespacing.
            }
            //// And call to close the JSON writer before return
            obj.Finish();

        }
    }
}
