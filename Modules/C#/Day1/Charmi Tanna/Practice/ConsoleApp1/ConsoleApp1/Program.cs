using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            //for loop and arrays and variables
            int num1 = 10;
            string str = "abc";
            float x = 10.0f;
            int i = 0;
            double num3 = 10.04;
            bool val = true;
            //Single dimension array
            string[] colours = { "Red", "Yellow", "Green", "Orange" };
            colours[3] = "White";
            Console.WriteLine(colours[3]);
            Console.WriteLine(colours.Length);
            for(i =0;i<colours.Length;i++)
            {
                Console.WriteLine(colours[i]);
            }
            //Multi dimension array
            string[,] array1 = new string [2,2];
            for(i = 0;i<2;i++)
            {
                Console.WriteLine("Enter your First Name");
                array1[i,0] = Console.ReadLine();
                Console.WriteLine("Enter your Last Name");
                array1[i, 1] = Console.ReadLine();
            }
            for (i = 0; i < 2; i++)
            {
                Console.WriteLine($"Firstname \t{array1[i,0]},Lastname \t{array1[i,1]}");
            }
            //Jagged arrays
            int[][] jaggedArray = new int[3][];
            jaggedArray[0] = new int[5];
            jaggedArray[1] = new int[4];
            jaggedArray[2] = new int[2];
            jaggedArray[0] = new int[] { 1, 3, 5, 7, 9 };
            jaggedArray[1] = new int[] { 0, 2, 4, 6 };
            jaggedArray[2] = new int[] { 11, 22 };
            for (int n = 0; n < jaggedArray.Length; n++)
            {

                // Print the row number
                System.Console.Write("Row({0}): ", n);

                for (int k = 0; k < jaggedArray[n].Length; k++)
                {

                    // Print the elements in the row
                    System.Console.Write("{0} ", jaggedArray[n][k]);
                }
                System.Console.WriteLine();
            }
            //While loop 
            i= 0;
            while(i<10)
            {
                Console.WriteLine(i);
                i++;
            }
            //for each loop
            string[] colors = {"Orange","yellow","Red"};
            foreach (string s in colors)
            {
                Console.WriteLine(s);
            }
        }
    }
}
