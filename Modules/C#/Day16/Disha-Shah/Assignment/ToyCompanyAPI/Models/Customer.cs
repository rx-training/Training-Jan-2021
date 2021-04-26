using System;
using System.Collections.Generic;

#nullable disable

namespace ToyCompanyAPI.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Orders = new HashSet<Order>();
            ShipTos = new HashSet<ShipTo>();
        }

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public long Contact { get; set; }
        public string Address { get; set; }

        public virtual ICollection<Order> Orders { get; set; }
        public virtual ICollection<ShipTo> ShipTos { get; set; }
    }
}
