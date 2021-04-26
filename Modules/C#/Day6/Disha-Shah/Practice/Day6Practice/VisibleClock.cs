using System;
using System.Collections.Generic;
using System.Text;

namespace Day6Practice
{
    class VisibleClock
    {

        public void Subscribe(Clock theClock)
        {
            theClock.TimeChanged += new Clock.TimeChangeHandler(NewTime);
        }

        public void NewTime(object theClock, TimeEventArgs e)
        {
            Console.WriteLine($"{e.Hour.ToString()} : {e.Min.ToString()} : {e.Sec.ToString()}");
        }
    }
}
