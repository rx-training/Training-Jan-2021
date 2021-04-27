using System;
using System.Collections.Generic;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class VCitiesRegion
    {
        public int CityId { get; set; }
        public string Name { get; set; }
        public string Region { get; set; }
        public int RegionId { get; set; }
    }
}
