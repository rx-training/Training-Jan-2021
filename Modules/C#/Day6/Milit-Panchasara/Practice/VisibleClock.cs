using System;

namespace Practice
{
    internal class VisibleClock
    {
        public void Subscribe(Clock clk)
        {
            clk.TimeChanged += new Clock.TimeChangeHandler(NewTime);
        }

        public void NewTime(object clock, TimeEventArgs timeInfo)
        {
            Console.WriteLine($"{timeInfo.Hour}:{timeInfo.Minute}:{timeInfo.Second}");
        }
    }
}