using System;

namespace Day6Practice
{
    public class TimeEventArgs : EventArgs
    {
        public int Hour { get; set; }

        public int Min { get; set; }

        public int Sec { get; set; }
    }
}