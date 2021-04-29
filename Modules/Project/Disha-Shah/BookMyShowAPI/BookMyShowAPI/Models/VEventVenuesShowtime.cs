using System;
using System.Collections.Generic;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class VEventVenuesShowtime
    {
        public int EventVenueId { get; set; }
        public string EventVenue { get; set; }
        public string Address { get; set; }
        public int TotalTickets { get; set; }
        public int CityId { get; set; }
        public string City { get; set; }
        public TimeSpan ShowTime { get; set; }
        public int ShowTimingId { get; set; }
    }
}
