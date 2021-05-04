using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class Address
    {
        public int AddressId { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public double Zip { get; set; }
        public int CustomerId { get; set; }

        public virtual Customer Customer { get; set; }
    }
}
