using System;

namespace Assignment4
{
    class Program
    {
        static void Main(string[] args)
        {
            int[,] array1 = new int[10, 4];
            string[,] array2 = new string[10,3];
            for(int i = 0;i<10;i++)
            {
                Console.WriteLine("Enter your Name");
                array2[i,0]= Console.ReadLine();
                Console.WriteLine("Enter your Address");
                array2[i, 1] = Console.ReadLine();
                Console.WriteLine("Enter your marks of hindi");
                array1[i, 0] = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("Enter your marks of english");
                array1[i, 1] = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("Enter your marks of maths");
                array1[i, 2] = Convert.ToInt32(Console.ReadLine());
                array1[i, 3] = array1[i,0] + array1[i,1] + array1[i,2];
                if(array1[i,3]>=250)
                {
                    array2[i, 2] = "A";
                }
                else if (array1[i, 3] >= 150)
                {
                    array2[i, 2] = "B";
                }
                else
                {
                    array2[i, 2] = "c";
                }
            }
            for (int i = 0; i < 1; i++)
            {
                Console.Write("\b Name");
                Console.Write("\b Address");
                Console.Write("\bHindi Marks");
                Console.Write("\bEnglish Marks");
                Console.Write("\bMaths Marks");
                Console.Write("\bTotal");
                Console.Write("\bGrade");
                Console.WriteLine();
            }
            for (int i =0;i<10;i++)
            {
                Console.Write("\t"+array2[i,0]);
                Console.Write("\t" +array2[i, 1]);
                Console.Write("\t" + array1[i, 0]);
                Console.Write("\t" + array1[i, 1]);
                Console.Write("\t" + array1[i, 2]);
                Console.Write("\t" + array1[i, 3]);
                Console.Write("\t" + array2[i, 2]);
                Console.WriteLine();
            }
        }
    }
}
