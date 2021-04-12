using System;

namespace Day6Assignment
{
    class Day6Assignment
    {
        delegate void Add(int num1, int num2);
        static void Main(string[] args)
        {
            //Compute area of rectangle using func delegate

            var AreaRectangle = new Func<int, int, string>((int length, int height) => {
                if (length == 0 || height == 0)
                {
                    return $"Please enter valid length or height";
                }

                return $"Length and height of rectangle are {length}, {height} respectively and area is {length * height}";
            });

            Console.WriteLine($"Enter a length and a height of rectangle respectively");
            int lenght = Convert.ToInt32(Console.ReadLine());
            int height = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine(AreaRectangle(lenght, height));

            //Compute add of two number using lambda expression

            var AddNumbers = new Add((int num1, int num2) => {
                Console.WriteLine($"Addition of two number {num1} and {num2} is {num2 + num1}");
            });

            Console.WriteLine($"-----------------------------------------------------------------------------------------------------");

            Console.WriteLine($"-----------------------------------------------------------------------------------------------------");

            Console.WriteLine($"Enter two number to perform addition of them");
            int num1 = Convert.ToInt32(Console.ReadLine());
            int num2 = Convert.ToInt32(Console.ReadLine());
            AddNumbers(num1, num2);
        }
    }
}
