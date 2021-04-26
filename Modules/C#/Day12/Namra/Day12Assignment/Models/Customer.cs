using System;
using System.Collections.Generic;
using System.Text;

namespace Day12Assignment.Models
{
    class Customer
    {
        public int CustomerId { get; set; }
        public string CustomerName { get; set; }
        public string Contact { get; set; }

        public ICollection<Order> Orders { get; set; }

    }
}
