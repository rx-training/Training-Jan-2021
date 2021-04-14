using System;
using System.IO;
using System.Threading.Tasks;

namespace Day9_Assignment
{
    public class Split
    {
        public static async Task<Split> StrSplit(string str)
        {
            string[] values = str.Split(',');

            string newPath = @"C:\Users\fiyon\source\repos\Assignments\Day9_Assignment\nexText.txt";

            Console.WriteLine("Separating delimeters with comma...");

            await Result.WriteAsync(values, newPath);

            return new Split();
        }
    }
}