using System;

namespace Practice
{
    class StringPractice
    {
        public void Display()
        {
            //Compare To Example:
            string s1 = "hello";
            string s2 = "hello";
            string s3 = "csharp";
            Console.WriteLine("CompareTo Example:");
            Console.WriteLine(s1.CompareTo(s2));
            Console.WriteLine(s2.CompareTo(s3));

            //Compare To Example:
            string a1 = "Hello ";
            string a2 = "Good Morning Everyone!";
            Console.WriteLine("Concat Example:");
            Console.WriteLine(string.Concat(a1, a2));

            //IsNull or Empty:
            string b1 = "Karan Singh Chauhan";
            string b2 = "";
            bool x1 = string.IsNullOrEmpty(b1);
            bool x2 = string.IsNullOrEmpty(b2);
            Console.WriteLine("IsNull or Empty Example:");
            Console.WriteLine(x1);
            Console.WriteLine(x2);

            //Last Index Example:
            int index = s1.LastIndexOf('l');
            Console.WriteLine("Last Index Example:");
            Console.WriteLine(index);

            //Pad Left Example:
            string temp = s1.PadLeft(10);
            Console.WriteLine("PadLeft Example:");
            Console.WriteLine(temp);

            //ToLower Example:
            Console.WriteLine("ToLower Example:");
            Console.WriteLine(temp.ToLower());

        }
    }
    class DatePractice
    {
        public void Display()
        {
            //Date Properties
            DateTime DateTimeProperty = new DateTime(1974, 7, 10, 7, 10, 24);
            Console.WriteLine("Day:{0}", DateTimeProperty.Day);
            Console.WriteLine("Month:{0}", DateTimeProperty.Month);
            Console.WriteLine("Year:{0}", DateTimeProperty.Year);
            Console.WriteLine("Hour:{0}", DateTimeProperty.Hour);
            Console.WriteLine("Minute:{0}", DateTimeProperty.Minute);
            Console.WriteLine("Second:{0}", DateTimeProperty.Second);
            Console.WriteLine("Millisecond:{0}", DateTimeProperty.Millisecond);

            Console.WriteLine("Day of Week:{0}", DateTimeProperty.DayOfWeek);
            Console.WriteLine("Day of Year: {0}", DateTimeProperty.DayOfYear);
            Console.WriteLine("Time of Day:{0}", DateTimeProperty.TimeOfDay);

            //Leap Year
            DateTime DateOfTime = new DateTime(2020, 02, 22);
            Console.WriteLine(DateOfTime.IsDaylightSavingTime());
            Console.WriteLine(DateTime.IsLeapYear(DateOfTime.Year));

            //Add Subtract Example
            DateTime Day = DateTime.Now;
            TimeSpan Month = new System.TimeSpan(30, 0, 0, 0);
            DateTime aDayAfterAMonth = Day.Add(Month);
            DateTime aDayBeforeAMonth = Day.Subtract(Month);
            Console.WriteLine("{0:dddd}", aDayAfterAMonth);
            Console.WriteLine("{0:dddd}", aDayBeforeAMonth);
        }
    }

    public class MyException : Exception
    {
        public MyException(string message) : base(message)
        {

        }

        public static void MyDetails()
        {
            throw new MyException("User Defined Exception Practice!");

        }
    }

    public class MyDetails
    {
        public void CheckDetails()
        {
            try
            {
                Console.WriteLine("Enter your name: ");
                string name = Console.ReadLine();
                if (name == "karan" || name == "Karan" || name == "KARAN")
                {
                    Console.WriteLine("My name is " + name);                
                }
                else
                {
                    MyException.MyDetails();
                }
                
            }
            catch (MyException e)
            {
                Console.WriteLine(e.Message);
            }
            finally
            {
                Console.WriteLine("This is finally block example");
            }

        }
    }

    class Practice
    {
        static void Main(string[] args)
        {
        
            StringPractice s = new StringPractice();
            s.Display();

            DatePractice d = new DatePractice();
            d.Display();

            MyDetails m = new MyDetails();
            m.CheckDetails();
        }
    }
}
