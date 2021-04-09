using System;

namespace Practice3
{
    class Program
    {
        //Switch case statement
        static void Main(string[] args)
        {
            int x = 20;
            int y = 30;
            if(x > y)
            {
                Console.WriteLine("X is greater than y");
            }
            else
            {
                Console.WriteLine("Y is greater than x");
            }

            int id = 2;
            switch(id)
            {
                case 1:
                    Console.WriteLine("Red");
                    break;
                case 2:
                    Console.WriteLine("Black");
                    break;
                case 3:
                    Console.WriteLine("Yellow");
                    break;
                case 4:
                    Console.WriteLine("Gereen");
                    break;
            }
        }
    }
}
