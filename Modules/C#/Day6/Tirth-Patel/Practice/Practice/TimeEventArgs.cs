using System;
using System.Collections.Generic;
using System.Text;
namespace Practice
{
    public class TimeEventArgs :EventArgs
    {
        public int hour { get; set; }
        public int minute { get; set; }
        public int second { get; set; }
    }
}