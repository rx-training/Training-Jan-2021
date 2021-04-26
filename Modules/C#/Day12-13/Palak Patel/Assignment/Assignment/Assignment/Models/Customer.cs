using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment.Models
{
    class Customer
    {
        public int CustomerId { get; set; }
        public string CustomerName { get; set; }
        public string City { get; set; }

        public ICollection<ShipToAddress> Address { get; set; }
    }
}
