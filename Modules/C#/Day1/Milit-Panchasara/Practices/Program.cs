using System;

namespace Practices
{
    class Program
    {
        enum SubjectCodes : int
        {
            DBMS = 101,
            DS = 201,
            Java = 103
        }
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            var stringData = "sample";
            string stringData2 = "       sample2           ";
            int intValue = 23;
            double value = 45.550;
            double sum = intValue + value;
            Console.WriteLine($"Sum of {intValue} and {value} numbers is {sum}");
            Console.WriteLine("Sum of 2 numbers is " + sum);
            Console.WriteLine("Sum of 2 numbers is {0}", sum);
            Console.WriteLine($"Length of \"{stringData}\" is {stringData.Length}");
            Console.WriteLine(stringData2);
            Console.WriteLine($"Trim from left: [{stringData2.TrimStart()}]");
            Console.WriteLine($"Trim from right: [{stringData2.TrimEnd()}]");
            Console.WriteLine($"Trim from both sides: [{stringData2.Trim()}]");

            Console.WriteLine(7 / 3); // Result will be int only.
            Console.WriteLine((float)7 / 3); // Casting result to float datatype.

            Console.WriteLine("Enter a number");
            double input = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine($"Number given is {input}");

            Console.Write("Hello ");
            Console.Write("World using Console.Write");
            Console.WriteLine("");

            Console.WriteLine(int.MaxValue);
            Console.WriteLine(int.MinValue);

            int a = 2;
            Console.WriteLine(a);
            Console.WriteLine(--a);
            Console.WriteLine(a++);

            var b = a;
            a = 10;
            Console.WriteLine(b); // Value datatype

            Console.WriteLine(16.8f / 4.1f);   // output: 4.097561
            Console.WriteLine(16.8d / 4.1d);   // output: 4.09756097560976
            Console.WriteLine(16.8m / 4.1m);   // output: 4.0975609756097560975609756098

            int[] numbers = { 2, 3, 4, 5 };
            Console.WriteLine(numbers);
            for (int i = 0; i < numbers.Length; i++)
            {
                Console.WriteLine(numbers[i]);
            }
            string[] arrayOfStrings = new string[5];
            for (int i = 0; i < arrayOfStrings.Length; i++)
            {
                Console.WriteLine($"Enter string {i + 1}:");
                arrayOfStrings[i] = Console.ReadLine();
            }

            foreach (var item in arrayOfStrings)
            {
                Console.WriteLine(item);
            }

            while (true)
            {
                Console.WriteLine("Enter 1 to continue, 0 to break:");
                var flag = Console.ReadLine();
                if (flag == "1")
                {
                    Console.WriteLine("CONTINUING");
                    continue;
                }
                else if (flag == "0")
                {
                    Console.WriteLine("EXITING LOOP");
                    break;
                }
                else
                {
                    Console.WriteLine("INVALID INPUT");
                }
            }

            Console.WriteLine("Subject Codes using enum:");
            Console.WriteLine((SubjectCodes)101);
            var course = (SubjectCodes)103;
            Console.WriteLine(course);
        }
    }
}
