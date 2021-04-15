using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
/*Need to read the text file (content with comma like address) and write the same text into another
* folder after delemiter 
* with comma and after that delete that old file using async and await. using system.io namespace*/
namespace Assignment
{
    class Program
    {
        
        static async Task Main(string[] args)
        {

            string FilePath = "TextFile1.txt";
            string file = "10, XYZ Appartment,Near XYZ Bunglows,Thaltej,Ahmedabad."+"\n"+
            "10, XYZ Appartment, Near XYZ Bunglows, Thaltej, Ahmedabad." + "\n" +
            "10, XYZ Appartment, Near XYZ Bunglows, Thaltej, Ahmedabad." + "\n" +
            "10, XYZ Appartment, Near XYZ Bunglows, Thaltej, Ahmedabad." + "\n" +
            "10, XYZ Appartment, Near XYZ Bunglows, Thaltej, Ahmedabad." + "\n" +
            "10, XYZ Appartment, Near XYZ Bunglows, Thaltej, Ahmedabad." + "\n" +
            "10, XYZ Appartment, Near XYZ Bunglows, Thaltej, Ahmedabad." + "\n" +
            "10, XYZ Appartment, Near XYZ Bunglows, Thaltej, Ahmedabad." + "\n" +
            "10, XYZ Appartment, Near XYZ Bunglows, Thaltej, Ahmedabad.";
            File.WriteAllText(FilePath, file);
            string FilePath2 = "TextFile2.txt";
            await Insert(FilePath,FilePath2);
            
        }
        public static async Task Insert(string FilePath, string FilePath2)
        {
            
            string[] lines = File.ReadAllLines(FilePath);
            foreach (string str in lines)
            {
                Console.WriteLine(str);
            }
            string s1 = null;
            for (int j = 0; j < lines.Length; j++)
            {
                string[] str11 = lines[j].Split(',');

                foreach (string s in str11)
                {
                    s1 = s1 + s + "\n";
                }
            }
            File.WriteAllText(FilePath2, s1);
            Console.WriteLine(s1);
            await Delete(FilePath);
        }
            public static async Task Delete( string FilePath)
            {
                File.Delete(FilePath);
            }
            
        }
}
