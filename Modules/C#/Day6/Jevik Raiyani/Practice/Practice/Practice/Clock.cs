using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace Practice
{
    public class Clock
    {
        private int hour;
        private int minute;
        private int second;

        public delegate void TimeChangedHandler(object clock, TimeEventArgs timeInfo);

        public event TimeChangedHandler TimeChanged;
            
        public void RunClock()
        {
            while (true)
            {
                Thread.Sleep(100);
                DateTime currentTime = DateTime.Now;
                if(currentTime.Second != this.second)
                {
                    TimeEventArgs timeEventArgs = new TimeEventArgs()
                    {
                        Hour = currentTime.Hour,
                        Minute = currentTime.Minute,
                        Second = currentTime.Second
                    };
                    if(TimeChanged != null)
                    {
                        TimeChanged(this, timeEventArgs);
                    }
                    this.second = currentTime.Second;
                    this.minute = currentTime.Minute;
                    this.hour = currentTime.Hour;

                }
            }
        }
    }
}
