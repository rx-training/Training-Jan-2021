using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace Assignment
{
    public static class ReadWriteFile
    {
        public static async Task<string> ReadFileAsync(string filePath)
        {
            var stringBuilder = new StringBuilder();
            using (var fileStream = File.OpenRead(filePath))
            using(var streamReader = new StreamReader(fileStream))
            {
                string line = await streamReader.ReadLineAsync();
                while (line != null)
                {
                    stringBuilder.AppendLine(line);
                    line = await streamReader.ReadLineAsync();
                }
                return stringBuilder.ToString();
            }
        }

        public static async Task WriteFileAsync(string dir, string file, string content)
        {
            Console.WriteLine("Async Wite File has started....");
            using (StreamWriter outputFile = new StreamWriter(Path.Combine(dir, file)))
            {
                await outputFile.WriteAsync(content);
            }
            Console.WriteLine("Async Write file has completed.");
        }
    }
}
