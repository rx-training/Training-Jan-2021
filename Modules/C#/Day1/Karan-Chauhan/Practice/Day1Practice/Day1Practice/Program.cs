using System;

namespace Day1Practice
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter your name and weight");
            string name = Console.ReadLine();
            int weight = Convert.ToInt32(Console.ReadLine());


            //if else example
            if(weight > 80)
            {
                Console.WriteLine("Overweight - Risk of health!");
            }
            else if(weight > 50 && weight <80)
            {
                Console.WriteLine("Normal weight - No risk of health!");
            }
            else
            {
                Console.WriteLine("Under weight - Please consult doctor!");
            }


            //switch example
            Console.WriteLine("Press 1)Tea 2)Coffee 3)Softdrink 4)None");
            int choice = Convert.ToInt32(Console.ReadKey());
            switch (choice)
            {
                case 1:
                    Console.WriteLine("Your tea is ready!");
                    break;

                case 2:
                    Console.WriteLine("Your coffee is ready!");
                    break;

                case 3:
                    Console.WriteLine("Your softdrink is ready!");
                    break;

                case 4:
                    Console.WriteLine("Your tea is ready!");
                    break;

                default:
                    Console.WriteLine("Invalid Choice!");
                    break;
            }

            //for loop example
            for(int i=0; i<5; i++)
            {
                Console.WriteLine(i);
            }

            //do while
            int j = 0;
            do
            {
                Console.WriteLine("Value of j ;" + j);
                j--;
            }while(j <5);


            //while
            int k = 0;
            while(k < 5)
            {
                Console.WriteLine(k);
                k++;
            }
            Console.ReadKey();
        }
    }
}
