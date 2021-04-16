using System;
using System.Threading.Tasks;
using System.Text;



namespace Assignment
{
    class Program
    {
        static async Task Main(string[] args)
        {
            string text = await ReadWriteFile.ReadFileAsync("E:\\Palak Patel\\Training-Jan-2021\\Modules\\C#\\Day9\\Palak Patel\\Assignment\\Assignment\\Assignment\\TextFile1.txt");
            //Console.WriteLine(text);
            string dirPath = Environment.GetFolderPath(Environment.SpecialFolder.Desktop);
            string fileName = "file.txt";

            

            Task asyncTask = ReadWriteFile.WriteFileAsync(dirPath, fileName, text);
        }

        
    }
}
