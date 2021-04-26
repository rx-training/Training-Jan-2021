using System;
using System.IO;
using System.Threading.Tasks;

namespace Assign
{
    class Program
    {
        static async Task Main(string[] args)
        {
            try
            {
                var text = File.ReadAllText(@"F:\helo.txt");
                Console.WriteLine("File 1 data:");
                Console.WriteLine(text);

                File.AppendAllText(@"F:\new.txt", contents: text);
                Console.WriteLine("After adding file 1 to file 2... file 2 data is:");
                var File2 = File.ReadAllText(@"F:\new.txt");
                Console.WriteLine(File2);


                File.Delete(@"F:\helo.txt");


                Console.WriteLine("Is old file avaliable");
                bool a = File.Exists(@"F:\helo.txt");
                Console.WriteLine(a);
            }
            catch
            {
                Console.WriteLine("text file is not avaliavel");
                Console.WriteLine("Make helo file in F drive");
            }


        }
    }
}
