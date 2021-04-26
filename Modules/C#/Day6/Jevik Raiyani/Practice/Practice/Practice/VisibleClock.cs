using System;
using System.Collections.Generic;
using System.Text;

namespace Practice
{
    public class VisibleClock
    {
        

        public void Subscribe(Clock theClock)
        {
            theClock.TimeChanged += new Clock.TimeChangedHandler(NewTime);
        }
        
        public void NewTime(object theClock,TimeEventArgs e)
        {
            Console.WriteLine("{0}:{1}:{2}",e.Hour.ToString(),e.Minute.ToString(),e.Second.ToString());
        }

    }
}
