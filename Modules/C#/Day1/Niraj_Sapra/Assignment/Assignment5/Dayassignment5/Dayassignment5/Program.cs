using System;

namespace Dayassignment5
{
    class Program
    {
        static void Main(string[] args)
        {
            int[,] studentarr = new int[10, 4];
            string [,] gradearr = new string[10, 3];
            for(int i=0; i < 2; i++)
            {
                Console.WriteLine("enter studentname");
                gradearr[i, 0] = Console.ReadLine();
                Console.WriteLine("enter student Address");
                gradearr[i, 1] = Console.ReadLine();
                Console.WriteLine("enter your english");
                studentarr[i, 0] = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("enter student hindi");
                studentarr[i, 1] = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("enter student Maths");
                studentarr[i, 2] = Convert.ToInt32(Console.ReadLine());
                studentarr[i, 3] = studentarr[i, 0] + studentarr[i, 1] + studentarr[i, 2];
                if (studentarr[i, 3] >= 260)
                {
                    gradearr[i, 2] = "AA";
                }
                else if(studentarr[i, 3] >= 220)
                {
                    gradearr[i, 2] = "BB";
                }
                else if (studentarr[i, 3] >= 180)
                {
                    gradearr[i, 2] = "CC";
                }
                else if (studentarr[i, 3] >= 140)
                {
                    gradearr[i, 2] = "DD";
                }
                else if (studentarr[i, 3] >= 100)
                {
                    gradearr[i, 2] = "pass";
                }
                else
                {
                    gradearr[i, 2] = "fail";
                }
            }
            for (int i=0;i<1;i++)
            {
                Console.WriteLine("\b Stu Name");
                Console.WriteLine("\b Stu Address");
                Console.WriteLine("\b Stu English");
                Console.WriteLine("\b Stu hindi");
                Console.WriteLine("\b Stu Math");
                Console.WriteLine("\b Stu Total");
                Console.WriteLine("\b Stu Grade");
                Console.WriteLine();
            }
            for (int i = 0; i < 2; i++)
            {
                Console.WriteLine("\t"+gradearr[i,0]);
                Console.WriteLine("\t" + gradearr[i, 1]);
                Console.WriteLine("\t" + studentarr[i, 0]);
                Console.WriteLine("\t" + studentarr[i, 1]);
                Console.WriteLine("\t" + studentarr[i, 2]);
                Console.WriteLine("\t" + studentarr[i, 3]);
                Console.WriteLine("\t" + gradearr[i, 2]);
                Console.WriteLine();
            }
        }
    }
}
