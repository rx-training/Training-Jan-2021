using System;
using System.Collections.Generic;
using System.Text;

namespace Practice
{
    public class VisibleClock
    {
        public void Subscribe(Clock theclock)
        {
            theclock.Timechanged += new Clock.TimeChangeHandler(NewTime);
        }
      public void NewTime(object theClock ,TimeEventArgs e)
        {
            Console.WriteLine("{0}:{1}:{2}",
                e.hour.ToString(),e.minute.ToString(), e.second.ToString());

        }
        
    }
}
