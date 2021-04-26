using System;
using System.Collections.Generic;

#nullable disable

namespace Day14.Models
{
    public partial class Offer
    {
        public Offer()
        {
            Orders = new HashSet<Order>();
        }

        public int OfferValue { get; set; }
        public int Value { get; set; }

        public virtual ICollection<Order> Orders { get; set; }
    }
}
