using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace Practice
{
  public  class Clock
    {
        private int hour;
        private int minute;
        private int second;
        public delegate void TimeChangeHandler(object clock, TimeEventArgs timeInfo);
        public event  TimeChangeHandler Timechanged;
        public void RunClock()
        {
            while (true)
            {
                Thread.Sleep(100);
                DateTime Currrntime = DateTime.Now;
                if(Currrntime.Second != this.second)
                {
                    TimeEventArgs timeEventArfs = new TimeEventArgs();
                    {
                       hour = Currrntime.Hour;
                        minute = Currrntime.Minute;
                        second = Currrntime.Second;
                    };
                    if(Timechanged != null)
                    {
                        Timechanged(this, timeEventArfs);

                    }
                    this.second = Currrntime.Second;
                    this.minute = Currrntime.Minute;
                    this.hour = Currrntime.Hour;
                }
            }
        }
    }
}
