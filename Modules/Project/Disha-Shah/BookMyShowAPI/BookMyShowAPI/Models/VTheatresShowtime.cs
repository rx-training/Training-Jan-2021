using System;
using System.Collections.Generic;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class VTheatresShowtime
    {
        public int TheatreId { get; set; }
        public string Theatre { get; set; }
        public string Address { get; set; }
        public int CityId { get; set; }
        public string City { get; set; }
        public TimeSpan ShowTime { get; set; }
        public int ShowTimingId { get; set; }
    }
}
