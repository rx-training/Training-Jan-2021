using System;
using System.IO;
using System.Threading.Tasks;

namespace Day9_Assignment
{
    class Day9
    {
        static async Task Main(string[] args)
        {
            string oldPath = @"C:\Users\fiyon\source\repos\Assignments\Day9_Assignment\txt.txt";

            await Read.ReadAsync(oldPath);
            await DeleteAsync(oldPath);
        }

        public static async Task DeleteAsync(string oldP)
        {
            Console.WriteLine("Deleting old file...");
            await Task.Delay(2000);
            File.Delete(oldP);
            Console.WriteLine("File deleted");
        }
    }
}
