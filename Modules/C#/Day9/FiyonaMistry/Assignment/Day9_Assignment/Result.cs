using System;
using System.IO;
using System.Threading.Tasks;

namespace Day9_Assignment
{
    public class Result
    {
        public static async Task<Result> WriteAsync(string[] val, string newP)
        {
            Console.WriteLine("Writing into file...");
            await Task.Delay(2000);

            for (int i = 0; i < val.Length; i++)
            {
                Console.WriteLine(val[i]);
                using (StreamWriter sw = File.AppendText(newP))
                {
                    sw.WriteLine(val[i]);
                }
            }
            return new Result();
        }
    }
}