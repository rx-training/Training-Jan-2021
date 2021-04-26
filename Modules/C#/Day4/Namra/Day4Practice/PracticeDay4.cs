using System;
using System.Globalization;
using System.IO;
using System.Text;

namespace Day4Practice
{
    class PracticeDay4
    {
        static void Main(string[] args)
        {
            string string1 = "this is a string ";
            Console.WriteLine(string1);
            string string2 = "thepath is  c:\\public\\report";
            Console.WriteLine(string2);
            string string3 = @"The path is c:\public\report";
            Console.WriteLine(string3);

            char[] chars = { 'w', 'o', 'r', 'd' };
            sbyte[] bytes = { 0x41, 0x42, 0x43, 0x44, 0x45, 0x00 };

            // created a string from a character arrray
            string string4 = new string(chars);
            Console.WriteLine(string4);

            string string5 = new string('c', 20);
            Console.WriteLine(string5);

            string stringFromBytes = null;
            string stringFromChars = null;

            unsafe
            {
                fixed (sbyte* pbytes = bytes)
                {
                    // Create a string from a pointer to a signed byte array
                    stringFromBytes = new string(pbytes);
                }
                fixed (char* pchars = chars)
                {
                    // Create a string from a pointer to a character array
                    stringFromChars = new string(pchars);
                }
            }
            Console.WriteLine(stringFromBytes);
            Console.WriteLine(stringFromChars);

            string string6 = "Today is " + DateTime.Now.ToString("D") + ".";
            Console.WriteLine(string6);

            string string7 = "This is one sentence. " + "This is a second. ";
            string7 += "This is a third sentence";
            Console.WriteLine(string7);

            Console.WriteLine();
            string string8 = "This sentence has five words";
            // Extract the second word
            int startPosition = string8.IndexOf(" ") + 1;
            string word2 = string8.Substring(startPosition, string8.IndexOf(" ", startPosition) - startPosition);
            Console.WriteLine("Second word : " + word2);

            DateTime dateAndTime = new DateTime(2011, 7, 6, 7, 32, 0);
            double temperature = 68.3;
            string result = String.Format("At {0:t} on {0:D}, the temperature was {1:F1} degrees Fahrenhit.",
                dateAndTime, temperature);
            Console.WriteLine(result);

            //StreamWriter sw = new StreamWriter(@".\graphemes.txt");
            //string grapheme = "\u0061\u0308";
            //sw.WriteLine(grapheme);

            string string9 = "hello how r u?";
            Console.WriteLine(string9.Length);
            Console.WriteLine(string9.ToUpper());
            Console.WriteLine(string9.ToLower());
            //startsWith to check whether string starts with a string or not
            Console.WriteLine("Hello Namra".StartsWith("Hello"));
            Console.WriteLine("Hello Namra".StartsWith("Namra"));


            Console.WriteLine($"Hello @ contains @? {"Hello @".Contains("@")}");
            Console.WriteLine($"Hello @ index of @? {"Hello @".IndexOf("@")}");
            Console.WriteLine($"Hello @@@  last index of @? {"Hello @".LastIndexOf("@")}");

            string s1 = "This string consists of a single short sentence.";
            int nWords = 0;

            s1 = s1.Trim();
            foreach (var ch in s1)
            {
                if (Char.IsPunctuation(ch) | Char.IsWhiteSpace(ch))
                    nWords++;
            }
            Console.WriteLine("The sentence\n   {0}\nhas {1} words.",
                              s1, nWords);
            string st2;
            //if( st2 == null || st2.Equals(String.Empty))
            //{
            //    Console.WriteLine("s2 is null");
            //}

            StringBuilder s = new StringBuilder(20);// can hold max 20 charcter
            StringBuilder str = new StringBuilder("Default string", 20);
            //str.Append("One");
            str.AppendLine("two");
            str.Append("Three");// add in new line
            Console.WriteLine(str);
            StringBuilder str2 = new StringBuilder("Your total amount ");
            str2.AppendFormat("{0:C}", 50);
            Console.WriteLine(str2);
            str2.Insert(5, "final ");
            Console.WriteLine(str2);
            str2.Remove(5, 12);
            Console.WriteLine(str2);
            str2.Replace("Your", "Its yours");
            Console.WriteLine(str2);

            Console.WriteLine("Namra".GetHashCode());
            string string10 = "Namra";
            string string11 = string.Copy(string10);
            Console.WriteLine(string11);
            string11 = "patel";
            Console.WriteLine($"{string10} {string11} Last index of a in Namra {string10.LastIndexOf("a")}");

            Console.WriteLine($"Hello c# C#{"Hello c# C#".TrimEnd('#')}");
            Console.WriteLine($"Hello c# C#{"Hello c# C#".TrimStart('#')}");

            System.DateTime today = System.DateTime.Now;
            System.TimeSpan duration = new System.TimeSpan(36, 0, 0, 0);
            System.DateTime answer = today.Add(duration);
            System.Console.WriteLine("{0:dddd}", answer);
            System.Console.WriteLine($"{DateTime.Now:dddd}");
            //just like following we can add hours, minutes, seconds, miliseconds
            Console.WriteLine($"add 5 days to current date {DateTime.Today.AddDays(5)}");


            DateTime d1 = new DateTime(2019, 07, 25, 6, 20, 40);
            DateTime d2 = d1.AddTicks(5000);
            System.Console.WriteLine("DateTime = {0:dd} {0:y}, {0:hh}:{0:mm}:{0:ss} ", d1);
            System.Console.WriteLine("Initial Ticks = {0} ", d1.Ticks);
            System.Console.WriteLine("New Ticks = {0} ", d2.Ticks);

            Console.WriteLine($"Days in Feb 2020 are {DateTime.DaysInMonth(2020,2)}");

            // d2>d1 = 1,d2=d2 = 0, d1<d2 = -1 order matters
            Console.WriteLine($"Compare : {DateTime.Compare(d2,d1)}");

            Console.WriteLine($"Is 2001 is leap year? : {DateTime.IsLeapYear(2001)}");

            Console.WriteLine($"d1 equals d2? : {DateTime.Equals(d1,d2)}");

            //----------------------------------------------------------------------------------------------------------------------------------
            // Try // catch // finally // custom error //

            try
            {
                Console.WriteLine($"Enter a number");
                int num1 = Convert.ToInt16(Console.ReadLine());
                Console.WriteLine($"Entered number : {num1}");
            }
            catch (OverflowException fe)
            {
                Console.WriteLine("error occured");
            }
            catch (FormatException fe)
            {
                Console.WriteLine("Formar error");
            }
            catch (Exception e)
            {
                Console.WriteLine(e.GetType());
                Console.WriteLine(e.Message);
                Console.WriteLine(e.StackTrace);
            }
            finally
            {
                Console.WriteLine("Always occured");
            }
            try
            {
                Console.WriteLine($"Enter two numbers ");
                int n1 = Convert.ToInt32(Console.ReadLine());
                int n2 = Convert.ToInt32(Console.ReadLine());
                if(n2 == 0)
                {
                    throw new DivideByZeroException("dominator always should be greater than 0");
                }
                Console.WriteLine($"division of two numbers {n1/n1}");
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            try
            {
                marksException me = new marksException();
                Console.WriteLine("Enter marks here : ");
                int i = Convert.ToInt32(Console.ReadLine());
                me.validate(i);
            }
            catch (marksException e)
            {
                Console.WriteLine(e.Message);
            }
        }
    }
    class marksException : ApplicationException
    {
        public marksException()
        {
                
        }
        public marksException(string message):base(message)
        {

        }
        public void validate(int n)
        {
            if(n<0 || n>100)
            {
                throw new marksException("marks should be between 0 and 100");
            }
        }
    }
}
