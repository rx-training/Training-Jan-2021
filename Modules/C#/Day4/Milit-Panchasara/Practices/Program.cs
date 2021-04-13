using System;
using System.Globalization;
using System.Text;

namespace Practices
{
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
            try
            {
                // This implementation contains an error in program logic:
                // It assumes that the obj argument is not null.
                Person p = (Person)obj;
                return this.Name.Equals(p.Name);
            }
            catch (NullReferenceException e)
            {
                Console.WriteLine(e.Message);
                Console.WriteLine(e.StackTrace);
                throw new NullReferenceException("Name cannot be null!"); // user defined message
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                Console.WriteLine(e.StackTrace);
                throw; 
            }
            
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            //try
            //{
            //    Person p1 = new Person();
            //    p1.Name = "John";
            //    Person p2 = null;

            //    // The following throws a NullReferenceException.
            //    Console.WriteLine("p1 = p2: {0}", p1.Equals(p2));
            //}
            //catch (Exception e)
            //{
            //    Console.WriteLine("Error from main method");
            //    Console.WriteLine(e.Message);
            //}

            //-----------------//
            // STRING PRACTICE //
            //-----------------//

            sbyte[] bytes = { 0x41, 0x42, 0x43, 0x44, 0x45, 0x00 };
            string stringFromBytes = null;
            unsafe
            {
                fixed (sbyte* pbytes = bytes)
                {
                    // Create a string from a pointer to a signed byte array.
                    stringFromBytes = new string(pbytes);
                }
            }
            Console.WriteLine(stringFromBytes);
            var s1 = "Hello welcome, xyz xyz";
            var s2 = s1.Substring(6, 2);
            Console.WriteLine(s2);

            s1 = "This string consists of a single short sentence.";
            int nWords = 0;

            s1 = s1.Trim();
            foreach (var ch in s1)
            {
                if (Char.IsPunctuation(ch) | Char.IsWhiteSpace(ch))
                    nWords++;
            }
            Console.WriteLine("The sentence\n   {0}\nhas {1} words.",
                              s1, nWords);

            string s3 = null;
            Console.WriteLine(string.IsNullOrEmpty(s3));
            s3 = "                                    ";
            Console.WriteLine(string.IsNullOrWhiteSpace(s3));

            // Creates and initializes the CultureInfo which uses the international sort.
            CultureInfo myCIintl = new CultureInfo("en-IN", false);

            // Creates and initializes the CultureInfo which uses the traditional sort.
            CultureInfo myCItrad = new CultureInfo(0x040A, false);

            // Displays the properties of each culture.
            Console.WriteLine("{0,-31}{1,-47}{2,-25}", "PROPERTY", "INTERNATIONAL", "TRADITIONAL");
            Console.WriteLine("{0,-31}{1,-47}{2,-25}", "CompareInfo", myCIintl.CompareInfo, myCItrad.CompareInfo);
            Console.WriteLine("{0,-31}{1,-47}{2,-25}", "DisplayName", myCIintl.DisplayName, myCItrad.DisplayName);
            Console.WriteLine("{0,-31}{1,-47}{2,-25}", "EnglishName", myCIintl.EnglishName, myCItrad.EnglishName);
            Console.WriteLine("{0,-31}{1,-47}{2,-25}", "IsNeutralCulture", myCIintl.IsNeutralCulture, myCItrad.IsNeutralCulture);
            Console.WriteLine("{0,-31}{1,-47}{2,-25}", "IsReadOnly", myCIintl.IsReadOnly, myCItrad.IsReadOnly);
            Console.WriteLine("{0,-31}{1,-47}{2,-25}", "LCID", myCIintl.LCID, myCItrad.LCID);
            Console.WriteLine("{0,-31}{1,-47}{2,-25}", "Name", myCIintl.Name, myCItrad.Name);
            Console.WriteLine("{0,-31}{1,-47}{2,-25}", "NativeName", myCIintl.NativeName, myCItrad.NativeName);
            Console.WriteLine("{0,-31}{1,-47}{2,-25}", "Parent", myCIintl.Parent, myCItrad.Parent);
            Console.WriteLine("{0,-31}{1,-47}{2,-25}", "TextInfo", myCIintl.TextInfo, myCItrad.TextInfo);
            Console.WriteLine("{0,-31}{1,-47}{2,-25}", "ThreeLetterISOLanguageName", myCIintl.ThreeLetterISOLanguageName, myCItrad.ThreeLetterISOLanguageName);
            Console.WriteLine("{0,-31}{1,-47}{2,-25}", "ThreeLetterWindowsLanguageName", myCIintl.ThreeLetterWindowsLanguageName, myCItrad.ThreeLetterWindowsLanguageName);
            Console.WriteLine("{0,-31}{1,-47}{2,-25}", "TwoLetterISOLanguageName", myCIintl.TwoLetterISOLanguageName, myCItrad.TwoLetterISOLanguageName);
            Console.WriteLine();

            // Compare two strings using myCIintl.
            Console.WriteLine("Comparing \"llegar\" and \"lugar\"");
            Console.WriteLine("   With myCIintl.CompareInfo.Compare: {0}", myCIintl.CompareInfo.Compare("llegar", "lugar"));
            Console.WriteLine("   With myCItrad.CompareInfo.Compare: {0}", myCItrad.CompareInfo.Compare("llegar", "lugar"));

            int x = 12;
            string s4 = x.ToString("F2",myCIintl);
            string s5 = x.ToString("F3", myCIintl);
            string s6 = x.ToString("F3",myCItrad);
            Console.WriteLine(s4);
            Console.WriteLine(s5);
            Console.WriteLine(s6);

            StringBuilder sb = new StringBuilder();
            sb.Append(s4);
            sb.Append('x', 20);
            sb.Append(15);
            Console.WriteLine(sb.ToString());

            var s7 = "Hello welcome, xyz xyz";
            Console.WriteLine(s7.IndexOf('l'));
            Console.WriteLine(s7.CompareTo("Hello welcome"));
            Console.WriteLine(s7.CompareTo("Hello welcome, xyz xyz"));
            Console.WriteLine(s7.CompareTo("Hello welcome, xyz xyz xyz"));
            Console.WriteLine(s7.Equals("Hello welcome, xyz xyz xyz"));
            String s8 = String.Empty;
            s8 = string.Copy(s7); // depricated
            Console.WriteLine(s8);
            Console.WriteLine(s8.Normalize(NormalizationForm.FormKD));
            Console.WriteLine(s7.PadLeft(25,' '));
            Console.WriteLine(s7.PadRight(25,' ') + "xxx");
            Console.WriteLine(s7.Remove(5,5));
            char[] c = { ' ', 'y' }; 
            string[] ar = s8.Split(c);
            foreach (var item in ar)
            {
                Console.WriteLine(item);
            }

            ar = s8.Split(c, 3);
            foreach (var item in ar)
            {
                Console.WriteLine(item);
            }

            s8 = "a                  b                c";
            ar = s8.Split(' ', StringSplitOptions.RemoveEmptyEntries);
            foreach (var item in ar)
            {
                Console.WriteLine(item);
            }
            Console.WriteLine(s7.ToLower());
            Console.WriteLine(s7.ToUpper());

            //-----------------//
            // DATETIME PRACTICE //
            //-----------------//

            DateTime d = new DateTime();
            Console.WriteLine(d);
            Console.WriteLine(d.Year);
            Console.WriteLine(d.AddMonths(2));
            d = DateTime.Now;
            Console.WriteLine(d);
            d = DateTime.Today;
            Console.WriteLine(d);
            d = new DateTime(2020, 12, 12, 4, 5, 1);
            Console.WriteLine(d);
            Console.WriteLine(d.Ticks);
            d = DateTime.MaxValue;
            Console.WriteLine(d);
            Console.WriteLine(DateTime.MinValue);
            d = new DateTime(2020, 12, 12, 4, 5, 1);
            Console.WriteLine(DateTime.DaysInMonth(d.Year, d.Month));
            Console.WriteLine(DateTime.IsLeapYear(2021));
            Console.WriteLine(d);
            d = d + new TimeSpan(3,0,0,0,0);
            Console.WriteLine(d);


        }
    }
}
