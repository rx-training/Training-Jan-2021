using System;
using System.Collections.Generic;
using System.Text;

namespace Practice
{
    class string_methods
    {
        public string_methods()
        {
            String str1 = "machine  ";
            String str2 = "device";
            string str;
            int result;
            Console.WriteLine("First String = {0},second string={1}", str1, str2);
            //to compare some portion of strings with eachother
            //also able to comapre compare capitalized or non capitalized
            result = String.Compare(str1, 2, str2, 0, 2);
            str = ((result < 0) ? "less than" : ((result > 0) ? "greater than" : "equal to"));
            Console.WriteLine(str1.Length);
            string trim = "  this string has single short sentences.  ";
            int nWords = 0 ;
            trim = trim.Trim();//removes extra spces before and after the sentence
            Console.WriteLine(trim);
            for (int i = 0; i < trim.Length; i++)
            {
                if (Char.IsPunctuation(trim[i]) | char.IsWhiteSpace(trim[i]))
                    nWords++;
            }
            Console.WriteLine("The senetece: {0} Has {1} words",trim,nWords);
            string nulll = "";
            int len = nulll.Length;
            Console.WriteLine(len);
            Console.WriteLine(nulll.Contains('h'));
            Decimal pricePerOunce = 17.36m;
            String s = String.Format("The current    price  is {0:C1} per ounce.",
                                     pricePerOunce);
            Console.WriteLine(s);
            string index = "Hello this is Tirth";
            Console.WriteLine(index.IndexOf("Tirth"));
            Console.WriteLine( index.Insert(index.Length, " From Radix"));
            char[] c = new char[] { 'A', 'B' };
            index += String.Join("", c);
            Console.WriteLine(index);
            //orginal string
            Console.WriteLine(index);
            //substring of from 5 to end
            Console.WriteLine(index.Substring(5));
            //substring from 1 to 5 index
            Console.WriteLine(index.Substring(1,5));
             index = "Hello this is Tirth";
            index = index.Replace("tirth", "m4ddy",StringComparison.InvariantCultureIgnoreCase);
            Console.WriteLine(index);
           string []n1= index.Split(default(char[]), 20,StringSplitOptions.RemoveEmptyEntries);
            Console.WriteLine(n1);
        }
    }
}
