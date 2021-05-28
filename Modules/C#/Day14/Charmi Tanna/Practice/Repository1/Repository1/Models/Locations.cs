using System;
using System.Collections.Generic;

namespace WEBAPI.Models
{
    public partial class Locations
    {
        public decimal LocationId { get; set; }
        public string StreetAddress { get; set; }
        public string PostalCode { get; set; }
        public string City { get; set; }
        public string StateProvince { get; set; }
        public string CountryId { get; set; }
    }
}
