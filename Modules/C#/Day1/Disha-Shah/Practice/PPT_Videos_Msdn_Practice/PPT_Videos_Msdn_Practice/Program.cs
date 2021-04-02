using System;
using System.Collections.Generic;

namespace PPT_Videos_Msdn_Practice
{
    public enum Days
    {
        None = 0b_0000_0000,  // 0
        Monday = 0b_0000_0001,  // 1
        Tuesday = 0b_0000_0010,  // 2
        Wednesday = 0b_0000_0100,  // 4
        Thursday = 0b_0000_1000,  // 8
        Friday = 0b_0001_0000,  // 16
        Saturday = 0b_0010_0000,  // 32
        Sunday = 0b_0100_0000,  // 64
        Weekend = Saturday | Sunday
    }

    class Calculator
    {
        public static double DoOperation(double num1, double num2, string op)
        {
            double result = double.NaN; // Default value is "not-a-number" which we use if an operation, such as division, could result in an error.

            // Use a switch statement to do the math.
            switch (op)
            {
                case "a":
                    result = num1 + num2;
                    break;
                case "s":
                    result = num1 - num2;
                    break;
                case "m":
                    result = num1 * num2;
                    break;
                case "d":
                    // Ask the user to enter a non-zero divisor.
                    if (num2 != 0)
                    {
                        result = num1 / num2;
                    }
                    break;
                // Return text for an incorrect option entry.
                default:
                    break;
            }
            return result;
        }
    }

    class Program
    {
        public static void TestIfElse(int n)
        {
            if (n < 10)
            {
                Console.WriteLine("n is less than 10");
            }
            else if (n < 20)
            {
                Console.WriteLine("n is less than 20");
            }
            else
            {
                Console.WriteLine("n is greater than or equal to 20");
            }
        }

        public static float TestSwitch(float op1, float op2, char opr)
        {
            float result;
            switch (opr)
            {
                case '+':
                    result = op1 + op2;
                    break;
                case '-':
                    result = op1 - op2;
                    break;
                case '*':
                    result = op1 * op2;
                    break;
                case '/':
                    result = op1 / op2;
                    break;
                default:
                    Console.WriteLine("Unknown Operator");
                    return 0;
            }
            return result;
        }

        public static int Factorial(int n)
        {
            if (n == 0)
            {
                return 1;
            }
            else
            {
                return n * Factorial(n - 1);
            }
        }

        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            string name = "Disha Shah";
            string name1 = "Virti Shah";
            Console.WriteLine("Hello, " + name);

            // String interpolation
            Console.WriteLine($"Hello, {name}");
            Console.WriteLine($"Hello, {name} and {name1}");

            //find out length of a string
            Console.WriteLine($"The name {name} has {name.Length} letters");

            //operator precednce for calculation
            int a = 5, b = 4, c = 2;
            int d = a + b * c;
            Console.WriteLine(d);

            a = 7;
            b = 4;
            c = 3;
            d = (a + b) / c;
            int e1 = (a + b) % c;
            Console.WriteLine($"quotient: {d}");
            Console.WriteLine($"remainder: {e1}");

            //parentheses has highest precedence
            d = (a + b) - 6 * c + (12 * 4) / 3 + 12;
            Console.WriteLine(d);

            //max and min values
            int max = int.MaxValue;
            int min = int.MinValue;
            Console.WriteLine($"The range of integers is {min} to {max}");

            //difference between precisions of double and decimal datatype
            double a1 = 1.0;
            double b1 = 3.0;
            Console.WriteLine($"Double: {a1 / b1}");

            decimal a2 = 1.0M;
            decimal b2 = 3.0M;
            Console.WriteLine($"Decimal: {a2 / b2}");

            double radius = 2.50;
            Console.WriteLine($"Area= {Math.PI * radius * radius}");

            //Operators

            a = 7;
            b = a;
            c = b++;
            b = a + b * c;
            Console.WriteLine($"b={b}");
            c = a >= 100 ? b : c / 10;
            Console.WriteLine($"c={c}");
            a = (int)Math.Sqrt(b * b + c * c);
            Console.WriteLine($"a={a}");

            string s1 = "String literal";
            char l = s1[s1.Length - 1];
            Console.WriteLine($"char l={l}");

            for (int i = 0; i < s1.Length; i++)
            {
                Console.WriteLine($"Char = {s1[i]}");
            }

            var number = new List<int>(new[] { 1, 2, 3 });
            Console.WriteLine($"Number = {number}");
            b = number.FindLast(n => n > 1);
            Console.WriteLine($"Last number b={b}");

            //Associativity of operators
            a = 13 / 5 / 2;
            b = 13 / (5 / 2);
            Console.WriteLine($"a = {a}, b = {b}");

            //Unary plus & minus operator
            Console.WriteLine(+4);     // output: 4

            Console.WriteLine(-4);     // output: -4
            Console.WriteLine(-(-4));  // output: 4

            uint a4 = 5;
            var b4 = -a4;
            Console.WriteLine(b4);            // output: -5
            Console.WriteLine(b4.GetType());  // output: System.Int64

            Console.WriteLine(-double.NaN);  // output: NaN

            Console.WriteLine(13 / 5.0);       // output: 2.6

            int a5 = 13;
            int b5 = 5;
            Console.WriteLine((double)a5 / b5);  // output: 2.6

            //Floating point division
            Console.WriteLine(16.8f / 4.1f);   // output: 4.097561
            Console.WriteLine(16.8d / 4.1d);   // output: 4.09756097560976
            Console.WriteLine(16.8m / 4.1m);   // output: 4.0975609756097560975609756098

            //Integer Remainder
            Console.WriteLine(5 % 4);   // output: 1
            Console.WriteLine(5 % -4);  // output: 1
            Console.WriteLine(-5 % 4);  // output: -1
            Console.WriteLine(-5 % -4); // output: -1

            //Compound operators, numeric operations
            byte a6 = 200;
            byte b6 = 100;

            var c6 = a6 + b6;
            Console.WriteLine(c6.GetType());  // output: System.Int32
            Console.WriteLine(c6);  // output: 300

            a6 += b6;
            Console.WriteLine(a6);  // output: 44

            //Integer Arithmetic Overflow
            a5 = int.MaxValue;
            b5 = 3;

            Console.WriteLine(unchecked(a5 + b5));  // output: -2147483646
            try
            {
                int d5 = checked(a5 + b5);
            }
            catch (OverflowException)
            {
                Console.WriteLine($"Overflow occurred when adding {a5} to {b5}.");
            }

            //Floating Point Arithmetic Overflow
            double a7 = 1.0 / 0.0;
            Console.WriteLine(a7);                    // output: Infinity
            Console.WriteLine(double.IsInfinity(a7)); // output: True

            Console.WriteLine(double.MaxValue + double.MaxValue); // output: Infinity

            double b7 = 0.0 / 0.0;
            Console.WriteLine(b7);                // output: NaN
            Console.WriteLine(double.IsNaN(b7));  // output: True

            //Logical AND operator
            bool SecondOperand()
            {
                Console.WriteLine("Second operand is evaluated.");
                return true;
            }

            bool a8 = false & SecondOperand();
            Console.WriteLine(a8);
            // Output:
            // Second operand is evaluated.
            // False

            bool b8 = true & SecondOperand();
            Console.WriteLine(b8);
            // Output:
            // Second operand is evaluated.
            // True

            //Logical Exclusive OR 
            Console.WriteLine(true ^ true);    // output: False
            Console.WriteLine(true ^ false);   // output: True
            Console.WriteLine(false ^ true);   // output: True
            Console.WriteLine(false ^ false);  // output: False

            //Logical OR
            a8 = true | SecondOperand();
            Console.WriteLine(a8);
            // Output:
            // Second operand is evaluated.
            // True

            b8 = false | SecondOperand();
            Console.WriteLine(b8);
            // Output:
            // Second operand is evaluated.
            // True

            //Operator Precedence
            Console.WriteLine(true | true & false);   // output: True
            Console.WriteLine((true | true) & false); // output: False

            bool Operand(string name, bool value)
            {
                Console.WriteLine($"Operand {name} is evaluated.");
                return value;
            }

            var byDefaultPrecedence = Operand("A", true) || Operand("B", true) && Operand("C", false);
            Console.WriteLine(byDefaultPrecedence);
            // Output:
            // Operand A is evaluated.
            // True

            var changedOrder = (Operand("A", true) || Operand("B", true)) && Operand("C", false);
            Console.WriteLine(changedOrder);
            // Output:
            // Operand A is evaluated.
            // Operand C is evaluated.
            // False

            //Bitwise Complement Operator
            uint ua = 0b_0000_1111_0000_1111_0000_1111_0000_1100;
            uint ub = ~ua;
            Console.WriteLine(Convert.ToString(ub, toBase: 2));
            // Output:
            // 11110000111100001111000011110011

            //Left shift operator
            uint x = 0b_1100_1001_0000_0000_0000_0000_0001_0001;
            Console.WriteLine($"Before: {Convert.ToString(x, toBase: 2)}");

            uint y = x << 4;
            Console.WriteLine($"After:  {Convert.ToString(y, toBase: 2)}");
            // Output:
            // Before: 11001001000000000000000000010001
            // After:  10010000000000000000000100010000

            //Right Shift Operator
            x = 0b_1001;
            Console.WriteLine($"Before: {Convert.ToString(x, toBase: 2),4}");

            y = x >> 2;
            Console.WriteLine($"After:  {Convert.ToString(y, toBase: 2),4}");
            // Output:
            // Before: 1001
            // After:    10

            //Logical AND
            uint a9 = 0b_1111_1000;
            uint b9 = 0b_1001_1101;
            uint c9 = a9 & b9;
            Console.WriteLine(Convert.ToString(c9, toBase: 2));
            // Output:
            // 10011000

            //Logical EX OR
            a9 = 0b_1111_1000;
            b9 = 0b_0001_1100;
            c9 = a9 ^ b9;
            Console.WriteLine(Convert.ToString(c9, toBase: 2));
            // Output:
            // 11100100

            //Logical OR
            a9 = 0b_1010_0000;
            b9 = 0b_1001_0001;
            c9 = a9 | b9;
            Console.WriteLine(Convert.ToString(c9, toBase: 2));
            // Output:
            // 10110001

            //Operator precedence
            a9 = 0b_1101;
            b9 = 0b_1001;
            c9 = 0b_1010;

            uint d1 = a9 | b9 & c9;
            Display(d1);  // output: 1101

            uint d2 = (a9 | b9) & c9;
            Display(d2);  // output: 1000

            void Display(uint x) => Console.WriteLine($"{Convert.ToString(x, toBase: 2),4}");

            //Enum
            Days meetingDays = Days.Monday | Days.Wednesday | Days.Friday;
            Console.WriteLine(meetingDays);
            // Output:
            // Monday, Wednesday, Friday

            Days workingFromHomeDays = Days.Thursday | Days.Friday;
            Console.WriteLine($"Join a meeting by phone on {meetingDays & workingFromHomeDays}");
            // Output:
            // Join a meeting by phone on Friday

            bool isMeetingOnTuesday = (meetingDays & Days.Tuesday) == Days.Tuesday;
            Console.WriteLine($"Is there a meeting on Tuesday: {isMeetingOnTuesday}");
            // Output:
            // Is there a meeting on Tuesday: False

            var a10 = (Days)37;
            Console.WriteLine(a10);
            // Output:
            // Monday, Wednesday, Saturday

            //Declare Single dimensional, multi-dimensional and jagged arrays
            // Declare a single-dimensional array of 5 integers.
            int[] array1 = new int[5];

            // Declare and set array element values.
            int[] array2 = new int[] { 1, 3, 5, 7, 9 };

            // Alternative syntax.
            int[] array3 = { 1, 2, 3, 4, 5, 6 };

            // Declare a two dimensional array.
            int[,] multiDimensionalArray1 = new int[2, 3];
            Console.WriteLine("The array has {0} dimensions", multiDimensionalArray1.Rank);

            // Declare and set array element values.
            int[,] multiDimensionalArray2 = { { 1, 2, 3 }, { 4, 5, 6 } };

            //Accessing Multidimensional arrays 
            // Two-dimensional array.
            int[,] array2D = new int[,] { { 1, 2 }, { 3, 4 }, { 5, 6 }, { 7, 8 } };
            // The same array with dimensions specified.
            int[,] array2Da = new int[4, 2] { { 1, 2 }, { 3, 4 }, { 5, 6 }, { 7, 8 } };
            // A similar array with string elements.
            string[,] array2Db = new string[3, 2] { { "one", "two" }, { "three", "four" },
                                        { "five", "six" } };

            // Three-dimensional array.
            int[,,] array3D = new int[,,] { { { 1, 2, 3 }, { 4, 5, 6 } },
                                 { { 7, 8, 9 }, { 10, 11, 12 } } };
            // The same array with dimensions specified.
            int[,,] array3Da = new int[2, 2, 3] { { { 1, 2, 3 }, { 4, 5, 6 } },
                                       { { 7, 8, 9 }, { 10, 11, 12 } } };

            // Accessing array elements.
            Console.WriteLine(array2D[0, 0]);
            Console.WriteLine(array2D[0, 1]);
            Console.WriteLine(array2D[1, 0]);
            Console.WriteLine(array2D[1, 1]);
            Console.WriteLine(array2D[3, 0]);
            Console.WriteLine(array2Db[1, 0]);
            Console.WriteLine(array3Da[1, 0, 1]);
            Console.WriteLine(array3D[1, 1, 2]);

            // Getting the total count of elements or the length of a given dimension.
            var allLength = array3D.Length;
            var total = 1;
            for (int i = 0; i < array3D.Rank; i++)
            {
                total *= array3D.GetLength(i);
            }
            Console.WriteLine("{0} equals {1}", allLength, total);

            // Output:
            // 1
            // 2
            // 3
            // 4
            // 7
            // three
            // 8
            // 12
            // 12 equals 12


            // Declare a jagged array.
            int[][] jaggedArray = new int[3][];

            //Initializing Jagged Array
            jaggedArray[0] = new int[5];
            jaggedArray[1] = new int[4];
            jaggedArray[2] = new int[2];

            // Set the values of the array in the jagged array structure.
            jaggedArray[0] = new int[] { 1, 3, 5, 7, 9 };
            jaggedArray[1] = new int[] { 0, 2, 4, 6 };
            jaggedArray[2] = new int[] { 11, 22 };

            //can also initialize the array upon declaration
            int[][] jaggedArray2 = new int[][]
            {
            new int[] { 1, 3, 5, 7, 9 },
            new int[] { 0, 2, 4, 6 },
            new int[] { 11, 22 }
            };

            //shorthand form for initialization
            int[][] jaggedArray3 =
            {
                new int[] { 1, 3, 5, 7, 9 },
                new int[] { 0, 2, 4, 6 },
                new int[] { 11, 22 }
            };

            // Assign 77 to the second element ([1]) of the first array ([0]):
            jaggedArray3[0][1] = 77;

            // Assign 88 to the second element ([1]) of the third array ([2]):
            jaggedArray3[2][1] = 88;

            //mix jagged array and multidimensional arrays
            int[][,] jaggedArray4 = new int[3][,]
            {
                new int[,] { {1,3}, {5,7} },
                new int[,] { {0,2}, {4,6}, {8,10} },
                new int[,] { {11,22}, {99,88}, {0,9} }
            };

            Console.Write("{0}", jaggedArray4[0][1, 0]);

            Console.WriteLine(jaggedArray4.Length);

            //jagged array example
            // Declare the array of two elements.
            int[][] arr = new int[2][];

            // Initialize the elements.
            arr[0] = new int[5] { 1, 3, 5, 7, 9 };
            arr[1] = new int[4] { 2, 4, 6, 8 };

            // Display the array elements.
            for (int i = 0; i < arr.Length; i++)
            {
                System.Console.Write("Element({0}): ", i);

                for (int j = 0; j < arr[i].Length; j++)
                {
                    System.Console.Write("{0}{1}", arr[i][j], j == (arr[i].Length - 1) ? "" : " ");
                }
                System.Console.WriteLine();
            }
            /* Output:
                Element(0): 1 3 5 7 9
                Element(1): 2 4 6 8
            */


            //Sort in Array
            var Authors = new String[5];
            Authors[0] = "Reena";
            Authors[1] = "Meena";
            Authors[2] = "Rita";

            Console.WriteLine("Authors Unsorted...");
            foreach (string s in Authors)
            {
                Console.WriteLine(s);
            }

            Array.Sort(Authors);

            Console.WriteLine("Authors Sorted...");
            foreach (string s in Authors)
            {
                Console.WriteLine(s);
            }


            //Multi-dimensional arrays
            string[,] employee = new string[2, 3];
            string empno, salary;
            string empname;

            for (int i = 0; i < 2; i++)
            {
                Console.WriteLine("Enter emp no:");
                empno = Console.ReadLine();

                Console.WriteLine("Enter emp name:");
                empname = Console.ReadLine();

                Console.WriteLine("Enter salary:");
                salary = Console.ReadLine();
                employee[i, 0] = empno;
                employee[i, 1] = empname;
                employee[i, 2] = salary;

            }

            for (int i = 0; i < 2; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    Console.Write(employee[i, j] + " ");
                }
                Console.WriteLine();
            }

            //if loop
            float number1 = 10;
            float number2 = 20;
            if (number2 > number1 && number1 != number2)
            {
                Console.WriteLine("number2 is greater than number1");
            }

            // calling function having if-else loop
            int num;
            Console.WriteLine("Enter a number:");
            num = Convert.ToInt32(Console.ReadLine());
            Program.TestIfElse(num);

            //function having switch statement, returns a value 
            char opr;
            float result;
            Console.WriteLine("Enter Operator:");
            opr = Convert.ToChar(Console.ReadLine());
            result = Program.TestSwitch(number1, number2, opr);
            Console.WriteLine("Result: {0}", result);

            //while loop
            while (number1 <= 15)
            {
                Console.WriteLine("The value of number = {0}", number1);
                number1++;
            }

            //do-while loop
            do
            {
                Console.WriteLine("The value of number = {0}", number2);
                number2++;
            }
            while (number2 <= 25);

            //for loop
            for (int i = 0; i < 5; i++)
            {
                Console.WriteLine("The value of i = {0}", i);
            }

            //for each loop
            int[] numbers = { 1, 2, 3, 4, 5 };
            foreach (int i in numbers)
            {
                Console.WriteLine("The value of i = {0}", i);
            }

            Console.WriteLine("Factorial ans is : {0}", Program.Factorial(5));

            /*-------------CALCULATOR-------------*/

            bool endApp = false;
            // Display title as the C# console calculator app.
            Console.WriteLine("Console Calculator in C#\r");
            Console.WriteLine("------------------------\n");

            while (!endApp)
            {
                // Declare variables and set to empty.
                string numInput1 = "";
                string numInput2 = "";
                double Calcresult = 0;

                // Ask the user to type the first number.
                Console.Write("Type a number, and then press Enter: ");
                numInput1 = Console.ReadLine();

                double cleanNum1 = 0;
                while (!double.TryParse(numInput1, out cleanNum1))
                {
                    Console.Write("This is not valid input. Please enter an integer value: ");
                    numInput1 = Console.ReadLine();
                }

                // Ask the user to type the second number.
                Console.Write("Type another number, and then press Enter: ");
                numInput2 = Console.ReadLine();

                double cleanNum2 = 0;
                while (!double.TryParse(numInput2, out cleanNum2))
                {
                    Console.Write("This is not valid input. Please enter an integer value: ");
                    numInput2 = Console.ReadLine();
                }

                // Ask the user to choose an operator.
                Console.WriteLine("Choose an operator from the following list:");
                Console.WriteLine("\ta - Add");
                Console.WriteLine("\ts - Subtract");
                Console.WriteLine("\tm - Multiply");
                Console.WriteLine("\td - Divide");
                Console.Write("Your option? ");

                string op = Console.ReadLine();

                try
                {
                    Calcresult = Calculator.DoOperation(cleanNum1, cleanNum2, op);
                    if (double.IsNaN(Calcresult))
                    {
                        Console.WriteLine("This operation will result in a mathematical error.\n");
                    }
                    else Console.WriteLine("Your result: {0:0.##}\n", Calcresult);
                }
                catch (Exception e)
                {
                    Console.WriteLine("Oh no! An exception occurred trying to do the math.\n - Details: " + e.Message);
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
