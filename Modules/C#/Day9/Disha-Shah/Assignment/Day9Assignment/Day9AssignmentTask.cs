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
            try
            {
                string filePath1 = "File1.txt";
                string data = "Address:\nA - 14, Ghanshyam Nagar Society, Opp.Nilkanth Mahadev Temple, Nr.Someshwar Soc-4, Ranip, Ahmedabad";
                await File.WriteAllTextAsync(Path.Combine(rootFolder, filePath1), data);

                if (File.Exists(Path.Combine(rootFolder, filePath1)) != false)
                {
                    string text1 = await File.ReadAllTextAsync(Path.Combine(rootFolder, filePath1));
                    string[] text2 = text1.Split(',', StringSplitOptions.RemoveEmptyEntries);
                    string text3 = "";

                    foreach (var item in text2)
                    {
                        text3 += item.Trim() + "\n";
                    }
                    
                    Console.WriteLine("Modified content from File1:");
                    Console.WriteLine(text3);

                    string filePath2 = "File2.txt";
                    await File.WriteAllTextAsync(Path.Combine(rootFolder, filePath2), text3);
                    Console.WriteLine("Copied content to File2 successfully!");

                    Console.WriteLine();
                    File.Delete(Path.Combine(rootFolder, filePath1));
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
    }
}
