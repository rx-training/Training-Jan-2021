using System;
using System.IO;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
namespace Assignment
{
    class Program
    {
        //{ Need to read the text file(content with comma like
        //    address) and write the same text into another folder
        //        after delemiter with comma and after that delete
        //        that old file using async and await. using 
        
        public static async Task CopyFiles(string s1 , string s2)
        {
            Task<string> task = Copyfile(s1, s2);
            String result = await task;
            Console.WriteLine("deleting old file");
            deleteFile(result);
            Console.WriteLine("Old file deleted");
        }
    static async Task<string>  Copyfile(string s1, string s2)
        {
            string path = s1;
            string path2 = s2;
            if (File.Exists(s1)) { Console.WriteLine("found"); }
            using (StreamReader sr = File.OpenText(path))
            {
                string s = " ";
                Console.WriteLine("Copy started");
                while ((s = sr.ReadLine()) != null)
                {
                    using (FileStream fs = File.Create(path2))
                    {
                        byte[] info = new UTF8Encoding(true).GetBytes(s);
                        fs.Write(info, 0, info.Length);
                        Thread.Sleep(3000);
                    }


                }
                await Task.Delay(10000);

            }
            Console.WriteLine("Copy successfull");
            
            return path;
           
            
        }
        public static void deleteFile(string old)
        {
            if (File.Exists(old))
            {
                Task.Delay(5000);
                File.Delete(old);
            }
        }
        static async Task  Main(string[] args)
        {       
            //before executing the progaramm create a file specified inthis path to copy it
            string path = @"C:\Users\tirth\Desktop\Mytest.txt";
            string path2 = @"C:\Users\tirth\Desktop\Mytest(copy).txt";
          await CopyFiles(path, path2);











        }


    }
}

