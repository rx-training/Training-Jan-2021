using System;
using System.Collections.Generic;

#nullable disable

namespace Day14.Models
{
    public partial class Customer
    {
      

        public int CustomerId { get; set; }
        public string CustomerName { get; set; }
        public string Contact { get; set; }

        public virtual ICollection<Order> Orders { get; set; }
    }
}
