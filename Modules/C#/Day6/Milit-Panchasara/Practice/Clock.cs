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

        public delegate void TimeChangeHandler(object clock, TimeEventArgs timeInfo);

        public TimeChangeHandler TimeChanged;

        public void RunClock()
        {
            while(true)
            {
                Thread.Sleep(100);
                var currentTime = DateTime.Now;
                if(currentTime.Second != this.second)
                {
                    TimeEventArgs timeEventArgs = new TimeEventArgs()
                    {
                        Second = currentTime.Second,
                        Minute = currentTime.Minute,
                        Hour = currentTime.Hour
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
