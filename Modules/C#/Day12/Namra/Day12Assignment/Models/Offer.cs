using System;
using System.Collections.Generic;
using System.Text;

namespace Day12Assignment.Models
{
    class Offer
    {
        public int value { get; set; }
        public int offerValue { get; set; }
        public ICollection<Order> Orders { get; set; }
    }
}
