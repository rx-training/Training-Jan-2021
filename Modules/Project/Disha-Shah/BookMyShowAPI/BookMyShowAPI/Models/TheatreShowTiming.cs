using System;
using System.Collections.Generic;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class TheatreShowTiming
    {
        public int TheatreShowTimingId { get; set; }
        public int TheatreId { get; set; }
        public int ShowTimingId { get; set; }

        public virtual ShowTiming ShowTiming { get; set; }
        public virtual Theatre Theatre { get; set; }
    }
}
