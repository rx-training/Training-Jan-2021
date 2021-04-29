using System;
using System.Collections.Generic;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class ScreenShowTiming
    {
        public int ScreenShowTimingsId { get; set; }
        public int ScreenId { get; set; }
        public int ShowTimingId { get; set; }

        public virtual Screen Screen { get; set; }
        public virtual ShowTiming ShowTiming { get; set; }
    }
}
