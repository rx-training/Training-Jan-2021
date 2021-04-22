using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Day9
{
    class Day9Assignment
    {
        static async Task Main(string[] args)
        {
            await ReadFile();
        }

        public static async Task ReadFile()
        {
            var task = Task.Run (()=> fileRead());
            Console.WriteLine("Reading file.......");
            Console.WriteLine("--------------------------------------------------------------------------------------------------------------------------------------\n");
            Console.WriteLine("Getting Data from file....");
            Thread.Sleep(1000);
            var str = await task;

            Console.WriteLine("Printing Data \n");
            Thread.Sleep(2000);
            Console.WriteLine(str);
            Console.WriteLine("\nCompleted successfully.....\n");
           
            Console.WriteLine("Deleting file....\n");
            var task1 = Task.Run(() => DeleteFile());
            bool status = await task1;
            if (status == true)
            {
                Console.WriteLine("Deleted successfully...");
            }
            else
            {
                Console.WriteLine("File is not found...");
            }
            Console.WriteLine("Process is completed now...");
        }
        public static string fileRead()
        {
            try
            {

                if (File.Exists(@"G:\Day\C#\Day9\Namra\Day9\Day9Assignment.txt") == true)
                {
                    Thread.Sleep(3000);
                    FileInfo fi = new FileInfo(@"G:\Day\C#\Day9\Namra\Day9\Day9Assignment.txt");
                    FileStream fs = fi.Open(FileMode.OpenOrCreate, FileAccess.Read, FileShare.Read);
                    StreamReader sr = new StreamReader(fs);

                    string str = sr.ReadToEnd();

                    sr.Close();
                    fs.Close();
                    return str;
                }
                else
                {
                    throw new Exception("File is not found");
                }
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }
        public static bool DeleteFile()
        {
            try
            {
                if(File.Exists(@"G:\Day\C#\Day9\Namra\Day9\Day9Assignment.txt") == true)
                {
                    Thread.Sleep(6000);
                    File.Delete(@"G:\Day\C#\Day9\Namra\Day9\Day9Assignment.txt");
                    return true;
                }
                else
                {
                    throw new Exception();
                }
            }
            catch (Exception)
            {
                return false;
            }

        }

    }
}
