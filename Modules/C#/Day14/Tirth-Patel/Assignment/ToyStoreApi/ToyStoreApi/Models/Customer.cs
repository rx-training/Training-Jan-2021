using System;
using System.Collections.Generic;

#nullable disable

namespace ToyStoreApi.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Orders = new HashSet<Order>();
            ShipAddresses = new HashSet<ShipAddress>();
        }

        public int Cid { get; set; }
        public string Name { get; set; }
        public string Contact { get; set; }

        public virtual ICollection<Order> Orders { get; set; }
        public virtual ICollection<ShipAddress> ShipAddresses { get; set; }
    }
}
