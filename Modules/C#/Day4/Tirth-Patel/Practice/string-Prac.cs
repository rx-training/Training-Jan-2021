using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.Runtime;


namespace Practice
{
    class string_Prac
    {
      public string_Prac()
        {
            string s1 = @"this \ is escaped character";
            Console.WriteLine(s1);
            char[] chars = { 'h', 'e', 'l', 'l', 'o' };
            sbyte[] bytes = { 0x41, 0x42 };
            string s2 = new string(chars);
            Console.WriteLine(s2);
            string date  = "today is " + DateTime.Now.ToString("D") + ".";

            date += DateTime.UtcNow.ToString("t");
            Console.WriteLine(date);
            int start = s1.IndexOf("",7);
            string s3 = s1.Substring(start,5);
            Console.WriteLine(s3);
            Console.WriteLine(start);
            DateTime dateandTime = new DateTime(2011, 7, 6, 7, 32, 0);
            double temp = 88.2;
            string result = string.Format("At {0:t} on {0:D}, the temprature was {1:F1} degrees Fahrenheit", dateandTime, temp);
            Console.WriteLine(result);
            string first = "hello";
            string second = "HELLO";
            Console.WriteLine(String.Compare(first, second));
            Console.WriteLine((String.Compare(first, second,false)) == 0 ? "true" :"False");

            Console.WriteLine(second.ToLower());
            Console.WriteLine(first.Equals(second));
            String stringUpper = "\x0041\x0042\x0043";
            String stringLower = "\x0061\x0062\x0063";
            Console.WriteLine("The Strings are equal when case is ignored? {0}",
                String.Compare(stringUpper, stringLower, true) == 0
                               ? "true" : "false");
            string s = (String)second.Clone();
            Console.WriteLine(s);



        }
        
        
            
        
    }
}
