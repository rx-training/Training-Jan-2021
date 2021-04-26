using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Practice_Exercise
{
    public class Clock
    {
        private int hour;
        private int minute;
        private int secound;
        public delegate void TimeChaneHandler(object clock, TimeEventArgs timeInfo);
        public event TimeChaneHandler Timechangeed;

        public void RunClock()
        {
            while (true)
            {
                Thread.Sleep(100);
                DateTime currenttime = DateTime.Now;
                if (currenttime.Second !=this.secound)
                {
                    TimeEventArgs timeEventArgs = new TimeEventArgs()
                    {
                        Hour = currenttime.Hour,
                        Minute = currenttime.Minute,
                        Secound = currenttime.Second
                        
                    };
                    if (Timechangeed != null)
                    {
                        Timechangeed(this, timeEventArgs);
                    }
                    this.secound = currenttime.Second;
                    this.hour = currenttime.Hour;
                    this.minute = currenttime.Minute;
                }

            }
        }
    }

}


