using System;
using System.Collections.Generic;
using System.Text;

namespace Practice
{
        public    class Logger
    {
        public void Subscribe(Clock theclock)
        {
            theclock.Timechanged +=  ( sender,  e) =>
            {
                Console.WriteLine("logging Event At {0}:{1}:{2}",
                    e.hour.ToString(), e.minute.ToString(), e.second.ToString());

            };
        }
      
    }
}
