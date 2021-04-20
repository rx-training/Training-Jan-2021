using System;
using System.IO;
using System.Threading.Tasks;

namespace Day9Assignment
{
    class Day9AssignmentTask
    {
        static readonly string rootFolder = @"D:\Disha-Shah\Training-Jan-2021\Modules\C#\Day9\Disha-Shah\Assignment\Day9Assignment";

        static async Task Main(string[] args)
        {
            Day9AssignmentTask day9Assignment = new Day9AssignmentTask();
            await day9Assignment.FileOperations();
            
        }

        public async Task FileOperations()
        {
            try
            {
                string filePath1 = "File1.txt";
                string data = "Address:\nA - 14, Ghanshyam Nagar Society, Opp.Nilkanth Mahadev Temple, Nr.Someshwar Soc-4, Ranip, Ahmedabad";
                await File.WriteAllTextAsync(Path.Combine(rootFolder, filePath1), data);

                if (File.Exists(Path.Combine(rootFolder, filePath1)) != false)
                {
                    string text3 = await ReadFile(filePath1);
                    
                    Console.WriteLine("Modified content from File1:");
                    Console.WriteLine(text3);

                    await WriteFile(text3);
                    Console.WriteLine("Copied content to File2 successfully!");

                    Console.WriteLine();

                    await DeleteFile(filePath1);
                    Console.WriteLine("File deleted successfully!");

                    Console.WriteLine();
                    if (File.Exists(Path.Combine(rootFolder, filePath1)) == false)
                    {
                        Console.WriteLine("File is not present");
                    }

                }
                else
                {
                    Console.WriteLine($"file not found: {Path.Combine(rootFolder, filePath1)}");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        public async Task<string> ReadFile(string filePath1)
        {
            try
            {

                string text1 = await File.ReadAllTextAsync(Path.Combine(rootFolder, filePath1));
                string[] text2 = text1.Split(',', StringSplitOptions.RemoveEmptyEntries);
                string text3 = "";

                foreach (var item in text2)
                {
                    text3 += item.Trim() + "\n";
                }

                return text3;
            }
            catch(Exception e)
            {
                Console.WriteLine(e.Message);
                return "";
            }
        }

        public async Task WriteFile(string text3)
        {
            try
            {
                string filePath2 = "File2.txt";
                await File.WriteAllTextAsync(Path.Combine(rootFolder, filePath2), text3);
            }
            catch(Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }

        public async Task DeleteFile(string filePath1)
        {
            try
            {
                File.Delete(Path.Combine(rootFolder, filePath1));
            }
            catch(Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }
    }
}
