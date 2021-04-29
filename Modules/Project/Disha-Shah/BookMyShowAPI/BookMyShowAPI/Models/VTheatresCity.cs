using System;
using System.Collections.Generic;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class VTheatresCity
    {
        public int TheatreId { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
        public int CityId { get; set; }
        public int? RegionId { get; set; }
        public string Region { get; set; }
    }
}
