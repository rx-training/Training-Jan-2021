using System;
using System.Collections.Generic;
using System.Text;

namespace PracticeExe2
{
    public class Logger
    {
        public void Subs(Clock theClock)
        {
            theClock.TimeChanged += new Clock.TimeChangeHandler(nTime);
        }

        public void nTime(object clock, TimeEventArgs e)
        {
            Console.WriteLine($"Logging event at {e.Hour.ToString()}:{e.Minute.ToString()}:{e.Second.ToString()}");
        }
    }
}
