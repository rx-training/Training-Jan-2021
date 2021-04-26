using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace Assignment
{
    class Program
    {
        static async Task Main(string[] args)
        {
            try
            {
                string fullPath = Path.Combine(@"W:\RADIXWEB\Training-Jan-2021\Modules\C#\Day9\Milit-Panchasara\Assignment", "inputData.txt");

                // Check input file exists or not
                if (!File.Exists(fullPath))
                {
                    Console.WriteLine("File not exist!");
                    return;
                }
                else
                {
                    Console.WriteLine("Reading file.");
                    string data = await File.ReadAllTextAsync(fullPath);
                    Console.WriteLine("Read successfully.");
                    if (String.IsNullOrWhiteSpace(data))
                    {
                        Console.WriteLine("Input file is empty.");
                        return;
                    }

                    List<string> cityList = new List<string>();
                    cityList.AddRange(data.Split(","));

                    for (int i = 0; i < cityList.Count; i++)
                    {
                        cityList[i] = cityList[i].Trim();
                    }

                    // Do process on data
                    cityList.Reverse();
                    var outData = String.Join(", ", cityList);

                    string outputDir = Path.Combine(@"W:\RADIXWEB\Training-Jan-2021\Modules\C#\Day9\Milit-Panchasara\Assignment", "outputCSharpDay9");
                    string outputFile = Path.Combine(outputDir, "output.txt");

                    Console.WriteLine("Writing into file.");

                    // Check output Directory exists or not
                    if (Directory.Exists(outputDir))
                    {
                        // creates or overwrites file
                        await File.WriteAllTextAsync(outputFile, outData);
                    }
                    else
                    {
                        // creates directory
                        Directory.CreateDirectory(outputDir);
                        await File.WriteAllTextAsync(outputFile, outData);
                    }
                    Console.WriteLine("Write completed successfully.");

                    // Delete file after process
                    Console.WriteLine("Deleting input file.");
                    await Task.Run(() => File.Delete(fullPath));
                    Console.WriteLine("File deleted successfully.");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error Occured: {ex.Message}");
                return;
            }
        }

    }
}
