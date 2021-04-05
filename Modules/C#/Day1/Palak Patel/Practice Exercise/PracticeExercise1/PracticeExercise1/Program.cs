using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PracticeExercise1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!!");
            var myString = "Hey It's my first time in C# !!";
            Console.WriteLine(myString);
            int first = 32;
            double second = 45.62;
            double sum = first + second;
            Console.WriteLine(sum);

            var items = new int[5]; //Declaration of integer type array

            //Accepting Values From User
            for (int i = 0; i < items.Length; i++)
            {
                Console.WriteLine("Enter {0} Value", i+1);
                //Storing Value in Array
                items[i] = Convert.ToInt32(Console.ReadLine());
            }

            //Printing in console
            foreach (var item in items)
            {
                Console.WriteLine("{0}",item);
            }

            var sitems = items.sort
        }
    }
}
