using System;
using System.Text;

namespace Practice_Exercise
{
    public class UnderstandigString
    {

        public void str()
        {
            //Instantiate a String object
            string s1 = "Learning C#";
            Console.WriteLine(s1);
            string Filepath = "The path is C:\\PublicDocuments\\Report1.doc";
            Console.WriteLine(Filepath);


            //converting char array to string
            char[] char1 = { 'W', 'O', 'R', 'L', 'D' };
            string s2 = new string(char1);
            Console.WriteLine(s2);

            //reapting the char c 20 times
            string s3 = new string('c', 20);
            Console.WriteLine(s3);

            //concatination of string
            string string2 = "Today is " + DateTime.Now.ToString("D") + ".";
            Console.WriteLine(string2);
            string string3 = "This is First Statement ." + "This is secound statement .";
            string3 += "This is Third Statement .";
            Console.WriteLine(string3);

            //retriving particular string
            string sentence = "This sentence has five words.";
            int startPosition = sentence.IndexOf(" ") + 1;
            string word2 = sentence.Substring(startPosition,
                                              sentence.IndexOf(" ", startPosition) - startPosition);
            Console.WriteLine("Second word: " + word2);

            //converting object into the striing
            DateTime dt = new DateTime(2021, 11, 27, 7, 32, 35);
            double tempreture = 68.5;
            string result = $"AT {dt.ToString("t")} On {dt.ToString("dddd") }, the tempreture was {tempreture} degrees Fahrenheit";
            Console.WriteLine(result);

            //unicode charactor
            string grapheme = "\u0061\u0308";
            Console.WriteLine(grapheme);

            string singleChar = "\u00e4";
            Console.WriteLine(singleChar);

            //string and indexes
            string str1 = "this is the string consist of single short sentence";
            str1 = str1.Trim();
            int count = 0;
            foreach (var item in str1)
            {
                if (char.IsWhiteSpace(item) | char.IsPunctuation(item))
                {
                    count++;
                }


            }
            Console.WriteLine($"The program consist of  [ {str1}] String And  the count of word is {count}");


            //compare method
            string one = "Hello";
            string two = "Hello";
            string three = "csharp";
            string four = "kl";
            Console.WriteLine("Compare Method");
            Console.WriteLine(string.Compare(one, two));
            Console.WriteLine(string.Compare(two, three));
            Console.WriteLine(string.Compare(three, four));

            //CompareOrdinal method
            Console.WriteLine("CompareOrdinal Method");
            Console.WriteLine(string.CompareOrdinal(one, two));
            Console.WriteLine(string.CompareOrdinal(two, three));
            Console.WriteLine(string.CompareOrdinal(three, four));


            //CompareTO method
            Console.WriteLine("Compare To Method");
            Console.WriteLine(one.CompareTo(two));
            Console.WriteLine(two.CompareTo(three));

            //concate method
            Console.WriteLine("Concate Method");
            string string1 = "Learn";
            string string4 = " c#";
            Console.WriteLine(string.Concat(string1,string4));

            //contains method
            Console.WriteLine("Contains Method");
            string cont1 = "Hello";
            string cont2 = "He";
            string cont3 = "df";
            Console.WriteLine(cont1.Contains(cont2));
            Console.WriteLine(cont1.Contains(cont3));

            //copy method
            Console.WriteLine("Copy Method");
           /* string cpy1 = "Hello";
            string cpy2 = string.Copy(cpy1);
            Console.WriteLine(cpy1);
            Console.WriteLine(cpy2);*/

            //copyto method
            Console.WriteLine("CopyTo Method");
            string cpt1 = "Hello C#, How Are You?";
            char[] ch = new char[15];
            cpt1.CopyTo(10, ch, 0, 12);
            Console.WriteLine(ch);

            //index of method
            Console.WriteLine("IndexOf Mehod");
            string ind1 = "Hello c#";
            Console.WriteLine(ind1.IndexOf("c#"));


            //split method
            Console.WriteLine("Split Method");
            string sdsds = "Hello c# Learn";
            var split1 = sdsds.Split(" ");
            foreach (var item in split1)
            {
                Console.WriteLine(item);
            }

            // Trim Method
            Console.WriteLine("Trim Method");
            string nvsd = "          Hello World      ";
            Console.WriteLine(nvsd);
            string trim1 = nvsd.Trim();
            Console.WriteLine(trim1);

            //substring method 
            
            Console.WriteLine("Substring method");
            string substr = "Hello c Sharp";
            string substr2 = substr.Substring(5);
            Console.WriteLine(substr);
            Console.WriteLine(substr2);

            //string builder method

            StringBuilder sb1 = new StringBuilder("Hello");
            Console.WriteLine(sb1);
            sb1.Append(" World");
            Console.WriteLine(sb1);

            //join method

            string[] jkfgg = new string[] {"c#","JAVA","C++","Pythone"};
            string dfdfdfd = string.Join("-", jkfgg);
            Console.WriteLine(dfdfdfd);

            //Equals Method
            string sb2 = "Hello";
            StringBuilder sb3 = new StringBuilder("Hello World");
            Console.WriteLine(sb1.Equals(sb2));
            Console.WriteLine(sb1.Equals(sb3));


            //Insert Method
            string als = "Hello C#";
            string als2 = als.Insert(5, "-");
            Console.WriteLine(als2);

            //Remove Method
            string lase = "Hello C#";
            string lase2 = lase.Remove(2);
            Console.WriteLine(lase2);

            //Replace Method
            string sdsdsds = "Hello F#";
            Console.WriteLine(sdsdsds);
            string sdsdsds1 = sdsdsds.Replace('F','C');
            Console.WriteLine(sdsdsds1);

        }

        




    }

    public class CustomException : ApplicationException
    {
        public CustomException(String Message) : base(Message)
        { 
        }

        public static void getError()
        {
            throw new CustomException("Number Between 0 And 10");

        }
    }
    
    public class ExceptionHandling
    {
        public void simpletrycach()
        {
            try
            {
                Console.WriteLine("Enter The Number");
                int num = Convert.ToInt32(Console.ReadLine());
                if(num<0 || num>100)
                {
                    CustomException.getError();
                    
                }
                
            }
            catch(CustomException c)
            {
                Console.WriteLine(c.Message);
            }
            try
            {
                Console.WriteLine("PERFORMING DIVISION");
                Console.WriteLine("Enter The Number One");
                double num1 = Convert.ToDouble(Console.ReadLine());
                Console.WriteLine("Enter The Number 2");
                double num2 = Convert.ToDouble(Console.ReadLine());
                if (num2 == 0)
                {
                    throw new ArithmeticException("Can Not Divid By Zero");
                }
                double num3 = num1 / num2;
                Console.WriteLine($"Division Of {num2} AND {num2} IS {num3}");
                
            }
            catch (ArithmeticException e)
            {
                Console.WriteLine($"{e.Message}");
            }
            catch (Exception e)
            {
                Console.WriteLine($"Error Is Occored {e}");
            }
            finally
            {
                Console.WriteLine("I am Always Executed");
            }
        }

    }
    class Understandingdate
    {
        public void datetimeunderstanding()
        {
            //add days 
            DateTime dt1 = new DateTime(2015,12,31);
            Console.WriteLine("Date Before Add 5 Days :-"+dt1);
            DateTime dt2= dt1.AddDays(5);
            Console.WriteLine("Date Before Add 5 Days :-" + dt2);
            //subtract date
            DateTime dt3 = new DateTime(2015, 12, 31);
            DateTime dt4 = new DateTime(2016, 2, 2);
            TimeSpan result = dt4.Subtract(dt3);
            Console.WriteLine("Subtraction Is  :-"+result);

            //current date
            DateTime dtt = DateTime.Now;
            Console.WriteLine("Current Date And Time :- "+dtt);
            DateTime dtt1 = DateTime.Today;
            Console.WriteLine("Current Date :- " +dtt1);

        }
    }


    class Program
    {
        static void Main(string[] args)
        {
            UnderstandigString str1 = new UnderstandigString();
            str1.str();

            ExceptionHandling eh = new ExceptionHandling();
            eh.simpletrycach();
            Understandingdate ud1 = new Understandingdate();
            ud1.datetimeunderstanding();
        }
    }
}
