using System;
using System.Text;

namespace Practice1
{
    public class AgeException : SystemException
    {
        public AgeException(string str)
        {
            Console.WriteLine(str);
        }
    }
    class Program
    {
        //Arithmetic Exception
        static void Main(string[] args)
        {
            int x = 0;
            int y = 100;
            try
            {
                y = y / x;
            }
            catch (DivideByZeroException)
            {
                Console.WriteLine($"Division of {y} by 0");
            }
            catch (ArithmeticException e)
            {
                Console.WriteLine($"Arithmetic Exception {e}");
            }
            catch (Exception e)
            {
                Console.WriteLine($"Generic Exception Handler : {e}");
            }
            int number1 = 3000;
            int number2 = 0;
            Console.WriteLine((double)number1 / number2);

            //User Defined Exceptions:
            int age;
            Console.WriteLine("Enter your age:");
            age = Convert.ToInt32(Console.ReadLine());
            try
            {
                if (age < 18)
                {
                    throw new AgeException("Age should not be less than 18");
                }
            }
            catch(AgeException ex)
            {
                Console.WriteLine(ex);
            }
            //Date Time Function
            System.DateTime today = System.DateTime.Now;
            System.TimeSpan duration = new System.TimeSpan(36, 0, 0, 0);
            System.DateTime answer = today.Add(duration);
            System.Console.WriteLine("{0:dddd}", answer);
            //Add Days
            DateTime today1 = DateTime.Now;
            DateTime answer1 = today1.AddDays(36);
            Console.WriteLine("Today is : {0:dddd}", today1);
            Console.WriteLine("36 days from today: {0:dddd}", answer1);
            //Add Hours
            DateTime Day1 = DateTime.Now;
            DateTime Day1Duration = Day1.AddHours(0.08333);
            Console.WriteLine(Day1);
            Console.WriteLine(Day1Duration);
            //Add Miliseconds
            string dateFormat = "MM/dd/yyyy hh:mm:ss.fffffff";
            DateTime Date1 = new DateTime(2021, 4, 7, 16, 0, 0);
            DateTime Date2 = Date1.AddMilliseconds(1.5);
            Console.WriteLine("Second date:   {0} ({1:N0} ticks)",
                  Date2.ToString(dateFormat), Date2.Ticks);
            Console.WriteLine("Difference between dates: {0} ({1:N0} ticks)\n",
                              Date2 - Date1, Date2.Ticks - Date1.Ticks);
            //Add Minutes
            DateTime DateValue = new DateTime(2010, 12, 12, 12, 0, 9);
            DateTime DateValue1 = DateValue.AddMinutes(0.08333);
            Console.WriteLine(DateValue);
            Console.WriteLine(DateValue1);
            //Add Months
            DateTime MonthValue = new DateTime(2010, 10, 10);
            for (int i = 0; i < 15; i++)
            {
                Console.WriteLine(MonthValue.AddMonths(i));
            }
            //Add Seconds
            DateTime SecondValue = new DateTime(2010, 10, 10, 12, 0, 9);
            DateTime SecondValue1 = SecondValue.AddSeconds(60);
            Console.WriteLine(SecondValue);
            Console.WriteLine(SecondValue1);
            //Add Years
            DateTime YearValue = new DateTime(2021, 04, 07, 10, 0, 0);
            DateTime YearValue1 = YearValue.AddYears(1);
            Console.WriteLine(YearValue);
            Console.WriteLine(YearValue1);
            //Add Ticks
            DateTime TickValue = new DateTime(2010, 4, 7, 10, 0, 9);
            DateTime TickValue1 = TickValue.AddTicks(60);
            Console.WriteLine(TickValue);
            Console.WriteLine(TickValue1);
            //Compare
            DateTime DateVal1 = new DateTime(2021, 4, 3, 10, 0, 9);
            DateTime DateVal2 = new DateTime(2021, 3, 3, 10, 0, 9);
            int result = DateTime.Compare(DateVal1, DateVal2);
            Console.WriteLine(result);
            //Days In Months
            const int July = 7;
            int DaysInMonths = System.DateTime.DaysInMonth(2021, July);
            Console.WriteLine(DaysInMonths);
            //Equals
            DateTime DayTime1 = new DateTime(2010, 4, 1, 10, 0, 9);
            DateTime DayTime2 = new DateTime(2010, 4, 1, 10, 0, 9);
            bool IsEqual = System.DateTime.Equals(DayTime1, DayTime2);
            Console.WriteLine(IsEqual);
            //To binary
            DateTime localDate = new DateTime(2021, 4, 7, 10, 10, 10, DateTimeKind.Local);
            long binLocal = localDate.ToBinary();
            Console.WriteLine(binLocal);
            //From binary
            DateTime localDate2 = DateTime.FromBinary(binLocal);
            Console.WriteLine(localDate2);
            //String in c#
            string str1 = "hello";
            string str2 = "hello\\";
            string str3 = @"hello\";
            Console.WriteLine($"{str1} {str2} {str3} ");
            // Create a string from a character array.
            char[] chars = { 'a', 'b', 'c', 'd' };
            String str4 = new string(chars);
            Console.WriteLine(str4);

            // Create a string that consists of a character repeated 20 times.
            string str5 = new string('c', 20);

            //string Concate
            Console.WriteLine(str5);
            string string1 = "hello";
            string string2 = string1 + " world";
            Console.WriteLine(string2);

            String string5 = "Hello World";
            Console.WriteLine(string5.ToUpper());
            Console.WriteLine(string5.ToLower());
            Console.WriteLine(string5.Trim());
            Console.WriteLine(string5.IndexOf('e'));
            Console.WriteLine(string5.IndexOf("Hello"));
            Console.WriteLine(string5.LastIndexOf('l'));
            Console.WriteLine(string5.Substring(2, 4));
            Console.WriteLine(string5.Replace("Hello", "Hi"));
            Console.WriteLine(string5.Insert(0, "Hello "));
            Console.WriteLine(string.IsNullOrEmpty(string5));
            Console.WriteLine(string.IsNullOrWhiteSpace(string5));
            string number = "2000";
            //Throws exception if null or empty
            int num = int.Parse(number);
            //Rturns 0 if null or empty
            int num2 = Convert.ToInt32(number);
            string String6 = num.ToString();
            //String Builder for append
            string st1 = "hello";
            StringBuilder sb = new StringBuilder(st1);
            sb.Append(" World");
            Console.WriteLine(sb);
            StringBuilder sb1 = new StringBuilder("hello");
            sb1.Append('-', 6);
            sb1.AppendLine();
            sb1.Append("World");
            sb1.Replace("World", "how are you");
            sb1.Insert(0, "Welcome ");
            Console.WriteLine(sb1);
            StringBuilder sb2 = new StringBuilder("Hello");
            sb2.Append("Welcome To This Application").AppendLine().Append("Hello World");
            Console.WriteLine(sb2);
        }
    }
}