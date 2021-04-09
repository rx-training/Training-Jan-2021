using System;
using System.Data.SqlClient;
using System.IO;
using System.Text;

namespace Practice
{
    public class App
    {
        public static int SbIndexOf(StringBuilder sb, char ch)
        {
            Int32 intVal1 = -1;
            while (++intVal1 < sb.Length)
            {
                if (sb[intVal1] == ch)
                {
                    return intVal1;
                }
            }
            return -1;
        }
    }
    public class Tester
    {
        public double DoDivide(double x,double y)
        {
            if (y == 0)
                throw new DivideByZeroException();
            if (x == 0)
                throw new MyCustomExpection("Dividend can't be zero");
            return x / y;
        }
    }
    public class MyCustomExpection : Exception
    {
        public MyCustomExpection(string message) :
            base(message)
        {

        }
    }

    public class Person
    {
        private string _name;

        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }

        public override int GetHashCode()
        {
            return this.Name.GetHashCode();
        }

        public override bool Equals(object obj)
        {
            // This implementation handles a null obj argument.
            Person p = obj as Person;
            if (p == null)
                return false;
            else
                return this.Name.Equals(p.Name);
        }
    }
    class Program
    {
        static void Main(string[] args)
            {
            DateTime date1 = new DateTime(2009, 8, 1, 0, 0, 0);
            DateTime date2 = new DateTime(2009, 8, 1, 12, 0, 0);
            int result = DateTime.Compare(date1, date2);
            string relationship;

            if (result < 0)
                relationship = "is earlier than";
            else if (result == 0)
                relationship = "is the same time as";
            else
                relationship = "is later than";

            Console.WriteLine("{0} {1} {2}", date1, relationship, date2);

            for (int year = 1994; year <= 2014; year++)
            {
                if (DateTime.IsLeapYear(year))
                {
                    Console.WriteLine("{0} is a leap year.", year);
                    DateTime leapDay = new DateTime(year, 2, 29);
                    DateTime nextYear = leapDay.AddYears(1);
                    Console.WriteLine("   One year from {0} is {1}.",
                                      leapDay.ToString("d"),
                                      nextYear.ToString("d"));
                }
            }


            //    string string1 = "This is a string created by assignment.";
            //    Console.WriteLine(string1);
            //    string string2a = "The path is C:\\PublicDocuments\\Report1.doc";
            //    Console.WriteLine(string2a);
            //    string string2b = @"The path is C:\PublicDocuments\Report1.doc";
            //    Console.WriteLine(string2b);
            //    string a = "jevik";
            //    Console.WriteLine(a);
            //    string b = @"jevik";
            //    Console.WriteLine(b);

            //    string string11 = "Today is " + DateTime.Now.ToString("D") + ".";
            //    Console.WriteLine(string11);

            //    string string2 = "This is one sentence. " + "This is a second. ";
            //    string2 += "This is a third sentence.";
            //    Console.WriteLine(string2);

            //    string sentence = "This sentence has five words.";
            //    int startPosition = sentence.IndexOf(" ") + 1;
            //    string word2 = sentence.Substring(startPosition,
            //                                      sentence.IndexOf(" ", startPosition) - startPosition);
            //    Console.WriteLine("Second word: " + word2);


            //    string Fullname = "Jevik Raiyani ";
            //    int startPositionOfLastName = Fullname.IndexOf(" ") + 1;
            //    string LastName = Fullname.Substring(startPositionOfLastName,
            //                                      Fullname.IndexOf(" ", startPositionOfLastName) - startPositionOfLastName);
            //    Console.WriteLine("Surname is : " + LastName);


            //    DateTime dateAndTime = new DateTime(2011, 7, 6, 7, 32, 0);
            //    double temperature = 68.3;
            //    string result = String.Format("At {0:t} on {0:D}, the temperature was {1:F1} degrees Fahrenheit.",
            //                                  dateAndTime, temperature);
            //    Console.WriteLine(result);

            //    {
            //        StreamWriter sw = new StreamWriter(@".\graphemes.txt");
            //        string grapheme = "\u0061\u0308";
            //        Console.WriteLine(grapheme);

            //        string singleChar = "\u00e4";
            //        Console.WriteLine(singleChar);

            //        Console.WriteLine("{0} = {1} (Culture-sensitive): {2}", grapheme, singleChar,
            //                     String.Equals(grapheme, singleChar,
            //                                   StringComparison.CurrentCulture));
            //        Console.WriteLine("{0} = {1} (Ordinal): {2}", grapheme, singleChar,
            //                     String.Equals(grapheme, singleChar,
            //                                   StringComparison.Ordinal));
            //        Console.WriteLine("{0} = {1} (Normalized Ordinal): {2}", grapheme, singleChar,
            //                     String.Equals(grapheme.Normalize(),
            //                                   singleChar.Normalize(),
            //                                   StringComparison.Ordinal));
            //sw.Close();
            //}

            //string s1 = "This string consists of a single short sentence.";
            //int nWords = 0;

            //s1 = s1.Trim();
            //for (int ctr = 0; ctr < s1.Length; ctr++)
            //{
            //    if (Char.IsPunctuation(s1[ctr]) | Char.IsWhiteSpace(s1[ctr]))
            //        nWords++;
            //}
            //Console.WriteLine("The sentence\n   {0}\nhas {1} words.",
            //                  s1, nWords);

            //string s1 = "This string consists of a single short sentence.";
            //int nWords = 0;

            //s1 = s1.Trim();
            //foreach (var ch in s1)
            //{
            //    if (Char.IsPunctuation(ch) | Char.IsWhiteSpace(ch))
            //        nWords++;
            //}
            //Console.WriteLine("The sentence\n   {0}\nhas {1} words.",
            //                  s1, nWords);


            //    Random rnd = new Random();

            //    string str = String.Empty;
            //    StreamWriter sw = new StreamWriter(@".\StringFile.txt",
            //                         false, Encoding.Unicode);

            //    for (int ctr = 0; ctr <= 1000; ctr++)
            //    {
            //        str += Convert.ToChar(rnd.Next(1, 0x0530));
            //        if (str.Length % 60 == 0)
            //            str += Environment.NewLine;
            //    }
            //    Console.WriteLine(str);

            //StringBuilder builder = new StringBuilder("Jevik Raiyani");
            //builder.Append(",");
            //builder.Append("jevik raiyani");
            //builder.Append(", Tirath Savsaiya");
            //builder.Append(", Pratik Usadadiya");
            //Console.WriteLine(builder);


            //string str11 = string.Empty;
            //DateTime startTime = DateTime.Now;
            //for (int i = 0; i < 10; i++)
            //{
            //    str11 += i.ToString();
            //}
            //TimeSpan ts = DateTime.Now - startTime;
            //Console.WriteLine($"Excecution time (10) using + operator : {ts.TotalMilliseconds}");
            //Console.WriteLine(str11);

            //StringBuilder sb = new StringBuilder();
            //startTime = DateTime.Now;
            //for (int i = 0; i < 10; i++)
            //{
            //    builder.Append(i.ToString());
            //}
            //ts = DateTime.Now - startTime;
            //Console.WriteLine($"Excecution time (10) using {ts.TotalMilliseconds}");


            //string Myname;
            //StringBuilder MyanotherName = new StringBuilder("Hello");
            //MyanotherName.Remove(2, 2);
            //MyanotherName.Insert(2, "lp");
            //MyanotherName.Replace("H", "A");
            //Console.WriteLine(MyanotherName);
            //Myname = MyanotherName.ToString();
            //Console.WriteLine(Myname);

            //string str1 = "I like ";
            //string str2 = "Soccer";
            //string strConcat = string.Concat(str1, str2);
            //Console.WriteLine(strConcat);

            //StringBuilder MyStrBuilder = new StringBuilder("I like ");
            //String newStr = "Soccer";
            //MyStrBuilder.Append(newStr);
            //Console.WriteLine(MyStrBuilder);

            //StringBuilder sb1 = new StringBuilder(@"Hello There");
            //Console.WriteLine($"{App.SbIndexOf(sb1, 'o')}");
            //StringBuilder sb2 = new StringBuilder(@"Jeivk Raiyani");
            //Console.WriteLine($"{App.SbIndexOf(sb2, 'R')}");

            ////SqlConnection myConn = new SqlConnection("server=vesnet27;uid=sa;pwd=;database=Pubs");
            //StringBuilder mySql = new StringBuilder("SELECT emp_id, fname, lname,hire_date ");
            //mySql.Append("FROM employee ");
            //mySql.Append("WHERE lname LIKE 'A%' ");
            //mySql.Append("ORDER BY lname");
            //Console.WriteLine(mySql);

            //string[] stringArray = { "Apple", "Æble", "Zebra" };
            //Console.WriteLine("The original string array:");

            //System.DateTime today = System.DateTime.Now;
            //System.TimeSpan duration = new System.TimeSpan(36, 0, 0, 0);
            //System.DateTime answer = today.Add(duration);
            //System.Console.WriteLine("{0:dddd}", answer);

            //string dateFormat = "MM/dd/yyyy hh:mm:ss.fffffff";
            //DateTime date1 = new DateTime(2010, 9, 8, 16, 0, 0);
            //Console.WriteLine("Original date: {0} ({1:N0} ticks)\n",
            //                  date1.ToString(dateFormat), date1.Ticks);

            //DateTime date2 = date1.AddMilliseconds(1);
            //Console.WriteLine("Second date:   {0} ({1:N0} ticks)",
            //                  date2.ToString(dateFormat), date2.Ticks);
            //Console.WriteLine("Difference between dates: {0} ({1:N0} ticks)\n",
            //                  date2 - date1, date2.Ticks - date1.Ticks);

            //DateTime date3 = date1.AddMilliseconds(1.5);
            //Console.WriteLine("Third date:    {0} ({1:N0} ticks)",
            //                  date3.ToString(dateFormat), date3.Ticks);
            //Console.WriteLine("Difference between dates: {0} ({1:N0} ticks)",
            //                  date3 - date1, date3.Ticks - date1.Ticks);


            // Exception----------
            //try
            //{
            //    Tester t = new Tester();
            //    double answer = t.DoDivide(12 , 4);
            //    Console.WriteLine("DoDivide(12 , 4) = {0}", answer);
            //    answer = t.DoDivide(0, 4);
            //    Console.WriteLine("DoDivide(0 , 4) = {0}", answer);
            //}
            //catch(DivideByZeroException ex)
            //{
            //    Console.WriteLine(ex.Message);
            //}
            //catch(MyCustomExpection ex)
            //{
            //    Console.WriteLine(ex.Message);
            //}

            //int x = 0;
            //try
            //{
            //    int y = 100 / x;
            //}
            //catch(ArithmeticException e)
            //{
            //    Console.WriteLine(e.Message);
            //}
            //catch(Exception e)
            //{
            //    Console.WriteLine($"other exception handler {e}");
            //}
            //finally
            //{
            //    Console.WriteLine("completed");
            //}
            //Console.WriteLine("file closed");

            //Person p1 = new Person();
            //p1.Name = "Jevik";
            //Person p2 = null;

            //Console.WriteLine($"p1= p2: {p1.Equals(p2)}");

            //int num1, num2;
            //Console.WriteLine("enter 2 number");

            //try
            //{
            //    num1 = Convert.ToInt32(Console.ReadLine());
            //    num2 = Convert.ToInt32(Console.ReadLine());
            //    int num3 = num1 / num2;
            //}
            //catch (FormatException)
            //{
            //    Console.WriteLine("Must enter number");
            //} 
            //catch (OverflowException)
            //{
            //    Console.WriteLine("pls enter int32");
            //}
            //catch (DivideByZeroException)
            //{
            //    Console.WriteLine("no. 2 must not be 0");
            //}
            //catch (Exception e)
            //{
            //    Console.WriteLine(e);
            //}


        }
    }
}
