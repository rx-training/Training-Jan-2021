using System;
using CalculatorProgram;

namespace Calculator_1
{
   
    class program
    {
        static void Main(string[] args)
        {
            bool endApp = false;
            // Display title as the C# console calculator app.
            Console.WriteLine("Console Calculator in C#\r");
            Console.WriteLine("------------------------\n");
            while(!endApp)
            {
                string numinput1 = "";
                string numinput2 = "";
                double result = 0;
                //ASk user to type numbers
                Console.WriteLine("type a number");
                numinput1 = Console.ReadLine();
                double cleanNum1 = 0;
                while(!double.TryParse(numinput1 , out cleanNum1 ))
                {
                    Console.Write("This is not avalid number");
                    numinput1 = Console.ReadLine();
                }
                Console.WriteLine("type another number");
                numinput2 = Console.ReadLine();
                double cleanNum2 = 0;
                while (!double.TryParse(numinput2, out cleanNum2))
                {
                    Console.Write("This is not avalid number");
                    numinput2 = Console.ReadLine();
                }
                //Ask user for their choice
                Console.WriteLine("Choose an operator from the following list:");
                Console.WriteLine("\ta - Add");
                Console.WriteLine("\ts - Subtract");
                Console.WriteLine("\tm - Multiply");
                Console.WriteLine("\td - Divide");
                Console.Write("Your option? ");
                String op = Console.ReadLine();
                try
                {
                    result =Calculator.DoOperation(cleanNum1, cleanNum2, op);
                    if (double.IsNaN(result))
                    {
                        Console.WriteLine("this will end in mathematical error");

                    }
                    else Console.WriteLine("Your result: {0:0.##}\n", result);
                }
                catch(Exception e)
                {
                    Console.WriteLine("Oh No! an error occured:\n -Details" + e.Message);

                }
                Console.WriteLine("------------------------\n");
                // Wait for the user to respond before closing.
                Console.Write("Press 'n' and Enter to close the app, or press any other key and Enter to continue: ");
                if (Console.ReadLine() == "n") endApp = true;

                Console.WriteLine("\n"); // Friendly linespacing.
            }
        }
    }
}
