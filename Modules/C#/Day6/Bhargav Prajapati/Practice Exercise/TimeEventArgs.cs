using System;
using System.Collections.Generic;
using System.Text;


namespace Practice_Exercise
{
    public class TimeEventArgs :EventArgs
    {
        public int Hour { get; set; }
        public int Minute { get; set; }
        public int Secound { get; set; }
    }
}