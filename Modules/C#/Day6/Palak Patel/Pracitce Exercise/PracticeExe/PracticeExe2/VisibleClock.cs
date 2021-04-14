using System;
using System.Collections.Generic;
using System.Text;

namespace PracticeExe2
{
    class VisibleClock
    {
        public void Subscribe(Clock theClock)
        {
            theClock.TimeChanged += new Clock.TimeChangeHandler(NewTime);
        }

        public void NewTime(object theClock, TimeEventArgs e)
        {
            Console.WriteLine($"{e.Hour.ToString()}:{e.Minute.ToString()}:{e.Second.ToString()}");

        }
    }
}
