using System;
using System.Collections.Generic;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class EventVenue
    {
        public EventVenue()
        {
            EventVenueShowTimings = new HashSet<EventVenueShowTiming>();
        }

        public int EventVenueId { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public int TotalTickets { get; set; }
        public int CityId { get; set; }

        public virtual City City { get; set; }
        public virtual ICollection<EventVenueShowTiming> EventVenueShowTimings { get; set; }
    }
}
