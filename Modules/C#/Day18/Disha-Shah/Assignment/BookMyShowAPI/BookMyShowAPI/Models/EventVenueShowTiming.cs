using System;
using System.Collections.Generic;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class EventVenueShowTiming
    {
        public EventVenueShowTiming()
        {
            Events = new HashSet<Event>();
        }

        public int EventVenueShowTimingId { get; set; }
        public int EventVenueId { get; set; }
        public int ShowTimingId { get; set; }

        public virtual EventVenue EventVenue { get; set; }
        public virtual ShowTiming ShowTiming { get; set; }
        public virtual ICollection<Event> Events { get; set; }
    }
}
