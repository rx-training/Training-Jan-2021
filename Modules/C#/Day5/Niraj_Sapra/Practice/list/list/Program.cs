using System;
using System.Collections.Generic;
namespace list
{
    class Program
    {
        
        static void Main(string[] args)
        {
            // Create a list which will store 5 student names and then display it search it index number
            List<string> studentlist = new List<string>() { "niraj", "charmi", "palak", "tirth", "namra"};

            studentlist.Insert(1, "nill");
            Console.WriteLine(studentlist[0]);
            Console.WriteLine("Hello World!");

            for (int i= 0;i < studentlist.Count;i++)
            {
                Console.WriteLine(studentlist[i]);
            }

            // Create a stack which will store Age of person and display it last in first out order.
            int[] arr = new int[] { 1, 2, 3, 4 };
            Stack<int> agestack = new Stack<int>(arr);
            agestack.Push(18);

            foreach (var item in agestack)
                Console.Write(item + ",");

        }
    }
}
