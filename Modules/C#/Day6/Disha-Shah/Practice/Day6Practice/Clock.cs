using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace Day6Practice
{
    class Clock
    {
        private int hour;
        private int min;
        private int sec;

        public delegate void TimeChangeHandler(object clock, TimeEventArgs timeinfo);

        public event TimeChangeHandler TimeChanged;

        public void RunClock()
        {
            while(true)
            {
                Thread.Sleep(100);
                DateTime currentTime = DateTime.Now;
                if(currentTime.Second!=this.sec)
                {
                    TimeEventArgs timeEventArgs = new TimeEventArgs() { Hour = currentTime.Hour, Min = currentTime.Minute, Sec = currentTime.Second };
                    if(TimeChanged != null)
                    {
                        TimeChanged(this, timeEventArgs);
                    }

                    this.sec = currentTime.Second;
                    this.min = currentTime.Minute;
                    this.hour = currentTime.Hour;
                }
            }
        }
    }
}
