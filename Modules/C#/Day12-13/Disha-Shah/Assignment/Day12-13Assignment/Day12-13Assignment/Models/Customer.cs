using System;
using System.Collections.Generic;
using System.Text;

namespace Day12_13Assignment.Models
{
    public partial class Customer
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public long Contact { get; set; }

        public string Address { get; set; }

        public ICollection<ShipTo> ShipTos { get; set; }
        public ICollection<Order> Orders { get; set; }
    }
}
