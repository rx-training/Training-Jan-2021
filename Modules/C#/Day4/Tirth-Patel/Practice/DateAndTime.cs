using System;
using System.Collections.Generic;
using System.Text;

namespace Practice
{
    class DateAndTime
    {
        public DateAndTime()
        {
            DateTime today = DateTime.Now;
            TimeSpan duration = new TimeSpan(36,0,0,0);
            DateTime ans = today.Add(duration);
            Console.WriteLine("{0:mm}",ans);
            DateTime date1 = new DateTime(2020, 1, 1, 8, 0 ,30);
            DateTime date2 = new DateTime(2020, 8, 18, 13, 30 ,30);
            TimeSpan Interval = date2 - date1;
            Console.WriteLine("{0} - {1} = {2}",date2,date1 ,Interval);
            //Console.WriteLine(Interval.TotalDays);
            //Console.WriteLine(Interval.Hours);
            //Console.WriteLine(Interval.Minutes);
            //Console.WriteLine(Interval.TotalMinutes);
            Random rnd = new Random(10);
            Console.WriteLine(rnd.Next());
            string[] values = { "12", "31.", "5.8:32:16", "12:12:15.95", ".12" };
            foreach (var item in values)
            {
                try
                {
                    TimeSpan ts = TimeSpan.Parse(item);
                    Console.WriteLine("{0}---->{1}",item,ts);
                }
                catch(FormatException)
                {
                    Console.WriteLine("Unable to Parse '{0}'",item);
                }
                catch (OverflowException)
                {
                    Console.WriteLine("'{0}' is outside range of a timespan.",item);
                }
            }
            ans = today.AddDays(36);
            Console.WriteLine("after 36 days is {0}",ans);
            ans = today.AddHours(1.5);
            Console.WriteLine(ans);
            ans = today.AddTicks(1000000000);//ticks in nano seconds
            Console.WriteLine("{0} after tick {1}",today,ans);
            bool res = today.Equals(today);
            Console.WriteLine(res);
            Console.WriteLine("is {0:yyyy} leap year?:{1}",today,DateTime.IsLeapYear(today.Year));
        }
    }
}
