using System;
using System.Data;

namespace Assignment4
{
    class Program
    {

        static void Main(string[] args)
        {            
            Console.WriteLine("Enter the 10 student detail \n");

            string[] name = new string[10];
            string[] address = new string[10];
            int[] hindi = new int[10];
            int[] english = new int[10];
            int[] maths = new int[10];
            

            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine($"Enter Detail of Student {i + 1} : ");
                Console.Write("Name      : ");
                name[i] = Console.ReadLine();
                Console.Write("Address   : ");
                address[i] = Console.ReadLine();
                Console.WriteLine("Marks : ");
                Console.Write("  Hindi   : ");
                hindi[i] = int.Parse(Console.ReadLine());
                Console.Write("  English : ");
                english[i] = int.Parse(Console.ReadLine());
                Console.Write("  Maths   : ");
                maths[i] = int.Parse(Console.ReadLine());
                Console.Write("\n");
            }

            int[] total = new int[10];
            int[] tatalforgrade = new int[10];

            for (int i = 0; i < 10; i++)
            {
                total[i] = maths[i] + english[i] + hindi[i];
                tatalforgrade[i] = total[i] / 3; 
            }

            string[] grade = new string[10];


            for (int i = 0; i < 10; i++)
            {
                if(tatalforgrade[i] > 90)
                {
                    grade[i] = "A";
                }
                else if (tatalforgrade[i] > 70)
                {
                    grade[i] = "B";
                }
                else if (tatalforgrade[i] > 50)
                {
                    grade[i] = "C";
                }
                else if (tatalforgrade[i] > 35)
                {
                    grade[i] = "D";
                }
                else
                {
                    grade[i] = "F";
                }
            }
           

            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine(" {0}  {1}  {2}  {3}  {4}  {5}  {6}",
                    name[i], address[i], hindi[i], english[i], maths[i], total[i], grade[i]);
            }

        }
    }
}
