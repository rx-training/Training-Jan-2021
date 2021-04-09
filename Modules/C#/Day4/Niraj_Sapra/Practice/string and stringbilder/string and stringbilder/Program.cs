using System;
using System.Text;

namespace string_and_stringbilder
{
    class Program
    {
        static void Main(string[] args)
        {
            string ab = "hello niraj";
            Console.WriteLine(ab);
            ab = ab+"you learn .net";
            Console.WriteLine(ab);

            StringBuilder sb = new StringBuilder();
            sb.Append("Hello ");
            sb.AppendLine("World!");
            sb.AppendLine("Hello C#");
            Console.WriteLine(sb);



            //assigns default value 01/01/0001 00:00:00
            DateTime dt1 = new DateTime();
            Console.WriteLine(dt1);

            //assign year, month, day
            DateTime dt2 = new DateTime(2015, 12, 31);
            Console.WriteLine(dt2);

            //assign year, month, day, hour, min, seconds
            DateTime dt3 = new DateTime(2015, 12, 31, 5, 10, 20);
            Console.WriteLine(dt3);

            
        }
    }
}
