using System;
using System.Collections.Generic;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class VEventVenuesCity
    {
        public int EventVenueId { get; set; }
        public string EventVenue { get; set; }
        public string Address { get; set; }
        public int TotalTickets { get; set; }
        public string City { get; set; }
        public int CityId { get; set; }
        public int? RegionId { get; set; }
        public string Region { get; set; }
    }
}
