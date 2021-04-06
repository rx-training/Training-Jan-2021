using System;

namespace Assignment1
{
    class Program
    {
        static void Main(string[] args)
        {
            int num1 = 10;
            int sum = 0;
            for(int i= 0;i<=num1;i++)
            {
                if(i % 2 == 0)
                {
                    sum = sum + i;
                }
            }
            Console.WriteLine(sum);
        }
    }
}
