using System;
using System.IO;
using System.Threading.Tasks;

namespace Day9_Assignment
{
    public class Read
    {
        public static async Task<Read> ReadAsync(string oldP)
        {
            Console.WriteLine("Opening File...");
            if (!File.Exists(oldP))
            {
                using (StreamWriter sw = File.CreateText(oldP))
                {
                    sw.WriteLine("86,Sanidhya A/5,Sector 3A/B");
                    sw.WriteLine("ATPL,Behind Trimandir,Adalaj");
                    sw.WriteLine("Gandhinagar");
                }
            }

            using (StreamReader sr = File.OpenText(oldP))
            {
                Console.WriteLine("Reading from file...");

                string s;
                while ((s = sr.ReadLine()) != null)
                {
                    await Split.StrSplit(s);
                }
            }
            return new Read();
        }
    }
}