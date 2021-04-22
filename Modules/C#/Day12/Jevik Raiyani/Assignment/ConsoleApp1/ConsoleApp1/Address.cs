using System;
using System.Collections.Generic;

#nullable disable

namespace ConsoleApp1
{
    public partial class Address
    {
        public Address()
        {
            CustomerWithAddresses = new HashSet<CustomerWithAddress>();
        }

        public int AddressId { get; set; }
        public string Address1 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }

        public virtual ICollection<CustomerWithAddress> CustomerWithAddresses { get; set; }
    }
}
