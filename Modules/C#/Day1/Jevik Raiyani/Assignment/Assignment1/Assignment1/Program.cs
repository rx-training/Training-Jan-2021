using System;

namespace Assignment1
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] num = new int[100];
            int n;

            Console.Write("Enter total no. of element : ");
            n = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Write {0} numbers: \n", n);
            for (int i = 0; i < n; i++)
            {
                Console.Write("element - {0} :", i+1);
                num[i] = Convert.ToInt32(Console.ReadLine());
            }
            int sum = 0;
            for (int i = 0; i < n; i++)
            {
                if(num[i]%2 == 0)
                {
                    sum += num[i];
                }
            }
            Console.WriteLine("Sum of even is : " + sum);
        }
    }
}
