using System;
using System.Collections.Generic;
using System.Text;

namespace Test
{
    class IQ
    {
        public static void main(string[] args)
        {
            Console.WriteLine("Enter Number of attempts: ");
            int attempts = Convert.ToInt32(Console.ReadLine());

            if (attempts > 1)
            {
                Console.WriteLine("You can not attempt the test more than 2 times");
                
            }
            else
            {
                while (true) { 

                    Console.WriteLine("Enter 1 for Apptitute");
                    Console.WriteLine("Enter 2 for GK");
                    Console.WriteLine("Enter 3 for Maths");
                    Console.WriteLine("Enter 4 to exit");
                }
            }
        }
    }
}
