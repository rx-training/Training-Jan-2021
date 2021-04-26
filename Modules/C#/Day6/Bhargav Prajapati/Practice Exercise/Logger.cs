using System;
using System.Collections.Generic;
using System.Text;

namespace Practice_Exercise
{
     public class Logger
    {
        public void subscribe(Clock theclock)
        {
            theclock.Timechangeed += new Clock.TimeChaneHandler(NewTime);

        }
        public void NewTime(object theClock, TimeEventArgs e)
        {
            Console.WriteLine($"{e.Hour.ToString()} :{e.Minute.ToString()}: {e.Secound.ToString()}");
        }
    }
}
