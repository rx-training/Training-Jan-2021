using System;

namespace Day6Assignment
{
    class Day6AssignmentTasks
    {
        static void Main(string[] args)
        {
            // Q. Compute area of rectangle using func delegate

            // Q. Compute add of two number using lambda expression
            Day6AssignmentTasks day6AssignmentTasks = new Day6AssignmentTasks();
            bool moreChoice = true;
            while(moreChoice)
            {
                
                Console.WriteLine("Enter Number 1:");
                int num1 = Convert.ToInt32(Console.ReadLine());

                Console.WriteLine("Enter Number 2:");
                int num2 = Convert.ToInt32(Console.ReadLine());

                Console.WriteLine("Choose from below given options");
                Console.WriteLine("f: Find Area of Rectangle using func delegate");
                Console.WriteLine("l: Addition of two numbers using lambda expression");
                Console.WriteLine("Enter your choice:");
                char choice = Convert.ToChar(Console.ReadLine());
                switch(choice)
                {
                    case 'f':
                        day6AssignmentTasks.FuncRectangle(num1, num2);
                        break;
                    case 'l':
                        day6AssignmentTasks.LambdaAdd(num1, num2);
                        break;
                    default:
                        Console.WriteLine("Please enter correct choice");
                        break;
                }

                Console.WriteLine("Want to perform more actions? (Y/N)");
                char action = Convert.ToChar(Console.ReadLine());

                if(action=='Y')
                {
                    moreChoice = true;
                }
                else
                {
                    moreChoice = false;
                }
            }
        }

        public void FuncRectangle(int num1, int num2)
        {
            Func<int, int, int> calc = delegate (int a, int b)
            { return a * b; };

            Console.WriteLine($"Area of Rectangle {num1} and {num2} is: {calc(num1, num2)}");

        }

        public void LambdaAdd(int num1, int num2)
        {
            Func<int, int, int> calc = (a, b) =>
            { 
                return a + b; 
            };

            Console.WriteLine($"Addition of numbers {num1} and {num2} is: {calc(num1, num2)}");

        }
    }
}
