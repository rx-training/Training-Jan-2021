using System;
using System.Collections.Generic;
using System.IO;
using System.Globalization;
using System.Text;

namespace Day4Practice
{
    class TestClass
    { }

    class StringPractice
    {
        private static string StripEndTags(string item)
        {

            bool found = false;

            // try to find a tag at the end of the line using EndsWith
            if (item.Trim().EndsWith(">"))
            {

                // now search for the opening tag...
                int lastLocation = item.LastIndexOf("</");

                // remove the identified section, if it is a valid region
                if (lastLocation >= 0)
                {
                    found = true;
                    item = item.Substring(0, lastLocation);
                    Console.WriteLine($"inner = {item}");
                }
            }

            if (found)
            {
                item = StripEndTags(item);

                Console.WriteLine($"outer = {item}");

            }

            return item;
        }

        public void Display()
        {
            // Assigning string literal to a string variable
            string s1 = "Hello World!!";
            Console.WriteLine(s1);

            // Escape Character is '\'
            string s2 = "The path is C:\\PublicDocuments\\Report1.doc";
            Console.WriteLine(s2);
            string s3 = @"The path is C:\PublicDocuments\Report1.doc";
            Console.WriteLine(s3);

            // Using String class constructor
            char[] chars = { 'H', 'e', 'l', 'l', 'o' };

            // Creating string from character array
            string s4 = new string(chars);
            Console.WriteLine(s4);

            // Create a string that consists of a character repeated 20 times.
            string s5 = new string('c', 20);
            Console.WriteLine(s5);

            // String concatenation
            string s6 = "Hello, " + "World";
            Console.WriteLine(s6);
            s6 += "Today is " + DateTime.Now.ToString("D") + ".";
            Console.WriteLine(s6);

            // Extract substring from long string
            string s7 = "Hello World, It's a Pleasant Day, Learning C# from MSDN";
            int startPosition = s7.IndexOf(" ") + 1;
            Console.WriteLine(startPosition);
            Console.WriteLine(s7.IndexOf(" ", startPosition) - startPosition);
            Console.WriteLine(s7.LastIndexOf(" "));
            string target = " ";
            char[] anyOf = target.ToCharArray();
            Console.WriteLine(s7.LastIndexOfAny(anyOf));
            string word2 = s7.Substring(startPosition, s7.IndexOf(" ", startPosition) - startPosition);
            Console.WriteLine("Second word: " + word2);

            // Formatting method
            DateTime dateAndTime = new DateTime(2011, 7, 6, 7, 32, 0);
            double temperature = 68.3;
            string result = String.Format("At {0:t} on {0:dddd}, {0:D}, the temperature was {1:F1} degrees Fahrenheit.",
                                          dateAndTime, temperature);
            Console.WriteLine(result);

            // Counting no. of words using for loop
            string s8 = "        Hello world Learning c#       ";
            int nWords = 0;

            s8 = s8.Trim();
            for (int ctr = 0; ctr < s8.Length; ctr++)
            {
                if (Char.IsPunctuation(s8[ctr]) | Char.IsWhiteSpace(s8[ctr]))
                    nWords++;
            }
            Console.WriteLine("The sentence\n   {0}\nhas {1} words.",
                              s8, nWords);

            // Counting no. of words using for each loop
            int Words = 0;

            foreach (var ch in s8)
            {
                if (Char.IsPunctuation(ch) | Char.IsWhiteSpace(ch))
                    Words++;
            }
            Console.WriteLine("The sentence\n   {0}\nhas {1} words.",
                              s8, Words);

            // String is null or empty, using IsNullOrEmpty
            string s9 = "";
            Console.WriteLine($"String is null or empty: {String.IsNullOrEmpty(s9)}");

            // String is null, empty or has white space, using IsNullOrWhiteSpace 
            Console.WriteLine("Enter string");
            string s10 = Console.ReadLine();
            Console.WriteLine($"String is null, empty or has white space characters: {String.IsNullOrWhiteSpace(s10)}");
            while (String.IsNullOrWhiteSpace(s10))
            {
                Console.WriteLine("Enter valid string input:");
                s10 = Console.ReadLine();
            }
            Console.WriteLine(s10);

            // String is immutable
            string s11 = String.Empty;
            Console.WriteLine(s11);
            s11 += "Hello!! ";
            Console.WriteLine(s11);

            // StringBuilder is mutable
            StringBuilder s12 = new StringBuilder();
            Console.WriteLine(s12);
            s12.Append("Hello ");
            s12.Append("World!!");
            Console.WriteLine(s12.ToString());

            Console.WriteLine(s11.ToUpper());
            Console.WriteLine(s11.ToLower());

            s11 = "LeArnIng c#";
            TextInfo myTI = new CultureInfo("en-US", false).TextInfo;
            // Changes a string to lowercase.
            Console.WriteLine("\"{0}\" to lowercase: {1}", s11, myTI.ToLower(s11));

            // Changes a string to uppercase.
            Console.WriteLine("\"{0}\" to uppercase: {1}", s11, myTI.ToUpper(s11));

            // Changes a string to titlecase.
            Console.WriteLine("\"{0}\" to titlecase: {1}", s11, myTI.ToTitleCase(s11));

            // Comparing strings
            Console.WriteLine(String.Compare("hello", "Hello"));
            Console.WriteLine(String.Compare("hello", "hello"));
            Console.WriteLine(String.Compare("Hello", "hello"));

            // Sorting strings
            string[] s13 = { "Apple", "Guava", "Banana" };
            string[] s14 = new string[s13.Length];
            s13.CopyTo(s14, 0);
            Array.Sort(s13);
            foreach (var item in s13)
            {
                Console.WriteLine(item);
            }

            // Checking if substring is present or not using IndexOf
            string s15 = "Learning c# from msdn";
            int s15Result = s15.IndexOf("msdn");

            if (s15Result != -1)
            {
                Console.WriteLine($"msdn is present in the string {s15} at {s15Result} position.");
            }
            else
            {
                Console.WriteLine($"msdn is not present in {s15}");
            }

            // Checking if string starts with a particular char
            if (s15.StartsWith("L"))
            {
                Console.WriteLine("string starts with 'L'");
            }
            else
            {
                Console.WriteLine("string doesn't start with 'L'");
            }

            // Checking if string starts with a particular string
            if (s15.StartsWith("Learn"))
            {
                Console.WriteLine("string starts with 'Learn'");
            }
            else
            {
                Console.WriteLine("string doesn't start with 'Learn'");
            }


            // Checking if string ends with a particular char
            if (s15.EndsWith("n"))
            {
                Console.WriteLine("string ends with 'n'");
            }
            else
            {
                Console.WriteLine("string doesn't end with 'n'");
            }

            // Checking if string ends with a particular string
            if (s15.EndsWith("msdn"))
            {
                Console.WriteLine("string ends with 'msdn'");
            }
            else
            {
                Console.WriteLine("string doesn't end with 'msdn'");
            }

            // Checking endswith in an array
            String[] strings = { "This is a string.", "Hello!", "Nothing.",
                           "Yes.", "randomize" };
            foreach (var value in strings)
            {
                bool endsInPeriod = value.EndsWith(".");
                Console.WriteLine("'{0}' ends in a period: {1}",
                                  value, endsInPeriod);
            }

            // process an input file that contains html tags.
            // this sample checks for multiple tags at the end of the line, rather than simply
            // removing the last one.
            // note: HTML markup tags always end in a greater than symbol (>).

            string[] strSource = { "<b>This is bold text</b>", "<H1>This is large Text</H1>",
                "<b><i><font color=green>This has multiple tags</font></i></b>",
                "<b>This has <i>embedded</i> tags.</b>",
                "This line simply ends with a greater than symbol, it should not be modified>" };

            Console.WriteLine("The following lists the items before the ends have been stripped:");
            Console.WriteLine("-----------------------------------------------------------------");

            // print out the initial array of strings
            foreach (string s in strSource)
                Console.WriteLine(s);

            Console.WriteLine();

            Console.WriteLine("The following lists the items after the ends have been stripped:");
            Console.WriteLine("----------------------------------------------------------------");

            // print out the array of strings
            foreach (var s in strSource)
                Console.WriteLine(StripEndTags(s));

            //String.Equals() for comparing string with string or object
            StringBuilder sb = new StringBuilder("abcd");
            String str1 = "abcd";
            String str2 = null;
            Object o2 = null;

            Console.WriteLine();
            Console.WriteLine(" *  The value of String str1 is '{0}'.", str1);
            Console.WriteLine(" *  The value of StringBuilder sb is '{0}'.", sb.ToString());

            Console.WriteLine();
            Console.WriteLine("1a) String.Equals(Object). Object is a StringBuilder, not a String.");
            Console.WriteLine("    Is str1 equal to sb?: {0}", str1.Equals(sb));

            Console.WriteLine();
            Console.WriteLine("1b) String.Equals(Object). Object is a String.");
            str2 = sb.ToString();
            o2 = str2;
            Console.WriteLine(" *  The value of Object o2 is '{0}'.", o2);
            Console.WriteLine("    Is str1 equal to o2?: {0}", str1.Equals(o2));

            Console.WriteLine();
            Console.WriteLine(" 2) String.Equals(String)");
            Console.WriteLine(" *  The value of String str2 is '{0}'.", str2);
            Console.WriteLine("    Is str1 equal to str2?: {0}", str1.Equals(str2));

            Console.WriteLine();
            Console.WriteLine(" 3) String.Equals(String, String)");
            Console.WriteLine("    Is str1 equal to str2?: {0}", String.Equals(str1, str2));

            string word = "File";
            string[] others = { word.ToLower(), word, word.ToUpper(), "Fıle" };
            foreach (string other in others)
            {
                if (word.Equals(other))
                    Console.WriteLine("{0} = {1}", word, other);
                else
                    Console.WriteLine("{0} != {1}", word, other);
            }

            // Contains() method
            string s16 = "Hello World, It's a Pleasant Day!!";
            if(s16.Contains("Pleasant"))
            {
                Console.WriteLine($"Pleasant word starts at position {s16.IndexOf("Pleasant")} in {s16}");

                //Replace() method
                s16 = s16.Replace("Pleasant", "Beautiful").Replace("!!", ".");
                Console.WriteLine(s16);

                // Split() & Trim() method
                string[] subs = s16.Split(',');
                char[] charsToTrim = { '!', ' ', '.' };
                foreach (var item in subs)
                {
                    Console.WriteLine($"substring: {item.Trim(charsToTrim)}");
                }

            }

            string s17 = "You win some. You lose some.";

            string[] sub = s17.Split(' ', '.');

            foreach (var s18 in sub)
            {
                Console.WriteLine($"Substring: {s18}");
            }

            // To remove empty substrings from output
            string s19 = "You win some. You lose some.";
            char[] separators = new char[] { ' ', '.' };

            string[] s19subs = s19.Split(separators, StringSplitOptions.RemoveEmptyEntries);

            foreach (var s19sub in s19subs)
            {
                Console.WriteLine($"Substring: {s19sub}");
            }

            //CompareTo()
            var test = new TestClass();
            Object[] objectsToCompare = { test, test.ToString(), 123,
                                    123.ToString(), "some text",
                                    "Some Text" };
            string s20 = "some text";
            foreach (var objectToCompare in objectsToCompare)
            {
                try
                {
                    int i = s20.CompareTo(objectToCompare);
                    Console.WriteLine("Comparing '{0}' with '{1}': {2}",
                                      s20, objectToCompare, i);
                }
                catch (ArgumentException)
                {
                    Console.WriteLine("Bad argument: {0} (type {1})",
                                      objectToCompare,
                                      objectToCompare.GetType().Name);
                }
            }

            // Insert() method
            string animal1 = "fox";
            string animal2 = "dog";

            string strTarget = String.Format("The {0} jumps over the {1}.",
                                             animal1, animal2);

            Console.WriteLine("The original string is:{0}", strTarget);

            Console.Write("Enter an adjective (or group of adjectives) " +
                          "to describe the {0}: ==> ", animal1);
            string adj1 = Console.ReadLine();

            Console.Write("Enter an adjective (or group of adjectives) " +
                          "to describe the {0}: ==> ", animal2);
            string adj2 = Console.ReadLine();

            adj1 = adj1.Trim() + " ";
            adj2 = adj2.Trim() + " ";

            strTarget = strTarget.Insert(strTarget.IndexOf(animal1), adj1);
            strTarget = strTarget.Insert(strTarget.IndexOf(animal2), adj2);

            Console.WriteLine("\nThe final string is:{0}", strTarget);

            // PadLeft() method
            string str = "forty-two";
            char pad = '.';

            Console.WriteLine(str.PadLeft(15, pad));
            Console.WriteLine(str.PadLeft(2, pad));
            Console.WriteLine(str.PadLeft(15));
            Console.WriteLine(str.PadLeft(2));


            // PadRight() method
            Console.WriteLine(str.PadRight(15, pad));
            Console.WriteLine(str.PadRight(2, pad));
            Console.WriteLine(str.PadRight(15));
            Console.WriteLine(str.PadRight(2));

            // Remove()
            string s21 = "abc---def";
            Console.WriteLine("1)     {0}", s21);
            Console.WriteLine("2)     {0}", s21.Remove(3).TrimStart(' '));
            Console.WriteLine("3)     {0}", s21.Remove(3, 3).TrimEnd(' '));

            // Concat()
            String s22 = "We went to a bookstore, ";
            String s23 = "a movie, ";
            String s24 = "and a restaurant.";

            var s25 = String.Concat(s22, s23, s24);
            Console.WriteLine(s25);

            // Join()
            String[] val = { "apple", "orange", "grape", "pear" };
            String sep = ", ";
            String joinResult;

            Console.WriteLine("sep = '{0}'", sep);
            Console.WriteLine("val[] = {{'{0}' '{1}' '{2}' '{3}'}}", val[0], val[1], val[2], val[3]);
            joinResult = String.Join(sep, val);
            Console.WriteLine("String.Join(sep, val) = '{0}'", joinResult);

            // String Constructor
            char[] charArr2 = { 'H', 'e', 'y', 'y' };
            String szLetterLike = new String(charArr2);
            string emptyStr = String.Empty;
            // Compare Strings - the result is false
            Console.WriteLine("The String is " + szLetterLike + emptyStr + " empty string");

            // Chars[] property
            string str4 = "Test";
            for (int ctr = 0; ctr <= str4.Length - 1; ctr++)
                Console.Write("{0} ", str[ctr]);
        }
    }
}
