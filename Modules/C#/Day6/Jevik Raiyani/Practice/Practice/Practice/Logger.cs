using System;
using System.Collections.Generic;
using System.Text;

namespace Practice
{
    public class Logger
    {

        public void Subscribe(Clock theClock)
        {
            theClock.TimeChanged +=
                (sender , e) =>
                {
                Console.WriteLine("Logging  event at {0}:{1}:{2}", e.Hour.ToString(), e.Minute.ToString(), e.Second.ToString());
                };


            //public void Subscribe(Clock theClock)
            //{
            //    theClock.TimeChanged += delegate (object sender, TimeEventArgs e)
            //{
            //    Console.WriteLine("Logging  event at {0}:{1}:{2}", e.Hour.ToString(), e.Minute.ToString(), e.Second.ToString());
            //};

            //public void Subscribe(Clock theClock)
            //{
            //    theClock.TimeChanged += new Clock.TimeChangedHandler(NewTime);
            //}

            //public void NewTime(object theClock, TimeEventArgs e)
            //{
            //    Console.WriteLine("Logging  event at {0}:{1}:{2}",e.Hour.ToString(),e.Minute.ToString(),e.Second.ToString());
            //}
        }
    }
}

