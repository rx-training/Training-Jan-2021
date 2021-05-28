using System;
using System.Collections.Generic;

namespace WEBAPI.Models
{
    public partial class Countries
    {
        public string CountryId { get; set; }
        public string CountryName { get; set; }
        public decimal? RegionId { get; set; }
    }
}
