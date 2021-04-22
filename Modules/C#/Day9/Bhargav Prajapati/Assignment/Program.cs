using System;
using System.IO;
using System.Threading.Tasks;
namespace Assignment
{
    class Program
    {
        static readonly string folder = @"C:\Users\Maruti\Desktop\work\C#\Day9\Bhargav Prajapati\Assignment";
        static async Task Main(string[] args)
        {
            try
            {
                string fileonepath = "File1.txt";
                string address = "C-303,Swapnil Heights,Near.108 EMRI Center,AHMEDABAD-382330";
                await File.WriteAllTextAsync(Path.Combine(folder, fileonepath), address);

                if (File.Exists(Path.Combine(folder, fileonepath)) == true)
                {
                    string text1 = await File.ReadAllTextAsync(Path.Combine(folder, fileonepath));
                    string[] spliting = text1.Split(',');
                    string storedata = "";
                    foreach (var item in spliting)
                    {
                        storedata = storedata + item.Trim() + "\n";
                    }
                    Console.WriteLine("Data is Updeted in File 1");

                    string filetwopath = "File2.txt";
                    await File.WriteAllTextAsync(Path.Combine(folder, filetwopath), storedata);
                    Console.WriteLine("Content Are Copied in File 2");

                    if (File.Exists(Path.Combine(folder, fileonepath)) == true)
                    {
                        File.Delete(Path.Combine(folder, fileonepath));
                        Console.WriteLine("Deleted File 1");
                    }
                    else
                    {
                        Console.WriteLine("File 1 is not Present");
                    }

                }
                else
                {
                    Console.WriteLine("File 1 Path is not correct !");
                }
                
             }
            catch(Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }
    }
}
