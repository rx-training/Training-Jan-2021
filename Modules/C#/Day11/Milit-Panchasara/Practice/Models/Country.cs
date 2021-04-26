using System;
using System.Collections.Generic;

#nullable disable

namespace Practice.Models
{
    public partial class Country
    {
        public int CountryId { get; set; }
        public string CountryName { get; set; }
        public int RegionId { get; set; }
    }
}
