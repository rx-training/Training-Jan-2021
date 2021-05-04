using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetApi.Models
{
    public partial class Addressofairport
    {
        public Addressofairport()
        {
            Airports = new HashSet<Airport>();
        }

        public int AddressId { get; set; }
        public int ZipCode { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public string Country { get; set; }

        public virtual ICollection<Airport> Airports { get; set; }
    }
}
