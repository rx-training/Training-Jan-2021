using System;
using System.Collections.Generic;
using System.Text;

namespace Day4Practice
{
    class DatePractice
    {
        private enum DateComparisonResult
        {
            Earlier = -1,
            Later = 1,
            TheSame = 0
        };

        public void Display()
        {
            // MaxValue & MinValue
            // Attempt to assign an out-of-range value to a DateTime constructor.
            long numberOfTicks = Int64.MaxValue;
            DateTime validDate;

            // Validate the value.
            if (numberOfTicks >= DateTime.MinValue.Ticks &&
                numberOfTicks <= DateTime.MaxValue.Ticks)
                validDate = new DateTime(numberOfTicks);
            else if (numberOfTicks < DateTime.MinValue.Ticks)
                Console.WriteLine("{0:N0} is less than {1:N0} ticks.",
                                  numberOfTicks,
                                  DateTime.MinValue.Ticks);
            else
                Console.WriteLine("{0:N0} is greater than {1:N0} ticks.",
                                  numberOfTicks,
                                  DateTime.MaxValue.Ticks);

            // Date
            DateTime date1 = new DateTime(2008, 6, 1, 7, 47, 0);
            Console.WriteLine(date1.ToString());

            // Get date-only portion of date, without its time.
            DateTime dateOnly = date1.Date;
            // Display date using short date string.
            Console.WriteLine(dateOnly.ToString("d"));
            // Display date using 24-hour clock.
            Console.WriteLine(dateOnly.ToString("g"));
            Console.WriteLine(dateOnly.ToString("MM/dd/yyyy HH:mm"));

            // Day
            DateTime moment = new DateTime(1999, 1, 13, 3, 57, 32, 11);
            // Year gets 1999.
            int year = moment.Year;
            Console.WriteLine(year);

            // Month gets 1 (January).
            int month = moment.Month;
            Console.WriteLine(month);


            // Day gets 13.
            int day = moment.Day;
            Console.WriteLine(day);

            // Hour gets 3.
            int hour = moment.Hour;
            Console.WriteLine(hour);


            // Minute gets 57.
            int minute = moment.Minute;
            Console.WriteLine(minute);

            // Second gets 32.
            int second = moment.Second;
            Console.WriteLine(second);


            // Millisecond gets 11.
            int millisecond = moment.Millisecond;
            Console.WriteLine(millisecond);


            // DayOfWeek
            DateTime dt = new DateTime(2003, 5, 1);
            Console.WriteLine("Is Thursday the day of the week for {0:d}?: {1}",
                               dt, dt.DayOfWeek == DayOfWeek.Thursday);
            Console.WriteLine("The day of the week for {0:d} is {1}.", dt, dt.DayOfWeek);

            // DayOfYear
            DateTime dec31 = new DateTime(2010, 12, 31);
            for (int ctr = 0; ctr <= 10; ctr++)
            {
                DateTime dateToDisplay = dec31.AddYears(ctr);
                Console.WriteLine("{0:d}: day {1} of {2} {3}", dateToDisplay,
                                  dateToDisplay.DayOfYear,
                                  dateToDisplay.Year,
                                  DateTime.IsLeapYear(dateToDisplay.Year) ?
                                                      "(Leap Year)" : "");
            }


            // Ticks
            DateTime centuryBegin = new DateTime(2001, 1, 1);
            DateTime currentDate = DateTime.Now;

            long elapsedTicks = currentDate.Ticks - centuryBegin.Ticks;
            TimeSpan elapsedSpan = new TimeSpan(elapsedTicks);

            Console.WriteLine("Elapsed from the beginning of the century to {0:f}:",
                               currentDate);
            Console.WriteLine("   {0:N0} nanoseconds", elapsedTicks * 100);
            Console.WriteLine("   {0:N0} ticks", elapsedTicks);
            Console.WriteLine("   {0:N2} seconds", elapsedSpan.TotalSeconds);
            Console.WriteLine("   {0:N2} minutes", elapsedSpan.TotalMinutes);
            Console.WriteLine("   {0:N0} days, {1} hours, {2} minutes, {3} seconds",
                              elapsedSpan.Days, elapsedSpan.Hours,
                              elapsedSpan.Minutes, elapsedSpan.Seconds);

            // TimeOfDay
            DateTime[] dates = { DateTime.Now,
                           new DateTime(2013, 9, 14, 9, 28, 0),
                           new DateTime(2011, 5, 28, 10, 35, 0),
                           new DateTime(1979, 12, 25, 14, 30, 0) };
            foreach (var date in dates)
            {
                Console.WriteLine("Day: {0:d} Time: {1:g}", date.Date, date.TimeOfDay);
                Console.WriteLine("Day: {0:d} Time: {0:t}\n", date);
            }

            // Add()
            // Calculate what day of the week is 36 days from this instant.
            DateTime today = DateTime.Now;
            TimeSpan duration = new TimeSpan(36, 0, 0, 0);
            DateTime answer = today.Add(duration);
            Console.WriteLine("{0:dddd}", answer);

            // AddDays()
            answer = today.AddDays(36);
            Console.WriteLine("Today: {0:dddd}", today);
            Console.WriteLine("36 days from today: {0:dddd}", answer);

            // AddHours()
            double[] hours = {.08333, .16667, .25, .33333, .5, .66667, 1, 2,
                        29, 30, 31, 90, 365};
            DateTime dateValue = new DateTime(2009, 3, 1, 12, 0, 0);

            foreach (double hour1 in hours)
                Console.WriteLine("{0} + {1} hour(s) = {2}", dateValue, hour1,
                                  dateValue.AddHours(hour1));

            // AddMilliseconds()
            string dateFormat = "MM/dd/yyyy hh:mm:ss.fffffff";
            date1 = new DateTime(2010, 9, 8, 16, 0, 0);
            Console.WriteLine("Original date: {0} ({1:N0} ticks)\n",
                              date1.ToString(dateFormat), date1.Ticks);

            DateTime date2 = date1.AddMilliseconds(1);
            Console.WriteLine("Second date:   {0} ({1:N0} ticks)",
                              date2.ToString(dateFormat), date2.Ticks);
            Console.WriteLine("Difference between dates: {0} ({1:N0} ticks)\n",
                              date2 - date1, date2.Ticks - date1.Ticks);

            DateTime date3 = date1.AddMilliseconds(1.5);
            Console.WriteLine("Third date:    {0} ({1:N0} ticks)",
                              date3.ToString(dateFormat), date3.Ticks);
            Console.WriteLine("Difference between dates: {0} ({1:N0} ticks)",
                              date3 - date1, date3.Ticks - date1.Ticks);

            // AddMinutes()
            dateValue = new DateTime(2013, 9, 15, 12, 0, 0);

            double[] minutes = { .01667, .08333, .16667, .25, .33333,
                           .5, .66667, 1, 2, 15, 30, 17, 45,
                           60, 180, 60 * 24 };

            foreach (double minute1 in minutes)
                Console.WriteLine("{0} + {1} minute(s) = {2}", dateValue, minute1,
                                  dateValue.AddMinutes(minute1));

            // AddMonths()
            var dat = new DateTime(2015, 12, 31);
            for (int ctr = 0; ctr <= 15; ctr++)
                Console.WriteLine(dat.AddMonths(ctr).ToString("d"));

            // AddSeconds()
            dateFormat = "MM/dd/yyyy hh:mm:ss";
            date1 = new DateTime(2014, 9, 8, 16, 0, 0);
            Console.WriteLine("Original date: {0} ({1:N0} ticks)\n",
                              date1.ToString(dateFormat), date1.Ticks);

            date2 = date1.AddSeconds(30);
            Console.WriteLine("Second date:   {0} ({1:N0} ticks)",
                              date2.ToString(dateFormat), date2.Ticks);
            Console.WriteLine("Difference between dates: {0} ({1:N0} ticks)\n",
                              date2 - date1, date2.Ticks - date1.Ticks);

            // Add 1 day's worth of seconds (60 secs. * 60 mins * 24 hrs.
            date3 = date1.AddSeconds(60 * 60 * 24);
            Console.WriteLine("Third date:    {0} ({1:N0} ticks)",
                              date3.ToString(dateFormat), date3.Ticks);
            Console.WriteLine("Difference between dates: {0} ({1:N0} ticks)",
                              date3 - date1, date3.Ticks - date1.Ticks);

            // AddYears()
            DateTime baseDate = new DateTime(2000, 2, 29);
            Console.WriteLine("    Base Date:        {0:d}\n", baseDate);

            // Show dates of previous fifteen years.
            for (int ctr = -1; ctr >= -15; ctr--)
                Console.WriteLine("{0,2} year(s) ago:        {1:d}",
                                  Math.Abs(ctr), baseDate.AddYears(ctr));
            Console.WriteLine();

            // Show dates of next fifteen years.
            for (int ctr = 1; ctr <= 15; ctr++)
                Console.WriteLine("{0,2} year(s) from now:   {1:d}",
                                  ctr, baseDate.AddYears(ctr));

            // Compare()
            date1 = new DateTime(2009, 8, 1, 0, 0, 0);
            date2 = new DateTime(2009, 8, 1, 12, 0, 0);
            int result = DateTime.Compare(date1, date2);
            string relationship;

            if (result < 0)
                relationship = "is earlier than";
            else if (result == 0)
                relationship = "is the same time as";
            else
                relationship = "is later than";

            Console.WriteLine("{0} {1} {2}", date1, relationship, date2);

            // CompareTo()
            DateTime thisDate = DateTime.Today;

            // Define two DateTime objects for today's date
            // next year and last year		
            DateTime thisDateNextYear, thisDateLastYear;

            // Call AddYears instance method to add/substract 1 year
            thisDateNextYear = thisDate.AddYears(1);
            thisDateLastYear = thisDate.AddYears(-1);

            // Compare dates
            //
            DateComparisonResult comparison;
            // Compare today to last year
            comparison = (DateComparisonResult)thisDate.CompareTo(thisDateLastYear);
            Console.WriteLine("CompareTo method returns {0}: {1:d} is {2} than {3:d}",
                              (int)comparison, thisDate, comparison.ToString().ToLower(),
                              thisDateLastYear);

            // Compare today to next year
            comparison = (DateComparisonResult)thisDate.CompareTo(thisDateNextYear);
            Console.WriteLine("CompareTo method returns {0}: {1:d} is {2} than {3:d}",
                              (int)comparison, thisDate, comparison.ToString().ToLower(),
                              thisDateNextYear);

            // DaysInMonth()
            const int July = 7;
            const int Feb = 2;

            int daysInJuly = DateTime.DaysInMonth(2001, July);
            Console.WriteLine(daysInJuly);

            // daysInFeb gets 28 because the year 1998 was not a leap year.
            int daysInFeb = DateTime.DaysInMonth(1998, Feb);
            Console.WriteLine(daysInFeb);

            // daysInFebLeap gets 29 because the year 1996 was a leap year.
            int daysInFebLeap = DateTime.DaysInMonth(1996, Feb);
            Console.WriteLine(daysInFebLeap);

            // Equals()
            DateTime today1 =
                    new DateTime(DateTime.Today.Ticks);
            DateTime today2 =
                    new DateTime(DateTime.Today.Ticks);
            DateTime tomorrow =
                    new DateTime(
                                DateTime.Today.AddDays(1).Ticks);

            // todayEqualsToday gets true.
            bool todayEqualsToday = DateTime.Equals(today1, today2);

            // todayEqualsTomorrow gets false.
            bool todayEqualsTomorrow = DateTime.Equals(today1, tomorrow);

            // GetDateTimeFormats()
            DateTime july28 = new DateTime(2009, 7, 28, 5, 23, 15, 16);

            string[] july28Formats = july28.GetDateTimeFormats();

            // Print out july28 in all DateTime formats using the default culture.
            foreach (string format in july28Formats)
            {
                Console.WriteLine(format);
            }

            july28 = new DateTime(2009, 7, 28, 5, 23, 15);

            // Get the long date formats using the current culture.
            string[] longJuly28Formats =
                        july28.GetDateTimeFormats('D');

            // Display july28 in all long date formats.
            foreach (string format in longJuly28Formats)
            {
                Console.WriteLine(format);
            }

            // IsLeapYear()
            for (int year1 = 1994; year1 <= 2014; year1++)
            {
                if (DateTime.IsLeapYear(year1))
                {
                    Console.WriteLine("{0} is a leap year.", year1);
                    DateTime leapDay = new DateTime(year1, 2, 29);
                    DateTime nextYear = leapDay.AddYears(1);
                    Console.WriteLine("   One year from {0} is {1}.",
                                      leapDay.ToString("d"),
                                      nextYear.ToString("d"));
                }
            }

            // Subtract()
            date1 = new DateTime(1996, 6, 3, 22, 15, 0);
            date2 = new DateTime(1996, 12, 6, 13, 2, 0);
            date3 = new DateTime(1996, 10, 12, 8, 42, 0);

            // diff1 gets 185 days, 14 hours, and 47 minutes.
            TimeSpan diff1 = date2.Subtract(date1);
            Console.WriteLine(diff1);

            // date4 gets 4/9/1996 5:55:00 PM.
            DateTime date4 = date3.Subtract(diff1);
            Console.WriteLine(date4);

            // diff2 gets 55 days 4 hours and 20 minutes.
            TimeSpan diff2 = date2 - date3;
            Console.WriteLine(diff2);

            // date5 gets 4/9/1996 5:55:00 PM.
            DateTime date5 = date1 - diff2;
            Console.WriteLine(date5);

            // TryParse()
            string[] dateStrings = {"05/01/2009 14:57:32.8", "2009-05-01 14:57:32.8",
                              "2009-05-01T14:57:32.8375298-04:00", "5/01/2008",
                              "5/01/2008 14:57:32.80 -07:00",
                              "1 May 2008 2:57:32.8 PM", "16-05-2009 1:00:32 PM",
                              "Fri, 15 May 2009 20:10:57 GMT" };
            DateTime dateValue1;

            foreach (string dateString in dateStrings)
            {
                if (DateTime.TryParse(dateString, out dateValue1))
                    Console.WriteLine("  Converted '{0}' to {1} ({2}).", dateString,
                                      dateValue1, dateValue1.Kind);
                else
                    Console.WriteLine("  Unable to parse '{0}'.", dateString);
            }

        }
    }
}
