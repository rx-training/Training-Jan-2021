using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetApi.Models
{
    public partial class Address
    {
        public Address()
        {
            Gustes = new HashSet<Guste>();
        }

        public int AddressId { get; set; }
        public string Country { get; set; }
        public int Zip { get; set; }
        public string State { get; set; }
        public string City { get; set; }

        public virtual ICollection<Guste> Gustes { get; set; }
    }
}
